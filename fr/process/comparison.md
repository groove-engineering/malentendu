# Le Malentendu — la méthode vs. un prompt brut

Compagnon de [`method.md`](method.md) (la spec) et [`examples.md`](examples.md)
(exemples concrets). Pourquoi décrire une fusion *une seule fois*, dans une source,
au lieu de taper directement un prompt dans Suno ?

Un **prompt brut** est du texte libre tapé directement dans un modèle. Il produit
un *son*. La **méthode** produit une *source* — réutilisable, sourcée,
corrigeable — qui compile vers ce son (et vers d'autres backends). La différence
est ce qu'il reste après que le morceau a joué.

---

## Ce que le moteur vous donne

| # | Fonctionnalité | Où ça vit |
|---|----------------|-----------|
| 1 | **Source unique, indépendante du modèle** — une fusion décrite *une seule fois*, en JSON | [`poc/fusions.json`](../poc/fusions.json) |
| 2 | **Compilateur multi-backend** — même source → prompt Suno (EN) **et** brief humain (Udio/MusicGen ensuite) | `compile_suno` / `compile_brief` |
| 3 | **Cadre vs. invité** — quel genre *domine* (`groove_from`), lequel reste *invité* (`harmony_from`) | `groove_from` / `harmony_from` |
| 4 | **Atomes sourcés** — chaque affirmation porte `held_by` / `validated_by` + son registre (🎼 fait / 👂 ressenti / ✊ politique) | `constraints`, `ressenti`, `exemplar` |
| 5 | **Exemplaires validés** — un morceau + un timecode + qui l'a validé (`Calculon ~1:00`) | `exemplar.validated_by` |
| 6 | **Prompt négatif structuré** — `avoid` compile en `[exclude]`, dérivé des échecs passés | `avoid` |
| 7 | **Tension à tenir** — l'intention artistique qui doit survivre à la génération | `tension` |
| 8 | **Boucle de retour** — une dérive ratée renforce l'atome (la `constraint` maloya est née du raté MR-001) | [`catalogue/`](../catalogue/misunderstandings.md) |
| 9 | **Versionné + vérifié** — JSON dans git, revue en PR, `--check` valide les champs requis | `check()` |

## Méthode vs. brut, côte à côte

| Critère | Prompt brut (tapé dans Suno) | groove-engineer |
|---------|------------------------------|-----------------|
| **Cibles** | 1 prompt = 1 modèle ; réécrire pour chaque backend | 1 source → N backends compilés |
| **Provenance** | opinion indifférenciée, sans trace | chaque affirmation a `held_by` + registre |
| **Hiérarchie de genres** | les deux genres « égaux » → bouillie ou l'un prend le dessus | cadre vs. invité, explicite |
| **Exclusions** | oubliées, retapées à chaque fois | `avoid` toujours appliqué, hérité des échecs |
| **Mémoire** | aucune — on répète les mêmes ratés | catalogue → l'atome se durcit |
| **Reproductibilité** | texte éphémère dans un champ | JSON diffable, revue en PR, auto-vérification |
| **Intention** | diluée dans la prose | `tension`, nommée et tenue |

## La preuve — Maloya × Acid blues

Le **brut, v1** a dérivé vers du rock soviétique (*« émission de mire, Hongrie
de l'ère soviétique »*) ; le maloya avait disparu. Consigné comme [MR-001](../catalogue/misunderstandings.md).

**La méthode** transforme ce raté en atome :

- `constraint` → *« Les percussions maloya réunionnaises doivent mener ; l'acid blues reste une couche invitée »*
- `avoid` → *« Rock est-européen / soviétique, guitare électrique dominante, tout ce qui efface les percussions maloya… »*

Le compilateur réinjecte ces garde-fous dans **chaque** génération suivante.
Le même échec silencieux ne peut pas se reproduire deux fois.

```
$ python3 poc/compile.py
--- SUNO (style prompt, EN) ---
Maloya x Acid blues fusion, Reunionese maloya percussion must lead; acid blues
stays a guest layer, ... TB-303 acid bass, ... 100-112 bpm, trance-inducing, swung,
in the spirit of Danyèl Waro, Christine Salem, Lindigo, ...
[exclude] 70s blues-rock band, Eastern-European / Soviet rock, ...
```

Une source, deux sorties (Suno + brief), chaque garde-fou embarqué — c'est la
ligne entre un prompt et une méthode.

---

*non = malentendu*
