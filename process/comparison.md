# Le Malentendu — the method vs. a raw prompt

Companion to [`method.md`](method.md) (the spec) and [`examples.md`](examples.md)
(worked examples). Why describe a fusion *once*, in a source, instead of just
typing a prompt into Suno?

A **raw prompt** is free text typed straight into one model. It produces a
*sound*. The **method** produces a *source* — reusable, sourced, correctable —
that compiles to that sound (and to other backends). The difference is what you
keep after the track plays.

---

## What the engine gives you

| # | Feature | Where it lives |
|---|---------|----------------|
| 1 | **Single, model-agnostic source** — a fusion described *once*, in JSON | [`poc/fusions.json`](../poc/fusions.json) |
| 2 | **Multi-backend compiler** — same source → Suno prompt (EN) **and** human brief (Udio/MusicGen next) | `compile_suno` / `compile_brief` |
| 3 | **Frame vs. guest** — which genre *dominates* (`groove_from`), which stays a *guest* (`harmony_from`) | `groove_from` / `harmony_from` |
| 4 | **Sourced atoms** — every claim carries `held_by` / `validated_by` + its register (🎼 fact / 👂 felt / ✊ political) | `constraints`, `ressenti`, `exemplar` |
| 5 | **Validated exemplars** — a track + a timecode + who validated it (`Calculon ~1:00`) | `exemplar.validated_by` |
| 6 | **Structured negative prompting** — `avoid` compiles to `[exclude]`, derived from past failures | `avoid` |
| 7 | **Tension to hold** — the artistic intent that must survive generation | `tension` |
| 8 | **Feedback loop** — a failed drift strengthens the atom (the maloya `constraint` came from miss MR-001) | [`catalogue/`](../catalogue/misunderstandings.md) |
| 9 | **Versioned + checked** — JSON in git, reviewable in a PR, `--check` validates required fields | `check()` |

## Method vs. raw, side by side

| Criterion | Raw prompt (typed into Suno) | groove-engineer |
|-----------|------------------------------|-----------------|
| **Targets** | 1 prompt = 1 model; rewrite for each backend | 1 source → N compiled backends |
| **Provenance** | undifferentiated opinion, no trace | each claim has `held_by` + register |
| **Genre hierarchy** | both genres "equal" → mush or one takes over | frame vs. guest, explicit |
| **Exclusions** | forgotten, retyped each time | `avoid` always applied, inherited from failures |
| **Memory** | none — you repeat the same misses | catalogue → the atom hardens |
| **Reproducibility** | ephemeral text in a box | diffable JSON, PR review, self-check |
| **Intent** | dissolved in prose | `tension`, named and held |

## The proof — Maloya × Acid blues

**Raw, v1** drifted to Soviet-era rock (*"test-card broadcast, USSR-era
Hungary"*); the maloya vanished. Logged as [MR-001](../catalogue/misunderstandings.md).

**The method** turns that miss into an atom:

- `constraint` → *"Reunionese maloya percussion must lead; acid blues stays a guest layer"*
- `avoid` → *"Eastern-European / Soviet rock, dominant electric guitar, anything erasing the maloya percussion…"*

The compiler re-injects these guard-rails into **every** subsequent generation.
The same silent failure can't happen twice.

```
$ python3 poc/compile.py
--- SUNO (style prompt, EN) ---
Maloya x Acid blues fusion, Reunionese maloya percussion must lead; acid blues
stays a guest layer, ... TB-303 acid bass, ... 100-112 bpm, trance-inducing, swung,
in the spirit of Danyèl Waro, Christine Salem, Lindigo, ...
[exclude] 70s blues-rock band, Eastern-European / Soviet rock, ...
```

One source, two outputs (Suno + brief), every guard-rail carried — that's the
line between a prompt and a method.

---

*non = malentendu*
