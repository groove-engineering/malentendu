#!/usr/bin/env python3
"""Assert-based tests for validate.py (no pytest).

Run: python test_validate.py
"""
import tempfile
from pathlib import Path

from validate import validate

_GOOD_ATOM = (
    "atom: maloya\n"
    "musicological:\n"
    "  - claim: ternary 6/8\n"
    "    source: { citation: UNESCO, locator: 'https://ich.unesco.org/en/RL/00249' }\n"
)
_BAD_LOCATOR_ATOM = (
    "atom: maloya\n"
    "musicological:\n"
    "  - claim: ternary 6/8\n"
    "    source: { citation: someone, locator: 'trust me' }\n"
)


def _dir_with(name, body):
    d = tempfile.mkdtemp()
    (Path(d) / name).write_text(body, encoding="utf-8")
    return d


def test_empty_is_clean():
    # before the migration there are no atoms; CI must pass, not error
    assert validate("does-not-exist", "also-not-exist") == []


def test_good_atom_passes():
    d = _dir_with("maloya.yaml", _GOOD_ATOM)
    assert validate(d, "no-crossings") == []


def test_bad_locator_is_flagged():
    d = _dir_with("maloya.yaml", _BAD_LOCATOR_ATOM)
    errors = validate(d, "no-crossings")
    assert errors and "uncheckable locator" in errors[0]


def test_dangling_crossing_is_flagged():
    atoms_d = _dir_with("maloya.yaml", _GOOD_ATOM)
    crossing = (
        "crossing: maloya-x-footwork\n"
        "atoms: [maloya, footwork]\n"      # footwork atom does not exist
        "frame_from: maloya\n"
        "tension: t\n"
        "creolizes: c\n"
        "opacity_preserved: o\n"
        "self_implication: s\n"
        "held_by: [author]\n"
    )
    crossings_d = _dir_with("maloya-x-footwork.yaml", crossing)
    errors = validate(atoms_d, crossings_d)
    assert errors and "unknown atom" in errors[0]


def test_good_overlay_passes():
    atoms_d = _dir_with("maloya.yaml", _GOOD_ATOM)
    overlays_d = _dir_with(
        "maloya.yaml",
        "atom: maloya\nfelt:\n  - text: trance-inducing\n    held_by: [Tristan]\n",
    )
    assert validate(atoms_d, "no-crossings", overlays_d) == []


def test_dangling_overlay_is_flagged():
    atoms_d = _dir_with("maloya.yaml", _GOOD_ATOM)
    overlays_d = _dir_with(
        "footwork.yaml",
        "atom: footwork\nfelt:\n  - text: frenetic\n    held_by: [author]\n",
    )
    errors = validate(atoms_d, "no-crossings", overlays_d)
    assert errors and "unknown atom" in errors[0]


def _run():
    n = 0
    for name, fn in sorted(globals().items()):
        if name.startswith("test_") and callable(fn):
            fn()
            n += 1
            print(f"  ok {name}")
    print(f"ok: {n} validate tests passed")


if __name__ == "__main__":
    _run()
