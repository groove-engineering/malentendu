# groove-engineer — Comparatif des modèles IA (angle « peut-on revendre l'output ? »)

> ⚠️ **À VÉRIFIER** : les CGU des modèles changent souvent. Ceci est un **point de départ**, pas un état du droit certifié ni un avis juridique. Vérifier la CGU **en vigueur** de chaque modèle avant tout engagement (et la confirmer avec l'avocat — cf. `questions-avocat-fr.md` Q1 & Q13).

## Tableau (état général, à confirmer)

| Modèle | Usage commercial | Revente / redistribution à des tiers | Risque amont (entraînement) | Auto-hébergeable | Pour nous |
|---|---|---|---|---|---|
| **Suno** | Oui (offres payantes) | **Restreint / flou** — vérifier API + revente-en-service | Élevé — **poursuivi** par les majors (RIAA) | Non | Qualité top, mais Portail 1 incertain |
| **Udio** | Oui (offres payantes) | **Restreint / flou** | Élevé — **poursuivi** | Non | Idem Suno |
| **Stable Audio** (Stability) | Oui, licence commerciale | À vérifier ; positionné « commercial » | **Plus défendable** — partenariats données licenciées | Partiel (Stable Audio Open) | Bon compromis droits / qualité |
| **MusicGen / AudioCraft** (Meta) | Selon licence des **poids** | **Tu contrôles** (auto-hébergé) | Entraînement licencié annoncé ; vérifier licence des poids | **Oui** (ouvert) | Supprime le Portail 1 ; qualité < Suno |
| **Mubert / Soundraw / Beatoven / Loudly** | Oui, royalty-free | Variable — souvent OK *dans* du contenu, revente brute restreinte | Modèles « propres » revendiqués | Non (API) | Autant concurrents que fournisseurs |

## Le constat stratégique

**Le Portail 1 (droit de revendre) disparaît si tu auto-héberges un modèle ouvert.** En faisant tourner ton propre modèle (MusicGen, Stable Audio Open, ou un modèle affiné par toi), tu n'es plus lié à la CGU d'un tiers qui peut interdire la revente ou l'exploitation en service.

- **Bonus n°1 — cohérence :** ça colle parfaitement à ton choix **AGPLv3 / résolument libre**. Un moteur libre sur un modèle ouvert, c'est cohérent de bout en bout (et un argument de plus pour Anne et la communauté).
- **Bonus n°2 — risque amont réduit :** un modèle à **données licenciées** (Stable Audio) ou un modèle ouvert que tu maîtrises t'éloigne du risque que portent les usines Suno / Udio (procès majors).
- **Le coût :** la qualité brute des modèles ouverts est aujourd'hui **en dessous** de Suno / Udio.

## L'arbitrage, en une phrase

**Contrôle juridique total + cohérence open source** (modèle ouvert auto-hébergé) **vs qualité de génération maximale** (Suno / Udio, mais Portail 1 incertain + risque amont).

**Recommandation de cadrage :** pour un produit dont la proposition de valeur **EST** la propreté juridique, viser un **modèle ouvert auto-hébergé** (ou à données licenciées) est plus aligné que bâtir sur Suno — quitte à **prototyper** sur Suno pour la vitesse, puis basculer. À trancher avec l'avocat.
