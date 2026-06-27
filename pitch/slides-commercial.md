---
theme: seriph
colorSchema: dark
title: groove-engineer
info: groove-engineer — pitch investisseurs (version commerciale)
class: text-center
transition: slide-left
mdc: true
---

# groove-engineer

<div class="text-2xl mt-6">L'infrastructure qui industrialise la musique générative.</div>

<div class="text-lg mt-10 opacity-75">De l'IA musicale brute → un catalogue exploitable. À l'échelle, propre, traçable.</div>

<div class="abs-bl m-6 text-sm opacity-60">Tristan · constructions incongrues</div>

<!--
Trois minutes, pour quelqu'un qui ne connaît rien au projet. Une phrase à retenir : générer de la musique avec l'IA est devenu trivial ; en faire un catalogue exploitable à l'échelle ne l'est pas. C'est ce trou-là qu'on occupe.
-->

---
layout: statement
---

# Générer un morceau est trivial.<br>En faire 10 000 d'exploitables ne l'est pas.

<div class="text-lg mt-8 opacity-80">Suno, Udio : une chanson en 30 secondes. Mais c'est <b>une</b> chanson.</div>

<v-clicks>

<div class="mt-4 opacity-80">Le fossé : entre « générer » et « livrer du volume sur-brief, dédupliqué, propre côté droits, prêt à diffuser ».</div>

<div class="mt-2 opacity-80">Aujourd'hui, ce fossé se franchit à coups de scripts maison et de tri manuel. Ou pas du tout.</div>

</v-clicks>

<!--
Le problème, en une image. Les modèles génératifs ont résolu la création d'un morceau. Personne n'a résolu l'industrialisation : passer de 1 à 10 000 morceaux utilisables, contrôlés, livrables. C'est artisanal, fragile, et ça ne passe pas à l'échelle.
-->

---

# Qui a ce problème — et paie pour le résoudre

<v-clicks>

- **Bibliothèques de sync / musique de production** — pub, film, TV, jeux : besoin de volume sous licence claire
- **Studios de jeux & apps** — bandes-son adaptatives, quasi infinies
- **Plateformes de contenu & outils créateurs** — lits sonores à l'échelle
- **Marques & agences** — contenu sonore sur mesure, en masse

</v-clicks>

<div v-click class="mt-8 text-lg italic opacity-80">
Tous coincés entre le <b>slop ingérable</b> et le <b>catalogue humain lent et cher</b>.
</div>

<!--
À qui on vend. Ce ne sont pas des auditeurs Spotify — ce sont des acheteurs B2B qui ont un vrai besoin : du volume, du contrôle, et de la sécurité juridique. Aujourd'hui ils n'ont que deux mauvaises options, et un trou au milieu.
-->

---

# Le produit : groove-engineer

Une couche d'orchestration **au-dessus** des modèles d'IA musicale.

<div class="mt-6 flex flex-wrap justify-center items-center gap-2 text-sm">
  <span class="border rounded px-3 py-2">Brief / genre</span>
  <span class="opacity-50">→</span>
  <span class="border rounded px-3 py-2">Génération ciblée<br><span class="opacity-60 text-xs">360k+ fusions</span></span>
  <span class="opacity-50">→</span>
  <span class="border rounded px-3 py-2">Filtre qualité</span>
  <span class="opacity-50">→</span>
  <span class="border rounded px-3 py-2">Déduplication</span>
  <span class="opacity-50">→</span>
  <span class="border rounded px-3 py-2">Métadonnées<br>+ provenance</span>
  <span class="opacity-50">→</span>
  <span class="border rounded px-3 py-2">Catalogue</span>
  <span class="opacity-50">→</span>
  <span class="border rounded px-3 py-2">Distribution</span>
</div>

<div class="mt-8 text-lg italic opacity-80">
On ne remplace pas Suno. On rend Suno <b>exploitable à l'échelle industrielle</b>.
</div>

