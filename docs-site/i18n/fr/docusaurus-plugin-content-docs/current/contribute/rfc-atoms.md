---
sidebar_position: 4
title: "RFC : Graphe d'atomes"
---

# RFC — Les atomes comme graphe de connaissances sourcé

> Document de design. Une proposition à discuter. Voir : [La Méthode](../method/core) (§3 attribution, §4 atomes & molécules, §8 panel de curateurs).

## Problème

Aujourd'hui, les faits musicologiques d'un genre vivent **dans chaque molécule**. Un fait sur le maloya est donc :

- **répété** dans chaque croisement maloya,
- **tenu par « le créateur » / « un auditeur »** — pas sourcé, pas falsifiable,
- **invisible en tant qu'unité** — il n'y a pas d'*atome* maloya à corriger une fois.

La méthode nomme déjà le levier : soigner l'**atome** (~600 genres), pas la **molécule** (~360k fusions).

## Ce qu'on construit

Un **graphe de connaissances d'atomes musicaux** qui remplit trois fonctions à la fois : un magasin pour le compilateur, un atlas navigable pour la découverte, et la couche musicologique sourcée manquante.

### Décisions clés

1. **Les collecteurs sont des agents, limités au registre 1 (musicologique).** Ils rapportent une position **attribuée à une source citée**, en statut `proposed`, pour que le cercle valide ou conteste.
2. **L'attribution va à la source citée**, pas à l'agent. Pas de source, pas de fait.
3. **L'axe politique (registre 3) est de première classe — assumé, et jamais rempli par l'agent.**

## Schéma (contrat de données)

Le schéma encode la règle d'attribution (§3) et la cohérence politique (§6) de la méthode dans les types :

```python
class Source(BaseModel):
    citation: str         # "Danyèl Waro, interview, Télérama 2018"
    locator: str          # URL / DOI / ISBN+page / timecode (requis, vérifiable)

class MusicologicalClaim(BaseModel):
    claim: str
    source: Source        # REQUIS — pas de source, pas de fait → ValidationError
    status: Status        # proposed | validated | contested

class Atom(BaseModel):
    atom: str
    status: Status
    musicological: list[MusicologicalClaim]   # registre 1
    constraints: list[Constraint]
    felt: list[HeldClaim]                     # registre 2 — le cercle
    political: list[HeldClaim]               # registre 3 — assumé, l'agent ne remplit JAMAIS
    exemplars: list[Exemplar]
```

## Statuts & modes de compilation

| statut | `compile --draft` (défaut) | `compile --strict` |
|--------|----------------------------|--------------------|
| proposed | inclus (marqué) | exclu |
| validated | inclus | inclus |
| contested | exclu | exclu |

`draft` est le défaut : ça garde le travail audible sans musicologue. `strict` est pour quand la lacune du panel se comble.

## L'approche

**Fichiers validés par schéma, le dépôt EST le graphe.** Chaque atome est un fichier YAML validé par Pydantic ; les croisements lient les atomes ; l'historique git *est* l'attribution dans le temps. La review se fait en PR.
