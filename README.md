# Le Malentendu

> "Music that never existed."

An **open method** for fusing musical genres. The product is the **method** — a
*model-agnostic* representation of a fusion + a compiler — not the audio, not the
prompt. The models (Suno, Udio, MusicGen, a human musician) are **interchangeable
backends**.

Free, under **AGPLv3**.

## Documentation

The full method is published at:
**[trivoallan.github.io/groove-engineering](https://trivoallan.github.io/groove-engineering/)**

Available in English and French.

| | |
|---|---|
| [The Method](https://trivoallan.github.io/groove-engineering/docs/method/core) | The spec: 2 layers (sound + text), 3 registers (musicological / felt / political), atoms vs molecules |
| [Political Vision](https://trivoallan.github.io/groove-engineering/docs/method/political-vision) | Six theses: authenticity, commons, creolization, opacity, self-implication, meaning |
| [Examples](https://trivoallan.github.io/groove-engineering/docs/method/examples) | Diagrams + 3 real worked examples |
| [Knowledge Graph](https://trivoallan.github.io/groove-engineering/docs/knowledge-graph/overview) | Atoms and crossings — navigable |
| [Catalogue](https://trivoallan.github.io/groove-engineering/docs/catalogue/misunderstandings) | The *found misunderstandings* — the happy accidents we keep |

## This repo

| | |
|---|---|
| [`docs-site/`](docs-site/) | Docusaurus site — the method, published (EN + FR) |
| [`poc/`](poc/) | the proof: `python3 poc/compile.py` compiles a fusion into a Suno prompt **and** a human brief (two backends, one source) |
| [`catalogue/tracks/`](catalogue/tracks/) | track pages for found misunderstandings (MR-002 … MR-008) |

## Take part

Read the open RFC and **comment on the Pull Request**. Tag your register:
🎼 musicological (a fact) · 👂 felt (subjective) · ✊ political (values).
Disagreement is the point.

## Run the proof

```bash
python3 poc/compile.py          # compile fusions -> Suno + brief
python3 poc/compile.py --check  # self-check
```

## Run the docs locally

```bash
cd docs-site && npm install && npm run generate-atoms && npm start
```

---

*non = malentendu*
