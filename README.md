# Le Malentendu

> "Music that never existed."

An **open method** for fusing musical genres. The product is the
**method** — a *model-agnostic* representation of a fusion + a
compiler — not the audio, not the prompt. The models (Suno, Udio,
MusicGen, a human musician) are **interchangeable backends**.

Free, under **AGPLv3**.

## Documentation

**[trivoallan.github.io/groove-engineering](https://trivoallan.github.io/groove-engineering/)** — also available [in French](https://trivoallan.github.io/groove-engineering/fr/).

### Explanation

| | |
|---|---|
| [Introduction](https://trivoallan.github.io/groove-engineering/docs/explanation/intro) | What this is and why |
| [The Method](https://trivoallan.github.io/groove-engineering/docs/explanation/method) | 2 layers (sound + text), 3 registers (musicological / felt / political), atoms vs molecules |
| [Political Vision](https://trivoallan.github.io/groove-engineering/docs/explanation/political-vision) | Six theses: authenticity, commons, creolization, opacity, self-implication, meaning |
| [Examples](https://trivoallan.github.io/groove-engineering/docs/explanation/examples) | Diagrams + 3 real worked examples |

### Reference

| | |
|---|---|
| [Knowledge Graph](https://trivoallan.github.io/groove-engineering/docs/reference/knowledge-graph/overview) | Atoms and crossings — navigable |
| [Catalog](https://trivoallan.github.io/groove-engineering/docs/reference/catalog) | The *found misunderstandings* — the happy accidents we keep |
| [Schema](https://trivoallan.github.io/groove-engineering/docs/reference/schema) | RFC: atoms as a sourced knowledge graph |

### How-to

| | |
|---|---|
| [Give Feedback](https://trivoallan.github.io/groove-engineering/docs/how-to/give-feedback) | Comment on the method — tag your register |
| [Send a Listening Sheet](https://trivoallan.github.io/groove-engineering/docs/how-to/send-listening-sheet) | Submit a structured listening report |

## This repo

| | |
|---|---|
| [`docs-site/`](docs-site/) | Docusaurus site — the method, published (EN + FR) |
| [`poc/`](poc/) | Proof of concept: `python3 poc/compile.py` compiles a fusion into a Suno prompt **and** a human brief (two backends, one source) |
| [`catalog/tracks/`](catalog/tracks/) | Track pages for found misunderstandings (MR-002 … MR-008) |

## Take part

Read the open RFC and **comment on the Pull Request**. Tag your register:
🎼 musicological (a fact) · 👂 felt (subjective) · ✊ political (values).
Disagreement is the point.

## Quick start

```bash
# Run the compiler
python3 poc/compile.py          # compile fusions -> Suno + brief
python3 poc/compile.py --check  # self-check

# Run the docs locally
cd docs-site && npm install && npm run generate-atoms && npm start
```
