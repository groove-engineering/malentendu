# RFC — Atoms as a sourced knowledge graph

> Design doc from an office-hours session. Not code. A proposal to discuss in this PR.
> See: [method.md](../method.md) (§3 attribution, §4 atoms & molecules, §8 curator roster).

## Problem

Today, musicological facts about a genre live **inside each molecule** (`groove_from.desc`,
`instrumentation`, `tempo_feel` in [`poc/fusions.json`](../../poc/fusions.json)). So a fact
about the maloya is:

- **repeated** in every maloya crossing,
- **held by "the maker" / "a listener"** — not sourced, not falsifiable,
- **invisible as a unit** — there is no maloya *atom* to fix once.

The method already names the lever: cure the **atom** (~600 genres), not the **molecule**
(~360k fusions). A badly-defined Footwork poisons its 600 crossings; fixed once, it repairs
them all (§4). And §8 admits the gap: *musicological → we need one. Current gap.*

## What we're building (and what we're not)

A **knowledge graph of musical atoms** that serves three functions at once: a store for the
compiler, a navigable atlas for discovery, and the missing musicological source layer.

Decided in session:

1. **Collectors are agents, scoped to register 1 (musicological) only.** They do not feel
   (register 2 = the circle), do not own the politics (register 3 = the author), and are not
   experts. They are **passers**: they report a position **attributed to a cited source**, in
   status `proposed`, for the circle to validate or contest. The agent says *"here is what X
   says,"* never *"this is true."*
2. **Attribution goes to the cited source**, not to the agent. No source, no fact. The sourcing
   *is* the validation mechanism in the absence of a human musicologist (P2 below).
3. **The political axis (register 3) is first-class — owned, and never agent-filled.** §6 calls it
   the engine room; it lives mostly in the crossings. The schema gives it a place the agent
   structurally cannot reach, and it carries the method's two coherence tests plus the named
   self-implication. A graph that drops it *is* the extraction the method critiques (see below).

Not building: register-2/3 *automation* (the agent never produces felt or political claims) — but
register 3 is in the model (political claims + the crossing coherence answers). Opacity is honored
as a *practice*, not a schema field (see the politics section). Also out: a real graph database, or
600 atoms up front.

## Premises (validated in session)

- **P1 — The wedge tests the *process*, not time saved.** On two genres a knowledgeable human
  writes the sheets in an hour; an agent may be slower. Irrelevant. The wedge proves the loop
  *source → attribute → circle validates/contests*. That loop is what scales to 600.
- **P2 — Sourcing stands in for the absent musicologist.** No human expert yet says "this tempo
  is wrong." But a fact attributed to a named work is *falsifiable by anyone who checks the
  source*. Attribution partially replaces the missing expert. If a fact can't be sourced, it was
  an opinion wearing a fact's clothes — that's a finding, not a failure.
- **P3 — The political answer is owned, and judged by the ear, not a checkbox.** §6's two
  coherence tests (does it creolize or flatten? does it preserve opacity or hand culture to the
  machine?) are required as *text the author writes*, not a boolean. §7: form, not sermon — the
  schema forces the reflection, the circle's ear decides if it's alive. A crossing whose
  self-implication can't be answered shouldn't exist.

## Approach A — Schema-validated files, the repo IS the graph (chosen)

No database. Each atom is a structured, **schema-validated** file (YAML, validated by a Pydantic
model); crossings link atoms; the versioned repo *is* the graph, and git history *is* attribution
over time. Review happens in **PRs** — the existing flow. `compile.py` evolves to compose
atom + atom instead of reading flat molecules.

The essential of A was never "markdown" — it was *no DB, repo is the graph, PR review*. That
holds. The win Pydantic adds: **attribution becomes a type constraint** (§3). A musicological
claim without a `source` does not validate — it cannot enter the repo. *No source, no fact* is a
`ValidationError`, not a discipline. A human-readable markdown view is a **derived rendering**
from the YAML (first step toward C), added later, for free.

We chose A over two alternatives:

- **B — triples in a real DB (SQLite / triplestore).** Over-engineered for ~600 nodes; reviewing
  a JSON/DB diff is less human than a file PR. Revisit only if the navigable atlas becomes the
  main product.
