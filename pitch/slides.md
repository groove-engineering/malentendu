---
theme: seriph
colorSchema: dark
title: groove-engineer
info: groove-engineer / Malentendu Records — pitch investisseurs (hybride)
class: text-center
transition: slide-left
mdc: true
---

# groove-engineer

<div class="text-lg opacity-70 mt-1">Malentendu Records</div>

<div class="text-2xl mt-10 italic">« La musique qui n'a jamais existé —</div>
<div class="text-2xl italic">fabriquée à l'échelle industrielle. »</div>

<div class="abs-bl m-6 text-sm opacity-60">Tristan · constructions incongrues</div>

<!--
[Pause. Regard salle.] Bonjour. En trois minutes, je veux qu'une seule phrase vous reste : générer de la musique avec l'IA est devenu trivial — en faire un catalogue exploitable à l'échelle ne l'est pas. C'est ce trou-là qu'on occupe.

Je vais vous raconter une histoire, un canular, puis vous montrer pourquoi ce canular est devenu une infrastructure.

→ TRANSITION : « Et tout commence par un nombre. »
-->

---
layout: fact
transition: zoom
---

# 360 000

croisements de genres musicaux

<div class="text-base opacity-70 mt-6">Les ~600 genres du catalogue mondial, multipliés les uns par les autres. Autant de disques qui pourraient exister.</div>

<!--
600 genres en lignes, les mêmes en colonnes. Chaque case est une fusion : Maloya × Acid blues, Grindcore × Bossa nova. 360 000 disques qui pourraient exister et qui n'existent pas.

[Insister.] Gardez ce nombre. On va voir qu'il cache un piège — et que le piège est devenu le produit.

→ TRANSITION : « Tout ça est parti d'un canular. »
-->

---
layout: section
transition: slide-up
---

# Tout a commencé par un canular

<div class="text-xl mt-6 opacity-90">
<b>Malentendu Records</b> : un label fantôme.<br>
Des disques qui n'ont jamais existé, publiés dans les bases de référence du monde.
</div>

<!--
Malentendu Records est un label-canular qui tourne depuis longtemps. On fabrique des disques fictifs, crédibles, et on les inscrit dans les registres officiels de la musique enregistrée. Un jeu, à la Borges : forger le réel pour le questionner.

[Sourire, puis bascule sérieuse.] Sauf qu'en voulant le faire à grande échelle, on a buté sur quelque chose qu'on n'avait pas prévu.

→ TRANSITION : « Et ce quelque chose, c'est le vrai sujet d'aujourd'hui. »
-->

---
layout: statement
transition: slide-up
---

# En construisant l'usine à canulars,<br>on a trouvé le vrai produit

<div class="text-lg mt-8 opacity-85">On voulait forger des disques. Pour les forger <b>à l'échelle</b> — propres, dédupliqués, traçables — il a fallu bâtir une chaîne que <b>personne dans l'industrie musicale ne sait faire</b>.</div>

<div class="text-xl mt-6 italic opacity-90">Cette chaîne, c'est le produit. Le canular n'était que la première démo.</div>

<!--
Voici le pivot, le cœur du pitch. [Ralentir.] La partie difficile n'a jamais été l'idée artistique. C'était l'ingénierie : industrialiser la génération musicale de façon fiable, propre, traçable.

Et ça, ce n'est pas un besoin d'artiste. C'est un besoin de tout un marché. On a construit la forge — la forge est l'entreprise.

→ TRANSITION : « Regardons ce marché. Quel problème, exactement ? »
-->

---
layout: statement
transition: fade
---

# Générer un morceau est trivial.<br>En faire 10 000 d'exploitables ne l'est pas.

<div class="text-lg mt-8 opacity-80">Suno, Udio : une chanson en 30 secondes. Mais c'est <b>une</b> chanson.</div>

<v-clicks>

<div class="mt-4 opacity-80">Le fossé : entre « générer » et « livrer du volume sur-brief, dédupliqué, propre côté droits, prêt à diffuser ».</div>

<div class="mt-2 opacity-80">Aujourd'hui ce fossé se franchit à coups de scripts maison et de tri manuel. Ou pas du tout.</div>

