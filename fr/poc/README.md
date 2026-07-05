# PoC — la méthode, pas le modèle

Principe : **le produit est la méthode**, pas l'audio ni le prompt Suno.

Une fusion est décrite **une seule fois** (`fusions.json`), indépendamment de tout
modèle. Un compilateur la rend vers une cible. **Suno n'est qu'un backend
interchangeable** — on en montre deux ici pour le prouver.

| Fichier | Rôle |
|---|---|
| `fusions.json` | **la source** — représentations de fusions indépendantes du modèle (groove, harmonie, instrumentation, production, tension, références) |
| `compile.py` | **le compilateur** — `compile_suno()` (prompt EN) + `compile_brief()` (brief humain) depuis la même source |

## Lancer

```bash
python3 compile.py          # compiler toutes les fusions -> Suno + brief
python3 compile.py --check  # auto-vérification, aucun modèle requis
```

## Valider la méthode

Collez un prompt Suno dans Suno, écoutez. **Si ça sonne juste, la méthode tient**
— Suno n'était que le premier rendu. Le jour où vous changez de modèle (Udio,
MusicGen auto-hébergé…), vous écrivez un nouveau compilateur ; **la source ne
bouge pas.**

C'est tout le PoC : prouver que la valeur réside dans la *représentation*, pas
dans le tuyau. (Prompts Suno en anglais, règle du projet.)

---

*non = malentendu*