- **C — schema source-of-truth + derived views (markdown + graph index).** The likely *target*:
  keep schema-validated YAML as truth, derive a human markdown view and a queryable index for the
  atlas. A is literally the first step of C — add the derived index only when we actually need to
  query (2-3 atoms in). The `defer` on JSON/SQLite/Neo4j holds: the index regenerates from files.

### Schema (Pydantic) — the data contract

The schema *is* the method's attribution rule (§3) and its political coherence (§6), encoded in
types. `source` is required on a musicological claim; `held_by` is required on a held position; a
crossing must carry its §6 answers. The agent's output type (`MusicologicalReport`) has **no
political field at all** — the register-3 boundary is enforced by construction, not by good
behavior. The model is the spec; the `.yaml` files are instances; structured output is validated
against it.

```python
from enum import Enum
from pydantic import BaseModel, Field

class Status(str, Enum):
    proposed = "proposed"; validated = "validated"; contested = "contested"

class Source(BaseModel):
    citation: str                       # "Danyèl Waro, interview, Télérama 2018"
    locator: str                        # REQUIRED, machine-checkable: URL / DOI / ISBN+page /
                                        #   timecode. A CI shape-check validates it, so a
                                        #   fabricated source is catchable WITHOUT a musicologist.
                                        #   no locator, no fact.

class MusicologicalClaim(BaseModel):    # register 1 — falsifiable
    claim: str
    source: Source                      # REQUIRED. no source, no fact -> ValidationError
    status: Status = Status.proposed
    signed_by: list[str] = []           # circle members who validated/contested

class HeldClaim(BaseModel):             # register 2 (felt) or 3 (political) — held, not true
    register: str = Field(pattern="^(felt|political)$")
    text: str
    held_by: list[str] = Field(min_length=1)   # a position always has an owner

class Constraint(BaseModel):
    claim: str                          # "vocals in Reunion Creole"
    held_by: list[str] = Field(min_length=1)

class Exemplar(BaseModel):
    track: str
    cue: str | None = None
    recognized_by: list[str] = []

class Atom(BaseModel):
    atom: str                           # "maloya"
    status: Status = Status.proposed
    musicological: list[MusicologicalClaim]      # register 1 — agent-fillable
    constraints: list[Constraint] = []
    felt: list[HeldClaim] = []                   # register 2 — the circle
    political: list[HeldClaim] = []              # register 3 — owned, agent NEVER fills
    exemplars: list[Exemplar] = []
    curators: list[str] = []

# what the agent emits — register 1 only, by construction (no political field exists):
class MusicologicalReport(BaseModel):
    atom: str
    musicological: list[MusicologicalClaim]

class Crossing(BaseModel):
    crossing: str                       # "maloya-x-footwork"
    atoms: tuple[str, str]
    frame_from: str                     # which atom is the dominant frame
    tension: str
    avoid: str | None = None
    # §6 political coherence — owned answers, required as TEXT (force reflection, not a checkbox):
    creolizes: str          # how it creolizes (fertile friction) rather than flattens (slop)
    opacity_preserved: str  # how it preserves opacity rather than hands culture to the machine
    self_implication: str   # owned answer to "is this fusion the extraction it critiques?"
    held_by: list[str] = Field(min_length=1)   # who owns these answers
```

A maloya atom instance, as stored (`atoms/maloya.yaml`) — diffable, commentable in a PR:

```yaml
atom: maloya
status: proposed
musicological:
  - claim: "ternary 6/8, hypnotic pulse"
    source: { citation: "…", locator: "…" }
    status: proposed
  - claim: "core percussion: kayamb, roulèr, sati, bobre"
    source: { citation: "…", locator: "…" }
    status: proposed
constraints:
  - claim: "vocals in Reunion Creole"
    held_by: ["the maker"]
felt:
  - { register: felt, text: "trance-inducing, ancestral Indian-Ocean", held_by: ["a listener"] }
political:                     # owned by the author — the agent never writes here
  - register: political
    text: "maloya is a music of resistance (banned under colonial Réunion); crossing it without carrying that charge flattens it"
    held_by: ["the author"]
exemplars:
  - { track: "Danyèl Waro", recognized_by: ["the circle"] }
```

A **crossing** carries only what's specific to the fusion; per-genre facts come from the atoms:

