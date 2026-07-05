---
sidebar_position: 4
title: Method vs. Raw Prompt
---

# The method vs. a raw prompt

Why describe a fusion *once*, in a source, instead of just typing a prompt into Suno?

A **raw prompt** is free text typed straight into one model. It produces a *sound*. The **method** produces a *source* — reusable, sourced, correctable — that compiles to that sound (and to other backends). The difference is what you keep after the track plays.

## What the engine gives you

| # | Feature | Description |
|---|---------|-------------|
| 1 | **Single, model-agnostic source** | A fusion described *once*, in YAML |
| 2 | **Multi-backend compiler** | Same source → Suno prompt **and** human brief |
| 3 | **Frame vs. guest** | Which genre *dominates*, which stays a *guest* |
| 4 | **Sourced atoms** | Every claim carries `held_by` / `validated_by` + its register |
| 5 | **Validated exemplars** | A track + a timecode + who validated it |
| 6 | **Structured negative prompting** | `avoid` compiles to `[exclude]`, derived from past failures |
| 7 | **Tension to hold** | The artistic intent that must survive generation |
| 8 | **Feedback loop** | A failed drift strengthens the atom |
| 9 | **Versioned + checked** | YAML in git, reviewable in a PR, CI validates |

## Side by side

| Criterion | Raw prompt (typed into Suno) | groove-engineer |
|-----------|------------------------------|-----------------|
| **Targets** | 1 prompt = 1 model; rewrite for each backend | 1 source → N compiled backends |
| **Provenance** | undifferentiated opinion, no trace | each claim has `held_by` + register |
| **Genre hierarchy** | both genres "equal" → mush or one takes over | frame vs. guest, explicit |
| **Exclusions** | forgotten, retyped each time | `avoid` always applied, inherited from failures |
| **Memory** | none — you repeat the same misses | catalog → the atom hardens |
| **Reproducibility** | ephemeral text in a box | diffable YAML, PR review, self-check |
| **Intent** | dissolved in prose | `tension`, named and held |

## The proof — Maloya × Acid blues

**Raw, v1** drifted to Soviet-era rock; the maloya vanished. Logged as MR-001.

**The method** turns that miss into an atom:

- `constraint` → *"Reunionese maloya percussion must lead; acid blues stays a guest layer"*
- `avoid` → *"Eastern-European / Soviet rock, dominant electric guitar, anything erasing the maloya percussion…"*

The compiler re-injects these guard-rails into **every** subsequent generation. The same silent failure can't happen twice.

```
$ python3 poc/compile.py
--- SUNO (style prompt, EN) ---
Maloya x Acid blues fusion, Reunionese maloya percussion must lead; acid blues
stays a guest layer, ... TB-303 acid bass, ... 100-112 bpm, trance-inducing, swung,
in the spirit of Danyèl Waro, Christine Salem, Lindigo, ...
[exclude] 70s blues-rock band, Eastern-European / Soviet rock, ...
```

One source, two outputs (Suno + brief), every guard-rail carried — that's the line between a prompt and a method.

---

*non = malentendu*