</v-clicks>

<!--
[Clic 1] Les modèles génératifs ont résolu la création d'UN morceau. [Clic 2] Personne n'a résolu l'industrialisation : passer de 1 à 10 000 morceaux utilisables, contrôlés, livrables.

C'est artisanal, fragile, et ça casse dès qu'on monte en volume. Le fossé est réel et il n'est comblé par personne.

→ TRANSITION : « Alors qui vit dans ce fossé — et qui paie pour en sortir ? »
-->

---
transition: slide-left
---

# Qui a ce problème — et paie pour le résoudre

<v-clicks>

- **Bibliothèques de sync / musique de production** — pub, film, TV, jeux : volume sous licence claire
- **Studios de jeux & apps** — bandes-son adaptatives, quasi infinies
- **Plateformes de contenu & outils créateurs** — lits sonores à l'échelle
- **Marques & agences** — contenu sonore sur mesure, en masse

</v-clicks>

<div v-click class="mt-8 text-lg italic opacity-80">
Tous coincés entre le <b>slop ingérable</b> et le <b>catalogue humain lent et cher</b>.
</div>

<!--
[Dérouler les clics au rythme de la voix.] Ce ne sont pas des auditeurs Spotify — ce sont des acheteurs B2B. Sync, jeux, plateformes, agences. Tous ont le même besoin : du volume, du contrôle, de la sécurité juridique.

[Clic final] Et tous sont aujourd'hui coincés entre deux mauvaises options : le slop ingérable d'un côté, le catalogue humain lent et cher de l'autre.

→ TRANSITION : « Voilà exactement ce qu'on leur livre. »
-->

---
transition: slide-left
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
[Suivre la chaîne du doigt, gauche à droite.] Un pipeline API-first. On prend un brief, on cible n'importe quel genre ou fusion, on génère, puis — le cœur — on filtre. On dédoublonne, on attache droits et provenance, on catalogue, on distribue.

[Phrase clé, ralentir.] On ne remplace pas les modèles. On est la plomberie qui les rend utilisables en production.

→ TRANSITION : « Et si personne ne l'a fait avant nous, c'est parce que c'est dur. »
-->

---
transition: slide-left
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
[Pour la salle technique, appuyer ici.] N'importe qui code une boucle d'appels d'API. Presque personne ne sait le faire fiable, traçable et trié à grande échelle. Chacune de ces quatre lignes est une barrière à l'entrée.

[Clic final, lever les yeux.] Et la dernière — la curation — est aussi notre proposition de valeur. La génération est gratuite ; ce qu'on vend, c'est le contrôle, les droits, le tri.

→ TRANSITION : « Situons-nous dans le paysage. »
-->

---
transition: slide-left
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
[Parcourir le tableau ligne par ligne.] Les modèles génèrent mais ne livrent pas. Les produits grand public ne tiennent ni l'échelle ni les droits. Les bibliothèques humaines sont propres et licenciées, mais lentes, chères, non-génératives.

[Pointer la dernière ligne.] Personne ne coche tout. Nous si. C'est notre case, et elle est vide aujourd'hui.

→ TRANSITION : « Pourquoi ce trou s'ouvre maintenant, et pas dans cinq ans ? »
-->

---
transition: slide-left
---

# Pourquoi maintenant

<v-clicks>

- **Bascule de l'IA musicale** : Suno/Udio grand public, la génération devient une commodité
- **Le reckoning des droits** : la provenance va devenir obligatoire → notre couche devient nécessaire
- **Les plateformes serrent la vis sur le slop** → la curation passe d'option à exigence
- **Effondrement du coût de build** : ce qui demandait une équipe se fait en solo

</v-clicks>

<!--
La fenêtre est ouverte maintenant. [Clic] La génération se commoditise, donc la valeur se déplace vers la couche de contrôle. [Clic] La pression juridique va rendre la provenance obligatoire. [Clic] La lutte anti-slop rend la curation indispensable. [Clic] Et le coût de construire ça s'est effondré.

Deux vents porteurs réglementaire et culturel, qui jouent exactement pour nous.

→ TRANSITION : « Tout ça resterait théorique sans preuve. La nôtre, c'est le canular du début. »
-->