```yaml
crossing: maloya-x-footwork
atoms: [maloya, footwork]
frame_from: maloya          # groove + percussion lead
tension: "ancestral 6/8 trance against displaced off-grid juke kicks"
avoid: "busy hi-hat rolls, EDM gloss, anything erasing the maloya percussion"
# §6 coherence — owned, required as text (not a checkbox):
creolizes: "two diasporic resistance grooves meeting as equals, not world-music garnish on a club track"
opacity_preserved: "maloya keeps the frame and its Creole call-and-response; it is not dissolved into juke"
self_implication: "yes — an AI crossing two colonized-culture musics is the extraction it critiques; the work owns that as its subject, keeps maloya in the lead, and cites its sources"
held_by: ["the author"]
```

### Status & compile modes

A claim's `status` drives whether it renders. Two modes, because gating "validated only" while the
roster has no musicologist (§8) would compile *nothing* and the ear could never judge (§7):

| status     | `compile --draft` (default) | `compile --strict` | meaning |
|------------|------------------------------|--------------------|---------|
| proposed   | included (flagged)           | excluded           | drafted, not vetted; the ear still judges |
| validated  | included                     | included           | a human signed off (`signed_by` non-empty) |
| contested  | excluded (stored, "to resolve") | excluded        | divergence *held* in storage (§3), not "wrong"; compile waits for the author to resolve |

`draft` is the default today: it keeps the work audible without a musicologist, and the circle's
ear is the validator that *does* exist. `strict` is the vetted version for when the roster gap
closes. Fabrication is caught earlier by the required `locator` + CI shape-check, not by the
(absent) expert. This replaces a hard "validated-only" gate, which would deadlock: no validator,
nothing compiles, nothing to listen to.

### The collector agent (minimal)

One research agent, not yet an orchestrated "team": given a genre, it emits a `MusicologicalReport`
via **structured output validated against the schema above** — so it *cannot* return a claim
without a source, and it has **no field to write a political or felt claim**. The register-3
boundary is in the type, not the prompt. It fills the facts with **real, citable sources**, status
`proposed`, and opens a PR; a human then assembles the `Atom`, adding the owned political layer.
One agent, one register, two genres. The "team" (an agent per aspect/register) comes after the
format holds.

### The political axis (register 3) — owned, and self-implication

The method puts politics in the engine room (§6), not the lyrics (§7: form, not sermon). So the
graph integrates it as **structure, not slogans**:

- **At the atom**, register 3 is an *owned* reading (`political`). The **right to opacity** (§6) is
  honored as a *practice*, not a field: we simply do not decompose some atoms, or leave them thin
  on purpose. We deliberately refuse an `opacity` field — encoding "what we refuse to make legible"
  into a schema would *itself* make the refusal legible, the betrayal performed. Opacity is kept by
  the silence, not by a record of the silence.
- **At the crossing**, the two coherence tests are required fields: does it **creolize** or
  **flatten**? does it **preserve opacity** or **hand culture to the machine**? Plus the named
  **self-implication**: an AI fusing colonized-culture musics risks being the extraction it
  critiques — the owned answer is *"yes, and the work knows it; that's the subject."*
- **The agent never touches this.** Its output type has no political field. The machine collects
  sourced facts (register 1); meaning (register 3) stays with the human who owns it. *"We use the
  enemy's weapons, and we say so."*

These fields are text, not booleans, on purpose. §7: the schema forces the question; the circle's
ear decides whether the answer is alive. Glissant won't save a boring or a dishonest crossing.

## The wedge: maloya + footwork + their crossing

Two atoms, not one — so we test enrichment *and* a fecund crossing in one shot. Footwork is the
method's own example of "ill-defined poisons its 600 crossings" (§4). Both already exist as
scattered molecule properties in `fusions.json` — the wedge is to **lift them into sourced
atoms** and prove the loop produces a richer, more reliable sheet than the hand-curated JSON.

Done = both atom sheets exist with sourced musicological claims **and an owned political layer**,
a maloya-x-footwork crossing references them **and answers the three §6 fields in the author's
voice**, and the circle has validated or contested at least the maloya sheet in a PR.

### Migration: one source of truth

Don't let `atoms/` and `fusions.json` coexist — two truths drift. Migrate all three existing
fusions into atoms + crossings in the wedge PR series, then **delete `fusions.json`**; `compile.py`
reads only `atoms/` + `crossings/`. Six genres by hand, ~1h.

