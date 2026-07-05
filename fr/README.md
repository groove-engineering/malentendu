# Le Malentendu

> « Une musique qui n'a jamais existé. »

Une **méthode ouverte** pour fusionner des genres musicaux. Le produit est la
**méthode** — une représentation *indépendante du modèle* d'une fusion + un
compilateur — pas l'audio, pas le prompt. Les modèles (Suno, Udio, MusicGen, un
musicien humain) sont des **backends interchangeables**.

Libre, sous **AGPLv3**.

## Documentation

La méthode complète est publiée sur :
**[trivoallan.github.io/groove-engineering](https://trivoallan.github.io/groove-engineering/fr/)**

Disponible en anglais et en français.

| | |
|---|---|
| [La Méthode](https://trivoallan.github.io/groove-engineering/fr/docs/explanation/method) | La spec : 2 couches (son + texte), 3 registres (musicologique / ressenti / politique), atomes vs molécules |
| [Vision politique](https://trivoallan.github.io/groove-engineering/fr/docs/explanation/political-vision) | Six thèses : authenticité, communs, créolisation, opacité, auto-implication, sens |
| [Exemples](https://trivoallan.github.io/groove-engineering/fr/docs/explanation/examples) | Diagrammes + 3 exemples concrets |
| [Graphe de connaissances](https://trivoallan.github.io/groove-engineering/fr/docs/reference/knowledge-graph/overview) | Atomes et croisements — navigables |
| [Catalogue](https://trivoallan.github.io/groove-engineering/fr/docs/reference/catalogue) | Les *malentendus trouvés* — les beaux accidents qu'on garde |

## Ce dépôt

| | |
|---|---|
| [`docs-site/`](../docs-site/) | Site Docusaurus — la méthode, publiée (EN + FR) |
| [`poc/`](poc/) | la preuve : `python3 poc/compile.py` compile une fusion en prompt Suno **et** en brief humain (deux backends, une seule source) |
| [`catalogue/tracks/`](../catalogue/tracks/) | fiches des malentendus trouvés (MR-002 … MR-008) |

## Participer

Lisez le RFC ouvert et **commentez sur la Pull Request**. Tagguez votre registre :
🎼 musicologique (un fait) · 👂 ressenti (subjectif) · ✊ politique (valeurs).
Le désaccord est le sujet.

## Lancer la preuve

```bash
python3 poc/compile.py          # compiler les fusions -> Suno + brief
python3 poc/compile.py --check  # auto-vérification
```

## Lancer la doc en local

```bash
cd docs-site && npm install && npm run generate-atoms && npm start -- --locale fr
```

---

*non = malentendu*
