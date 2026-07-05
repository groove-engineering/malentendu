---
version: 1.0.0
name: run-groove-engineering
description: >-
  Build, run, and test the groove-engineering PoC (genre-atom compiler).
  Use when asked to run groove-engineering, test it, validate atoms,
  compile crossings, or verify changes to the schema/atomgraph/compiler.
---

# Run groove-engineering

groove-engineering is a Python CLI/library — a knowledge graph of music genre
atoms and crossings with a compiler that renders them into Suno prompts and
human briefs. "Running" it means exercising the compiler, validator, and tests.
Drive it via `.claude/skills/run-groove-engineering/smoke.sh` for the full
pipeline, or invoke individual modules directly.

All paths below are relative to the repo root.

## Prerequisites

Python 3.12+. No system packages beyond what ships with Ubuntu.

## Setup

```bash
pip install -r poc/requirements.txt
```

## Run (agent path)

Full smoke test — schema, atomgraph, validate, compile, render:

```bash
bash .claude/skills/run-groove-engineering/smoke.sh
```

Expected output ends with `All smoke tests passed.`

### Individual entry points

Schema self-tests (10 tests):

```bash
python3 poc/schema.py --check
```

Atomgraph self-tests (12 tests):

```bash
python3 poc/atomgraph.py --check
```

Validate all atoms and crossings on disk (schema + referential integrity + locators):

```bash
cd poc && python3 validate.py atoms crossings
```

Compile legacy fusions (fusions.json):

```bash
python3 poc/compile.py --check
```

Render crossings from the atom graph (draft mode includes `proposed` claims):

```bash
cd poc && python3 atomgraph.py atoms crossings
```

Render in strict mode (only `validated` claims — currently empty since all atoms are `proposed`):

```bash
cd poc && python3 atomgraph.py atoms crossings --strict
```

Render with human overlays:

```bash
cd poc && python3 atomgraph.py atoms crossings overlays
```

### Direct invocation (for PRs touching internals)

Most PRs touch `schema.py` or `atomgraph.py` internals. Import and call directly
without spinning up the full pipeline:

```bash
cd /path/to/repo && python3 -c '
import sys; sys.path.insert(0, "poc")
from schema import Atom, valid_locator
from atomgraph import load_atoms, load_crossings, compose_suno

atoms = load_atoms("poc/atoms")
crossings = load_crossings("poc/crossings")
prompt, avoid = compose_suno(crossings[0], atoms)
print(f"composed {len(prompt)} chars")
'
```

Key imports: `schema.Atom`, `schema.Crossing`, `schema.Source`,
`schema.MusicologicalClaim`, `schema.valid_locator`, `atomgraph.load_atoms`,
`atomgraph.load_crossings`, `atomgraph.compose_suno`, `atomgraph.check_refs`,
`atomgraph.merge_overlays`, `validate.validate`.

## Test

All tests are assert-based (no pytest). The CI pipeline runs them in order:

```bash
python3 poc/schema.py --check
python3 poc/atomgraph.py --check
cd poc && python3 validate.py atoms crossings
python3 poc/compile.py --check
```

Individual test files can also be run directly:

```bash
python3 poc/test_schema.py
python3 poc/test_atomgraph.py
python3 poc/test_validate.py
```

## Gotchas

- **`validate.py` and `atomgraph.py` must run from `poc/`.** They resolve
  `atoms/` and `crossings/` relative to cwd. Run with `cd poc && python3 ...`
  or pass explicit paths: `python3 poc/atomgraph.py poc/atoms poc/crossings`.

- **Strict mode renders almost nothing.** All atoms are currently `proposed`,
  so `--strict` only emits tension/avoid lines with no musicological claims.
  This is expected — `proposed` means "sourced, awaiting circle validation."

- **No pytest.** Tests use bare `assert` and a manual `_run()` harness. Don't
  `pip install pytest` and try to discover them — run the test files directly.

## Troubleshooting

- **`ModuleNotFoundError: No module named 'pydantic'`**: Run
  `pip install -r poc/requirements.txt`. Only two deps: pydantic and pyyaml.

- **`validate.py` reports "uncheckable locator"**: The locator on a
  musicological claim doesn't match any recognized shape (URL, DOI, ISBN+page,
  timecode). Fix the locator or drop the claim — this is the CI guard working.