<!--
Le produit en une slide. C'est un pipeline API-first : on prend un brief, on cible n'importe quel genre ou fusion, on génère, on filtre (le cœur), on dédoublonne, on attache les droits et la provenance, on catalogue, on distribue. On se branche sur les modèles existants — on est la plomberie qui les rend utilisables en production.
-->

---

# Pourquoi c'est dur — donc défendable

<v-clicks>

- **Systèmes distribués** : backpressure, idempotence, dédup, coût maîtrisé à l'échelle de centaines de milliers d'entités
- **Couverture** : la taxonomie complète des genres (la matrice de ~360 000 fusions)
- **Droits & provenance** : traçabilité de bout en bout — critique dans le chaos juridique de l'IA musicale
- **Curation** : le filtre qui sépare la pépite du slop — on jette 95 % pour livrer les 5 % qui valent

</v-clicks>

<div v-click class="mt-6 text-base opacity-80">La valeur n'est pas dans la <i>génération</i> (gratuite). Elle est dans le <b>contrôle, les droits et le tri</b>.</div>

<!--
Le fossé concurrentiel. N'importe qui code une boucle d'appels d'API. Presque personne ne sait faire ça de façon fiable, traçable et triée à grande échelle. Les quatre lignes sont autant de barrières à l'entrée — et la dernière, la curation, est aussi la proposition de valeur.
-->

---

# Concurrence : on occupe le trou

| | Génératif | À l'échelle / auto | Curation qualité | Droits + catalogue |
|---|:---:|:---:|:---:|:---:|
| **Suno · Udio** (modèles) | ✅ | ❌ | ❌ | ❌ |
| **Boomy · Mubert · Soundful** | ✅ | ⚠️ | ❌ | ⚠️ |
| **Epidemic · Artlist** (sync humaine) | ❌ | ❌ | ✅ | ✅ |
| **Scripts maison** | ✅ | ⚠️ | ❌ | ❌ |
| **groove-engineer** | ✅ | ✅ | ✅ | ✅ |

<div class="mt-6 text-base italic opacity-80">
On ne concurrence pas les modèles génératifs — on s'assoit dessus. Le trou, c'est <b>l'échelle ET le contrôle</b> dans le même produit.
</div>

<!--
Le paysage. À gauche, les modèles : géniaux pour générer, nuls pour livrer un catalogue propre. Les produits grand public (Boomy, Mubert) : un morceau à la fois, pas de rigueur droits ni d'échelle. Les bibliothèques humaines (Epidemic, Artlist) : propres et licenciées mais lentes, chères, pas génératives. Personne ne fait les deux. C'est notre case, en bas : génératif + à l'échelle + curé + propre.
-->

---

# Pourquoi maintenant

<v-clicks>

- **Bascule de l'IA musicale** : Suno/Udio grand public, la génération devient une commodité
- **Le reckoning des droits** : la provenance va devenir obligatoire → notre couche devient nécessaire, pas optionnelle
- **Les plateformes serrent la vis sur le slop** → la curation passe d'option à exigence
- **Effondrement du coût de build** : ce qui demandait une équipe se fait désormais en solo

</v-clicks>

<!--
La fenêtre. La génération devient gratuite (commodité), donc la valeur se déplace vers la couche de contrôle. Et deux vents porteurs : la pression juridique rend la provenance obligatoire, et la lutte anti-slop rend la curation indispensable. Les deux jouent exactement pour nous.
-->

---
layout: two-cols-header
---

# Preuve : Malentendu Records

::left::

**La démo phare. Déjà en service.**

<v-clicks>

- Pipeline lancé de bout en bout
- Vrais disques publiés dans les bases de référence (Discogs)
- Le moteur tourne ; le catalogue existe

</v-clicks>

::right::

<div v-click class="text-lg italic mt-4 opacity-80">
Honnête sur le stade :<br><br>
pré-revenu. Le moteur et la preuve existent ;<br>
les premiers pilotes B2B sont à financer.
</div>

