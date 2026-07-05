---
sidebar_position: 1
slug: /explanation/intro
title: Le Malentendu
---

# Le Malentendu

> "Music that never existed."

An **open method** for fusing musical genres. The product is the **method** — a *model-agnostic* representation of a fusion + a compiler — not the audio, not the prompt. The models (Suno, Udio, MusicGen, a human musician) are **interchangeable backends**.

Free, under **AGPLv3**.

## The founding principle

The product = **the method**, not the audio or the prompt. A fusion is described **once**, independently of any model; a compiler renders it to a target.

```mermaid
flowchart LR
  R["Representation (source)<br/>model-agnostic"] --> C{"compiler"}
  C --> S["Suno prompt"]
  C --> U["Udio prompt"]
  C --> M["MusicGen"]
  C --> H["human brief"]
  S -. "we listen, we fix" .-> R
```

## Five counter-voices

Every decision that touches the project's soul passes through counter-voices — the axis that startup optimization can't compute.

| Counter-voice | Stance | Forcing question |
|---|---|---|
| **Glissant** | creolization, opacity, Relation | *Is this creolization or a smoothie?* |
| **Debord** | détournement, spectacle, recuperation | *A lived situation, or accumulation of spectacle?* |
| **Albini** | craft, fair deal, the parasite | *Who's getting screwed? Is it honest?* |
| **Lessig** | commons, code as law, enclosure | *Does this grow the commons or just draw from it?* |
| **Schaeffer** | the ear, the sound object | *Close your eyes. What do you actually hear?* |

They are AI stances, not simulations of people. They sharpen; the human decides. Full portraits: [Personas](personas).

## What this is

| | |
|---|---|
| [Genesis](genesis) | How the project was born, in the open |
| [The Method](method) | The spec: 2 layers (sound + text), 3 registers (musicological / felt / political), atoms vs molecules |
| [Political Vision](political-vision) | Six theses, each voiced through a counter-voice |
| [Examples](examples) | Diagrams + 3 real worked examples |
| [Comparison](comparison) | Why the method beats a raw prompt |
| [Personas](personas) | The five counter-voices and the decision process |
| [Knowledge Graph](/docs/reference/knowledge-graph/overview) | The atoms and crossings — navigable |
| [Catalog](/docs/reference/catalog) | The *found misunderstandings* — beautiful accidents we keep |

## Take part

Join the [Discussions](https://github.com/trivoallan/groove-engineering/discussions) on GitHub. Tag your register:
🎼 musicological (a fact) · 👂 felt (subjective) · ✊ political (values).
Disagreement is the point.

## Run the proof

```bash
python3 poc/compile.py          # compile fusions -> Suno + brief
python3 poc/compile.py --check  # self-check
```