---
layout: two-cols-header
transition: slide-up
---

# Preuve : le canular est la traction

::left::

**Malentendu Records — déjà en service.**

<v-clicks>

- Pipeline lancé de bout en bout
- Vrais disques publiés dans les bases de référence (Discogs)
- Le moteur tourne ; le catalogue existe

</v-clicks>

::right::

<v-click>

**Et un canal de distribution gratuit :**

<div class="mt-2 opacity-85">la <b>scène KubeCon</b> — un talk technique devant des milliers d'ingénieurs. Crédibilité + leads, sans budget pub.</div>

</v-click>

<div v-click class="text-sm italic mt-4 opacity-70">
Honnête : pré-revenu. Le moteur et la preuve existent ; les premiers pilotes B2B sont à financer.
</div>

<!--
[La boucle se referme — c'est le moment.] Le canular du début n'est pas une fantaisie : c'est notre banc d'essai grandeur nature. Le pipeline tourne, de vrais disques sont publiés. La techno marche, c'est prouvé.

[Clic droite] Bonus : il nous ouvre la scène KubeCon — du marketing gagné, pas acheté. [Clic] Et je suis franc sur le stade : pré-revenu. On lève pour transformer la preuve en pilotes payants.

→ TRANSITION : « Justement — comment on gagne de l'argent. »
-->

---
transition: slide-left
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
Trois leviers : API à l'usage, abonnement plateforme, et licence de catalogue en option. [Clic final, c'est le point pour un investisseur.] Le coût de production s'effondre, donc la marge se loge dans la couche qu'on contrôle — orchestration, curation, droits.

C'est une marge logicielle, pas une marge de label. C'est ça qui change tout côté économie.

→ TRANSITION : « Voici le plan pour y arriver. »
-->

---
transition: slide-left
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
[Balayer les trois colonnes.] Maintenant : on prouve la techno et on s'achète de la notoriété gratuite via KubeCon. Ensuite, 6 à 12 mois : deux pilotes payants concrets, une sync library et un studio de jeu, plus la couche droits v1. Plus tard : self-serve, multi-modèle, et la licence de catalogue comme second moteur de revenu.

[Insister.] Chaque phase dérisque la suivante. On ne demande pas un acte de foi sur 24 mois, on demande de financer la phase « Ensuite ».

→ TRANSITION : « Et qui exécute ce plan ? »
-->

---
layout: center
transition: fade
---

# Qui

<div class="text-xl mt-4">Tristan — <b>constructions incongrues</b></div>

<div class="text-lg mt-6 opacity-80">Musique &nbsp;+&nbsp; infrastructure distribuée &nbsp;+&nbsp; œil de curateur</div>

<div class="text-base mt-6 opacity-60">L'intersection rare est l'avantage : peu de gens savent à la fois bâtir une chaîne distribuée fiable et juger ce qui sonne juste.</div>

<!--
[Plus personnel, ralentir.] L'avantage ici n'est pas une compétence, c'est une intersection rare : l'ingénierie de systèmes ET le goût musical. La plupart des gens ont l'une ou l'autre.

C'est ce qui rend l'exécution dure à copier — pas le concept, la personne.

→ TRANSITION : « Et voici ce qu'on vous demande. »
-->

---
layout: end
class: text-center
transition: fade
---

# La demande

<div class="text-xl mt-4">__[ montant ]__ sur __[ horizon ]__ pour : durcir le moteur · livrer l'API · signer les 2 premiers pilotes</div>

<div class="text-2xl mt-12 italic">
« On a commencé par forger des disques qui n'existaient pas.<br>
On a fini par bâtir l'usine que toute la musique générative attend. »
</div>

<!--
[Annoncer le chiffre clairement, sans s'excuser.] On lève [montant] sur [horizon], pour trois choses : durcir le moteur, livrer l'API, signer les deux premiers pilotes.

[Pause. Puis la dernière phrase, lentement, en regardant la salle.] On a commencé par forger des disques qui n'existaient pas. On a fini par bâtir l'usine que toute la musique générative attend.

[Silence. Laisser la phrase travailler. Ne pas enchaîner. Questions.]
-->
