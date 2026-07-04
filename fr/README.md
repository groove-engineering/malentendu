# Le Malentendu

> « Une musique qui n'a jamais existé. »

Une **méthode ouverte** pour fusionner des genres musicaux. Le produit est la
**méthode** — une représentation *indépendante du modèle* d'une fusion + un
compilateur — pas l'audio, pas le prompt. Les modèles (Suno, Udio, MusicGen, un
musicien humain) sont des **backends interchangeables**.

Libre, sous **AGPLv3**.

## Ce dépôt

| | |
|---|---|
| [`GENESIS.md`](GENESIS.md) | comment le projet est né, à découvert |
| [`process/method.md`](process/method.md) | la spec : 2 couches (son + texte), 3 registres (musicologique / ressenti / politique), atomes vs molécules, vision politique |
| [`process/political-vision.md`](process/political-vision.md) | la vision politique intégrale — six thèses : authenticité, communs, créolisation, opacité, auto-implication, sens |
| [`process/examples.md`](process/examples.md) | diagrammes + 3 exemples concrets |
| [`process/comparison.md`](process/comparison.md) | pourquoi la méthode bat un prompt brut — fonctionnalités + comparaison côte à côte |
| [`catalogue/misunderstandings.md`](catalogue/misunderstandings.md) | les *malentendus trouvés* — les heureux accidents qu'on garde |
| [`poc/`](poc/) | la preuve : `python3 poc/compile.py` compile une fusion en prompt Suno **et** en brief humain (deux backends, une seule source) |

## Participer

Lisez le RFC ouvert et **commentez sur la Pull Request**. Tagguez votre registre :
🎼 musicologique (un fait) · 👂 ressenti (subjectif) · ✊ politique (valeurs).
Le désaccord est le sujet.

## Lancer la preuve

```bash
python3 poc/compile.py          # compiler les fusions -> Suno + brief
python3 poc/compile.py --check  # auto-vérification
```