The existing JSON fields don't all belong in the same place. Placement rule:
- **Atom** (true of the genre regardless of what it's crossed with, sourceable): core
  `instrumentation` (kayamb, roulèr…), the genre's characteristic tempo *range*, the vocal
  *convention* (Creole call-and-response). These become sourced musicological claims.
- **Crossing** (a choice specific to *this* fusion): `production`, the picked `tempo_feel`, the
  specific `vocal` treatment, instruments *added* for the blend (the TB-303 in maloya×acid-blues),
  and `avoid`.

The test: *"would this be true of the genre on its own?"* → atom. *"Is this a decision about this
blend?"* → crossing.

### Build & validation (locked in eng review)

- **`poc/schema.py` is the single source of the data contract.** The schema block above is
  illustrative; once implemented, this doc points at `schema.py` instead of keeping a second copy
  (no drift).
- **Sequencing:** refactor first, then switch behavior. Land the loader + schema, *then* change
  `compile.py` from flat molecules to atom+crossing compose. Never structural + behavioral in one
  commit.
- **Referential integrity:** `compile.py` rejects a crossing whose `atoms` are missing with a named
  `UnknownAtom`, not a bare `KeyError`.
- **CI (GitHub Actions, on every PR):** run `python poc/compile.py --check` + a `locator` shape
  check + the referential check. The repo has no CI today; without it these guards are decoration
  and a bad atom merges silently.
- **Tests:** assert-based, extending the existing `--check` pattern (no pytest). Cover: locator
  required, source required, `held_by` non-empty, ref-check → `UnknownAtom`, status×mode filter
  (proposed excluded in `--strict` / included in `--draft`), compose contains both genres,
  contested excluded from compile.
- **Migration regression (critical):** compile the migrated atoms and diff against the old
  `fusions.json` output for the three existing fusions. If it diverges, the migration broke
  something.

## Risks / open questions

- **No musicologist to validate (the §8 gap).** The roster gap is real and not closed here. The
  answer is the `draft` compile mode: the work stays audible and the circle's ear judges (§7)
  while no expert exists. `strict` mode waits for the expert. We do not pretend sourcing *is*
  expertise — it is traceability.
- **Agent hallucinated sources.** A cited source that doesn't say what the agent claims is worse
  than no source. The required `locator` + a CI shape-check catch fabrication (a dead URL, a
  malformed DOI) without a musicologist; semantic spot-check stays part of the circle's review.
- **compile.py rewrite.** Composing atom+atom changes the compiler: it now reads `atoms/` +
  `crossings/`, honors `--draft`/`--strict`, and must reject a crossing that references a missing
  atom (named error, not `KeyError`). Built on the wedge — no code in this RFC.
- **Format drift.** When the atom sheet schema changes, every sheet drifts. Keep the schema in
  this doc as the single source until it stabilizes (same discipline as method.md → PoC).
- **Political fields rot into a checklist.** Required §6 text can degrade into rubber-stamped
  boilerplate ("yes it creolizes"). The mitigation is not technical: the circle's ear judges the
  answer, and a crossing with a hollow self-implication is cut, not merged. The type forces the
  question; it cannot force honesty.
- **The agent reaching into register 3.** A future "team" agent could be tempted to draft the
  political reading. It must not. Keep the agent's output type political-field-free; the human
  owns meaning. This is the self-implication guardrail, not a nice-to-have.

## The assignment (do this before any agent)

**Write the maloya atom sheet by hand**, in the format above, with 8 musicological facts —
**each carrying a real source you can actually cite** (a Danyèl Waro interview, an Indian-Ocean
ethnomusicologist, Carpanin Marimoutou, a maloya field recording's liner notes…). When you hit a
fact you *can't* source, stop: that fact was an opinion disguised as truth. Thirty minutes by
hand tells you whether the format and the sourcing premise hold — *before* you build a single
agent.

Then write **one** political line for the maloya-x-footwork crossing: the `self_implication`
answer, in your own voice. If you can't honestly say why crossing these two colonized-culture
musics with an AI isn't just extraction, the crossing shouldn't ship. A fact you can't source is
an opinion; a crossing you can't own politically is extraction. Same test, two registers.
