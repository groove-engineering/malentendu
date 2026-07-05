---
sidebar_position: 4
title: "RFC: Atoms Knowledge Graph"
---

# RFC — Atoms as a sourced knowledge graph

> Design doc. A proposal to discuss. See: [The Method](/docs/explanation/method) (§3 attribution, §4 atoms & molecules, §8 curator roster).

## Problem

Today, musicological facts about a genre live **inside each molecule**. So a fact about the maloya is:

- **repeated** in every maloya crossing,
- **held by "the maker" / "a listener"** — not sourced, not falsifiable,
- **invisible as a unit** — there is no maloya *atom* to fix once.

The method already names the lever: cure the **atom** (~600 genres), not the **molecule** (~360k fusions).

## What we're building

A **knowledge graph of musical atoms** that serves three functions at once: a store for the compiler, a navigable atlas for discovery, and the missing musicological source layer.

### Key decisions

1. **Collectors are agents, scoped to register 1 (musicological) only.** They report a position **attributed to a cited source**, in status `proposed`, for the circle to validate or contest.
2. **Attribution goes to the cited source**, not to the agent. No source, no fact.
3. **The political axis (register 3) is first-class — owned, and never agent-filled.**
4. **The intention register (register 4) is held, like felt and political.** The maker's declared project for a fusion — not falsifiable, not constraining at render. Lives on crossings (design intention) and exemplars (execution intention).

## Schema (data contract)

The schema encodes the method's attribution rule (§3) and political coherence (§6) in types:

```python
class Source(BaseModel):
    citation: str         # "Danyèl Waro, interview, Télérama 2018"
    locator: str          # URL / DOI / ISBN+page / timecode (required, machine-checkable)

class MusicologicalClaim(BaseModel):
    claim: str
    source: Source        # REQUIRED — no source, no fact → ValidationError
    status: Status        # proposed | validated | contested

class Atom(BaseModel):
    atom: str
    status: Status
    musicological: list[MusicologicalClaim]   # register 1 — agent-fillable
    constraints: list[Constraint]
    felt: list[HeldClaim]                     # register 2 — the circle
    political: list[HeldClaim]               # register 3 — owned, agent NEVER fills
    exemplars: list[Exemplar]

class Crossing(BaseModel):
    crossing: str
    atoms: tuple[str, str]
    frame_from: str
    tension: str
    intention: list[HeldClaim]    # register 4 — the maker's declared project, held
    avoid: str | None
    creolizes: str            # §6 coherence test
    opacity_preserved: str    # §6 coherence test
    self_implication: str     # owned answer
    held_by: list[str]
```

## Status & compile modes

| status | `compile --draft` (default) | `compile --strict` |
|--------|-----------------------------|--------------------|
| proposed | included (flagged) | excluded |
| validated | included | included |
| contested | excluded | excluded |

`draft` is the default: it keeps the work audible without a musicologist. `strict` is for when the roster gap closes.

## The approach

**Schema-validated files, the repo IS the graph.** Each atom is a YAML file validated by Pydantic; crossings link atoms; git history *is* attribution over time. Review happens in PRs.

## Risks / open questions

- **No musicologist to validate.** The `draft` compile mode and required `locator` are the partial mitigations.
- **Agent hallucinated sources.** Required `locator` + CI shape-check catch fabrication.
- **Political fields rot into a checklist.** The circle's ear judges; a hollow self-implication is cut.
- **The agent reaching into register 3.** Its output type has no political field — the boundary is structural.
