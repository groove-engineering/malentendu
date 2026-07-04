# RFC — Les atomes comme graphe de connaissances sourcé

> Document de design issu d'une session d'office-hours. Pas du code. Une proposition à discuter dans cette PR.
> Voir : [method.md](../method.md) (§3 attribution, §4 atomes & molécules, §8 panel de curateurs).

## Problème

Aujourd'hui, les faits musicologiques sur un genre vivent **à l'intérieur de chaque molécule** (`groove_from.desc`,
`instrumentation`, `tempo_feel` dans [`poc/fusions.json`](../../poc/fusions.json)). Un fait
sur le maloya est donc :

- **répété** dans chaque croisement maloya,
- **tenu par « le créateur » / « un auditeur »** — non sourcé, non falsifiable,
- **invisible en tant qu'unité** — il n'y a pas d'*atome* maloya à corriger une fois.

La méthode nomme déjà le levier : curer l'**atome** (~600 genres), pas la **molécule**
(~360k fusions). Un Footwork mal défini empoisonne ses 600 croisements ; corrigé une fois, il les répare
tous (§4). Et §8 admet la lacune : *musicologique → on en a besoin. Lacune actuelle.*

## Ce qu'on construit (et ce qu'on ne construit pas)

Un **graphe de connaissances d'atomes musicaux** qui remplit trois fonctions à la fois : un stockage pour le
compilateur, un atlas navigable pour la découverte, et la couche source musicologique manquante.

Décidé en session :