<!--
La traction. On ne part pas d'une slide blanche : Malentendu Records est notre banc d'essai grandeur nature — le pipeline tourne, des disques réels sont publiés. C'est la preuve que la techno marche. Et on est francs : c'est pré-revenu, on lève pour transformer la preuve en pilotes payants.
-->

---

# Modèle économique

<v-clicks>

- **API à l'usage** — par run de pipeline / par piste livrée propre
- **Abonnement plateforme** — paliers de volume
- **Licence de catalogue** — option, sur les fusions à forte demande

</v-clicks>

<div v-click class="mt-8 text-lg italic opacity-80">
Marge logicielle sur un coût de génération qui tombe à zéro.<br>
On capte la valeur du <b>contrôle et des droits</b>, pas le coût marginal du son.
</div>

<!--
Comment on gagne de l'argent. Modèle SaaS / usage classique, plus une option licence de catalogue. Le point clé pour vous : le coût de production s'effondre, donc la marge se loge dans la couche qu'on contrôle — l'orchestration, la curation, les droits. C'est une marge logicielle, pas une marge de label.
-->

---

# Roadmap

<div class="grid grid-cols-3 gap-6 mt-8 text-sm">

<div class="border rounded-lg p-4">
<div class="text-base font-bold mb-3">Maintenant</div>
<ul class="space-y-2 opacity-85">
<li>Moteur durci (scale, dédup, coût)</li>
<li>Preuve Malentendu Records</li>
<li>Lancement KubeCon (crédibilité + leads)</li>
</ul>
</div>

<div class="border rounded-lg p-4">
<div class="text-base font-bold mb-3">Ensuite · 6–12 mois</div>
<ul class="space-y-2 opacity-85">
<li>API beta</li>
<li>2 pilotes B2B (1 sync library + 1 studio de jeu)</li>
<li>Droits / provenance v1</li>
</ul>
</div>

<div class="border rounded-lg p-4">
<div class="text-base font-bold mb-3">Plus tard · 12–24 mois</div>
<ul class="space-y-2 opacity-85">
<li>Plateforme self-serve</li>
<li>Multi-modèle (Suno + Udio + …)</li>
<li>Marketplace / licence de catalogue</li>
<li>Offre entreprise</li>
</ul>
</div>

</div>

<!--
Le plan. Trois temps. Maintenant : on prouve la techno et on s'achète de la notoriété gratuite via la scène KubeCon. Ensuite : on transforme l'intérêt en deux pilotes payants concrets et on durcit la couche droits. Plus tard : on s'ouvre en self-serve, multi-modèle, et on ajoute la licence de catalogue comme second moteur de revenu. Chaque phase dérisque la suivante.
-->

---
layout: center
---

# Qui

<div class="text-xl mt-4">Tristan — <b>constructions incongrues</b></div>

<div class="text-lg mt-6 opacity-80">Musique &nbsp;+&nbsp; infrastructure distribuée &nbsp;+&nbsp; œil de curateur</div>

<div class="text-base mt-6 opacity-60">L'intersection rare est l'avantage : peu de gens savent à la fois bâtir une chaîne distribuée fiable et juger ce qui sonne juste.</div>

<!--
Qui exécute. L'avantage n'est pas une seule compétence, c'est une intersection rare — l'ingénierie de systèmes ET le goût musical. C'est ce qui rend l'exécution difficile à copier : pas le concept, la personne.
-->

---
layout: end
class: text-center
---

# La demande

<div class="text-xl mt-4">__[ montant ]__ sur __[ horizon ]__ pour : durcir le moteur · livrer l'API · signer les 2 premiers pilotes</div>

<div class="text-2xl mt-12 italic">
« Le coût du son tombe à zéro.<br>
La valeur monte vers qui sait l'industrialiser proprement. »
</div>

<!--
L'ask. À compléter : montant, horizon, et use of funds en trois postes lisibles, calqués sur la phase "Ensuite" de la roadmap. La dernière phrase résume la thèse d'investissement : la génération se commoditise, la valeur se déplace vers la couche de contrôle — et c'est nous.
-->