1. **Les collecteurs sont des agents, limités au registre 1 (musicologique) uniquement.** Ils ne ressentent pas
   (registre 2 = le cercle), ne possèdent pas la politique (registre 3 = l'auteur), et ne sont pas
   experts. Ce sont des **passeurs** : ils rapportent une position **attribuée à une source citée**, en
   statut `proposed`, pour que le cercle valide ou conteste. L'agent dit *« voici ce que X
   dit »*, jamais *« c'est vrai. »*
2. **L'attribution va à la source citée**, pas à l'agent. Pas de source, pas de fait. Le sourçage
   *est* le mécanisme de validation en l'absence d'un musicologue humain (P2 ci-dessous).
3. **L'axe politique (registre 3) est de première classe — assumé, et jamais rempli par l'agent.** §6 l'appelle
   la salle des machines ; il vit surtout dans les croisements. Le schéma lui donne une place que l'agent
   ne peut structurellement pas atteindre, et il porte les deux tests de cohérence de la méthode plus
   l'auto-implication nommée. Un graphe qui l'omet *est* l'extraction que la méthode critique (voir ci-dessous).

Pas construit : l'*automatisation* des registres 2/3 (l'agent ne produit jamais d'affirmations ressenties ou politiques) — mais
le registre 3 est dans le modèle (affirmations politiques + les réponses de cohérence du croisement). L'opacité est honorée
comme une *pratique*, pas un champ de schéma (voir la section politique). Également hors périmètre : une vraie base de données de graphe, ou
600 atomes d'entrée.

## Prémisses (validées en session)

- **P1 — Le coin teste le *processus*, pas le temps gagné.** Sur deux genres, un humain compétent
  écrit les fiches en une heure ; un agent peut être plus lent. Sans importance. Le coin prouve la boucle
  *source → attribuer → le cercle valide/conteste*. C'est cette boucle qui passe à l'échelle pour 600.
- **P2 — Le sourçage remplace le musicologue absent.** Aucun expert humain ne dit encore « ce tempo
  est faux. » Mais un fait attribué à un ouvrage nommé est *falsifiable par quiconque vérifie la
  source*. L'attribution remplace partiellement l'expert manquant. Si un fait ne peut pas être sourcé, c'était
  une opinion déguisée en fait — c'est une découverte, pas un échec.
- **P3 — La réponse politique est assumée, et jugée par l'oreille, pas une case à cocher.** Les deux
  tests de cohérence de §6 (est-ce que ça créolise ou ça lisse ? est-ce que ça préserve l'opacité ou ça livre la culture à la
  machine ?) sont requis comme *texte que l'auteur écrit*, pas un booléen. §7 : la forme, pas le sermon — le
  schéma force la réflexion, l'oreille du cercle décide si c'est vivant. Un croisement dont
  l'auto-implication ne peut pas être répondue ne devrait pas exister.

## Approche A — Fichiers validés par schéma, le dépôt EST le graphe (choisie)

Pas de base de données. Chaque atome est un fichier structuré, **validé par schéma** (YAML, validé par un modèle
Pydantic) ; les croisements lient les atomes ; le dépôt versionné *est* le graphe, et l'historique git *est* l'attribution
au fil du temps. La revue se fait dans les **PR** — le flux existant. `compile.py` évolue pour composer
atome + atome au lieu de lire des molécules plates.

L'essentiel de A n'a jamais été « du markdown » — c'était *pas de BDD, le dépôt est le graphe, revue en PR*. Ça
tient. Ce que Pydantic ajoute : **l'attribution devient une contrainte de type** (§3). Une affirmation
musicologique sans `source` ne valide pas — elle ne peut pas entrer dans le dépôt. *Pas de source, pas de fait* est une
`ValidationError`, pas une discipline. Une vue markdown lisible par un humain est un **rendu dérivé**
du YAML (premier pas vers C), ajouté plus tard, gratuitement.

On a choisi A plutôt que deux alternatives :

- **B — triplets dans une vraie BDD (SQLite / triplestore).** Sur-ingénierie pour ~600 nœuds ; relire
  un diff JSON/BDD est moins humain qu'une PR de fichier. À reconsidérer seulement si l'atlas navigable devient le
  produit principal.
- **C — schéma source de vérité + vues dérivées (markdown + index de graphe).** La *cible* probable :
  garder le YAML validé par schéma comme vérité, dériver une vue markdown humaine et un index requêtable pour
  l'atlas. A est littéralement la première étape de C — n'ajouter l'index dérivé que quand on a réellement besoin de
  requêter (2-3 atomes plus tard). Le `defer` sur JSON/SQLite/Neo4j tient : l'index se régénère à partir des fichiers.

### Schéma (Pydantic) — le contrat de données

Le schéma *est* la règle d'attribution de la méthode (§3) et sa cohérence politique (§6), encodées en
types. `source` est requis sur une affirmation musicologique ; `held_by` est requis sur une position tenue ; un
croisement doit porter ses réponses §6. Le type de sortie de l'agent (`MusicologicalReport`) n'a **aucun
champ politique** — la frontière du registre 3 est imposée par construction, pas par bonne conduite.
Le modèle est la spec ; les fichiers `.yaml` sont des instances ; la sortie structurée est validée
par rapport à lui.

```python
from enum import Enum
from pydantic import BaseModel, Field

class Status(str, Enum):
    proposed = "proposed"; validated = "validated"; contested = "contested"

class Source(BaseModel):
    citation: str                       # "Danyèl Waro, interview, Télérama 2018"
    locator: str                        # REQUIS, vérifiable par machine : URL / DOI / ISBN+page /
                                        #   timecode. Un contrôle de forme en CI le valide, donc une
                                        #   source fabriquée est détectable SANS musicologue.
                                        #   pas de locator, pas de fait.

class MusicologicalClaim(BaseModel):    # registre 1 — falsifiable
    claim: str
    source: Source                      # REQUIS. pas de source, pas de fait -> ValidationError
    status: Status = Status.proposed
    signed_by: list[str] = []           # membres du cercle qui ont validé/contesté

class HeldClaim(BaseModel):             # registre 2 (ressenti) ou 3 (politique) — tenu, pas vrai
    register: str = Field(pattern="^(felt|political)$")
    text: str
    held_by: list[str] = Field(min_length=1)   # une position a toujours un propriétaire

class Constraint(BaseModel):
    claim: str                          # "voix en créole réunionnais"
    held_by: list[str] = Field(min_length=1)

class Exemplar(BaseModel):
    track: str
    cue: str | None = None
    recognized_by: list[str] = []

class Atom(BaseModel):
    atom: str                           # "maloya"
    status: Status = Status.proposed
    musicological: list[MusicologicalClaim]      # registre 1 — remplissable par l'agent
    constraints: list[Constraint] = []
    felt: list[HeldClaim] = []                   # registre 2 — le cercle
    political: list[HeldClaim] = []              # registre 3 — assumé, l'agent ne remplit JAMAIS
    exemplars: list[Exemplar] = []
    curators: list[str] = []

# ce que l'agent émet — registre 1 uniquement, par construction (pas de champ politique) :
class MusicologicalReport(BaseModel):
    atom: str
    musicological: list[MusicologicalClaim]

class Crossing(BaseModel):
    crossing: str                       # "maloya-x-footwork"
    atoms: tuple[str, str]
    frame_from: str                     # quel atome est le cadre dominant
    tension: str
    avoid: str | None = None
    # §6 cohérence politique — réponses assumées, requises comme TEXTE (forcer la réflexion, pas une case) :
    creolizes: str          # comment ça créolise (friction fertile) plutôt que ça lisse (slop)
    opacity_preserved: str  # comment ça préserve l'opacité plutôt que ça livre la culture à la machine
    self_implication: str   # réponse assumée à "cette fusion est-elle l'extraction qu'elle critique ?"
    held_by: list[str] = Field(min_length=1)   # qui assume ces réponses
```

Une instance d'atome maloya, telle que stockée (`atoms/maloya.yaml`) — diffable, commentable dans une PR :

```yaml
atom: maloya
status: proposed
musicological:
  - claim: "ternaire 6/8, pulsation hypnotique"
    source: { citation: "…", locator: "…" }
    status: proposed
  - claim: "percussions centrales : kayamb, roulèr, sati, bobre"
    source: { citation: "…", locator: "…" }
    status: proposed
constraints:
  - claim: "voix en créole réunionnais"
    held_by: ["le créateur"]
felt:
  - { register: felt, text: "transe, ancestral, Océan Indien", held_by: ["un auditeur"] }
political:                     # assumé par l'auteur — l'agent n'écrit jamais ici
  - register: political
    text: "le maloya est une musique de résistance (interdit sous la Réunion coloniale) ; le croiser sans porter cette charge le lisse"
    held_by: ["l'auteur"]
exemplars:
  - { track: "Danyèl Waro", recognized_by: ["le cercle"] }
```

Un **croisement** ne porte que ce qui est spécifique à la fusion ; les faits par genre viennent des atomes :

```yaml
crossing: maloya-x-footwork
atoms: [maloya, footwork]
frame_from: maloya          # groove + percussions mènent
tension: "transe ancestrale 6/8 contre kicks juke décalés hors grille"
avoid: "rouleaux de charlestons, vernis EDM, tout ce qui efface les percussions maloya"
# §6 cohérence — assumé, requis comme texte (pas une case) :
creolizes: "deux grooves de résistance diasporique se rencontrant d'égal à égal, pas de la world music en garniture sur un track club"
opacity_preserved: "le maloya garde le cadre et son appel-réponse créole ; il n'est pas dissous dans le juke"
self_implication: "oui — une IA croisant deux musiques de cultures colonisées est l'extraction qu'elle critique ; l'œuvre l'assume comme sujet, garde le maloya en tête, et cite ses sources"
held_by: ["l'auteur"]
```

### Statuts & modes de compilation

Le `status` d'une affirmation détermine si elle est rendue. Deux modes, parce que filtrer « validé uniquement » quand le
panel n'a pas de musicologue (§8) ne compilerait *rien* et l'oreille ne pourrait jamais juger (§7) :

| statut     | `compile --draft` (par défaut) | `compile --strict` | signification |
|------------|--------------------------------|--------------------|---------------|
| proposed   | inclus (signalé)               | exclu              | ébauché, pas vérifié ; l'oreille juge quand même |
| validated  | inclus                         | inclus             | un humain a signé (`signed_by` non vide) |
| contested  | exclu (stocké, « à résoudre ») | exclu              | divergence *tenue* en stockage (§3), pas « faux » ; le compilateur attend que l'auteur tranche |

`draft` est le défaut aujourd'hui : il garde le travail audible sans musicologue, et l'oreille du cercle est le validateur qui *existe*. `strict` est la version vérifiée pour quand la lacune du panel sera comblée. La fabrication est attrapée en amont par le `locator` requis + le contrôle de forme en CI, pas par l'expert (absent). Ceci remplace un filtre dur « validé uniquement », qui créerait un blocage : pas de validateur, rien ne compile, rien à écouter.

### L'agent collecteur (minimal)

Un agent de recherche, pas encore une « équipe » orchestrée : donné un genre, il émet un `MusicologicalReport`
via **sortie structurée validée contre le schéma ci-dessus** — il *ne peut pas* retourner une affirmation
sans source, et il n'a **aucun champ pour écrire une affirmation politique ou ressentie**. La frontière du registre 3
est dans le type, pas dans le prompt. Il remplit les faits avec des **sources réelles, citables**, statut
`proposed`, et ouvre une PR ; un humain assemble ensuite l'`Atom`, en ajoutant la couche politique assumée.
Un agent, un registre, deux genres. L'« équipe » (un agent par aspect/registre) vient après que le
format tient.

### L'axe politique (registre 3) — assumé, et auto-implication

La méthode met la politique dans la salle des machines (§6), pas dans les paroles (§7 : la forme, pas le sermon). Le
graphe l'intègre donc comme **structure, pas slogans** :

- **Au niveau de l'atome**, le registre 3 est une lecture *assumée* (`political`). Le **droit à l'opacité** (§6) est
  honoré comme une *pratique*, pas un champ : on ne décompose simplement pas certains atomes, ou on les laisse minces
  exprès. On refuse délibérément un champ `opacity` — encoder « ce qu'on refuse de rendre lisible »
  dans un schéma rendrait *elle-même* le refus lisible, la trahison accomplie. L'opacité est gardée par
  le silence, pas par un enregistrement du silence.
- **Au niveau du croisement**, les deux tests de cohérence sont des champs requis : est-ce que ça **créolise** ou
  ça **lisse** ? est-ce que ça **préserve l'opacité** ou ça **livre la culture à la machine** ? Plus
  l'**auto-implication** nommée : une IA fusionnant des musiques de cultures colonisées risque d'être l'extraction qu'elle
  critique — la réponse assumée est *« oui, et l'œuvre le sait ; c'est le sujet. »*
- **L'agent n'y touche jamais.** Son type de sortie n'a pas de champ politique. La machine collecte
  des faits sourcés (registre 1) ; le sens (registre 3) reste avec l'humain qui l'assume. *« On utilise les
  armes de l'ennemi, et on le dit. »*

Ces champs sont du texte, pas des booléens, exprès. §7 : le schéma force la question ; l'oreille du cercle
décide si la réponse est vivante. Glissant ne sauvera pas un croisement ennuyeux ou malhonnête.

## Le coin : maloya + footwork + leur croisement

Deux atomes, pas un — pour tester l'enrichissement *et* un croisement fécond d'un coup. Le Footwork est
l'exemple propre de la méthode pour « mal défini empoisonne ses 600 croisements » (§4). Les deux existent déjà comme
propriétés de molécules éparpillées dans `fusions.json` — le coin consiste à **les élever en atomes sourcés**
et prouver que la boucle produit une fiche plus riche et plus fiable que le JSON curé à la main.

Terminé = les deux fiches d'atomes existent avec des affirmations musicologiques sourcées **et une couche politique assumée**,
un croisement maloya-x-footwork les référence **et répond aux trois champs §6 avec la voix de l'auteur**,
et le cercle a validé ou contesté au moins la fiche maloya dans une PR.

### Migration : une seule source de vérité

Ne pas laisser `atoms/` et `fusions.json` coexister — deux vérités dérivent. Migrer les trois fusions
existantes vers atomes + croisements dans la série de PR du coin, puis **supprimer `fusions.json`** ; `compile.py`
ne lit que `atoms/` + `crossings/`. Six genres à la main, ~1h.

Les champs JSON existants n'ont pas tous leur place au même endroit. Règle de placement :
- **Atome** (vrai du genre indépendamment de ce avec quoi il est croisé, sourçable) : `instrumentation` de base
  (kayamb, roulèr…), la *plage* de tempo caractéristique du genre, la *convention* vocale
  (appel-réponse créole). Ça devient des affirmations musicologiques sourcées.
- **Croisement** (un choix spécifique à *cette* fusion) : `production`, le `tempo_feel` choisi, le
  traitement `vocal` spécifique, les instruments *ajoutés* pour le mélange (le TB-303 dans maloya×acid-blues),
  et `avoid`.

Le test : *« est-ce que ce serait vrai du genre seul ? »* → atome. *« Est-ce une décision sur ce
mélange ? »* → croisement.

### Build & validation (verrouillé en revue eng)

- **`poc/schema.py` est la source unique du contrat de données.** Le bloc de schéma ci-dessus est
  illustratif ; une fois implémenté, ce document pointe vers `schema.py` au lieu de garder une seconde copie
  (pas de dérive).
- **Séquençage :** refactorer d'abord, changer le comportement ensuite. Déployer le loader + schéma, *puis* changer
  `compile.py` de molécules plates à composition atome+croisement. Jamais structurel + comportemental dans un
  même commit.
- **Intégrité référentielle :** `compile.py` rejette un croisement dont les `atoms` sont manquants avec un
  `UnknownAtom` nommé, pas un `KeyError` brut.
- **CI (GitHub Actions, à chaque PR) :** lancer `python poc/compile.py --check` + un contrôle de forme du
  `locator` + le contrôle référentiel. Le dépôt n'a pas de CI aujourd'hui ; sans ça ces garde-fous sont décoratifs
  et un mauvais atome est mergé en silence.
- **Tests :** à base d'assert, étendant le pattern `--check` existant (pas de pytest). Couvrir : locator
  requis, source requise, `held_by` non vide, contrôle référentiel → `UnknownAtom`, filtre statut×mode
  (proposed exclu en `--strict` / inclus en `--draft`), la composition contient les deux genres,
  contested exclu de la compilation.
- **Régression de migration (critique) :** compiler les atomes migrés et comparer avec la sortie de l'ancien
  `fusions.json` pour les trois fusions existantes. Si ça diverge, la migration a cassé
  quelque chose.

## Risques / questions ouvertes

- **Pas de musicologue pour valider (la lacune §8).** La lacune du panel est réelle et pas comblée ici. La
  réponse est le mode de compilation `draft` : le travail reste audible et l'oreille du cercle juge (§7)
  tant qu'aucun expert n'existe. Le mode `strict` attend l'expert. On ne prétend pas que le sourçage *est*
  de l'expertise — c'est de la traçabilité.
- **Sources hallucinées par l'agent.** Une source citée qui ne dit pas ce que l'agent prétend est pire qu'aucune
  source. Le `locator` requis + un contrôle de forme en CI attrapent la fabrication (une URL morte, un
  DOI mal formé) sans musicologue ; la vérification sémantique ponctuelle reste partie de la revue du cercle.
- **Réécriture de compile.py.** Composer atome+atome change le compilateur : il lit maintenant `atoms/` +
  `crossings/`, honore `--draft`/`--strict`, et doit rejeter un croisement qui référence un atome
  manquant (erreur nommée, pas `KeyError`). Construit sur le coin — pas de code dans ce RFC.
- **Dérive de format.** Quand le schéma de la fiche d'atome change, chaque fiche dérive. Garder le schéma dans
  ce document comme source unique jusqu'à stabilisation (même discipline que method.md → PoC).
- **Les champs politiques dégénèrent en checklist.** Le texte §6 requis peut dégénérer en
  boilerplate tamponné mécaniquement (« oui ça créolise »). La mitigation n'est pas technique : l'oreille du cercle juge
  la réponse, et un croisement avec une auto-implication creuse est coupé, pas mergé. Le type force la
  question ; il ne peut pas forcer l'honnêteté.
- **L'agent qui déborde dans le registre 3.** Un futur agent « équipe » pourrait être tenté d'ébaucher la
  lecture politique. Il ne doit pas. Garder le type de sortie de l'agent sans champ politique ; l'humain
  possède le sens. C'est le garde-fou d'auto-implication, pas un nice-to-have.

## La mission (faire avant tout agent)

**Écrire la fiche de l'atome maloya à la main**, dans le format ci-dessus, avec 8 faits musicologiques —
**chacun portant une source réelle que vous pouvez effectivement citer** (une interview de Danyèl Waro, un
ethnomusicologue de l'Océan Indien, Carpanin Marimoutou, les notes de pochette d'un enregistrement de terrain du maloya…). Quand vous tombez sur un
fait que vous *ne pouvez pas* sourcer, arrêtez : ce fait était une opinion déguisée en vérité. Trente minutes à la
main vous dit si le format et la prémisse de sourçage tiennent — *avant* de construire le moindre
agent.

Puis écrivez **une** ligne politique pour le croisement maloya-x-footwork : la réponse
`self_implication`, de votre propre voix. Si vous ne pouvez pas honnêtement dire pourquoi croiser ces deux musiques
de cultures colonisées avec une IA n'est pas juste de l'extraction, le croisement ne devrait pas sortir. Un fait que vous ne pouvez pas sourcer est
une opinion ; un croisement que vous ne pouvez pas assumer politiquement est de l'extraction. Même test, deux registres.
