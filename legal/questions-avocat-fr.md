# groove-engineer — Questions pour un avocat IP / musique (droit français)

> ⚠️ Brief de cadrage, **PAS un avis juridique**. À valider avec un avocat spécialisé propriété intellectuelle / musique. Droit mouvant : procès en cours contre les générateurs IA, AI Act de l'UE en déploiement.

## Contexte en 3 lignes
- Pipeline qui **génère** de la musique via un (des) modèle(s) d'IA, la **trie** (curation humaine), l'**enrichit** (métadonnées / provenance) et la **livre** à des acheteurs B2B : bibliothèques de sync, production audiovisuelle, agences, marques.
- Modèle économique : **service hébergé** + **double licence** du logiciel (AGPLv3 + commerciale).
- Objectif : livrer un actif **vendable et garanti** côté droits.

---

## Les deux portails (priorité absolue)

1. **Droit de VENDRE (CGU amont).** La licence du modèle utilisé (Suno / Udio / autre / auto-hébergé) m'autorise-t-elle la **revente**, la **redistribution à des tiers** et l'**exploitation en service (SaaS)** des outputs ? *(Si non → modèle bloqué, à choisir un autre.)*
2. **Droit de POSSÉDER / LICENCIER.** Un output purement IA est-il protégeable par **droit d'auteur** en France ? Sinon, sur quel droit s'appuie concrètement la vente / licence à un acheteur ?

## Droit d'auteur & contribution humaine
3. Quel **seuil de contribution humaine** (sélection, édition, arrangement, mixage) fait naître l'« **empreinte de la personnalité** » suffisante pour protéger l'output ? Comment le documenter de manière **opposable** dans le pipeline ?
4. Si protection il y a : qui est l'**auteur** (moi ? un curateur salarié / prestataire ?) et comment sécuriser la **cession** (forme écrite, périmètre — art. L.131-3 CPI) ?

## Droits voisins (le cœur, spécifique au droit français)
5. Puis-je revendiquer des **droits voisins de producteur de phonogramme** (art. L.213-1 CPI) sur les masters générés — au titre de l'initiative et de la responsabilité de la première fixation ?
6. Ces droits voisins sont-ils **cessibles / licenciables** en synchronisation, et **suffisent-ils** à vendre un usage (voire exclusif) à une bibliothèque sync **même si la composition n'est pas protégée** par droit d'auteur ?
7. Des droits voisins d'**artiste-interprète** sont-ils en jeu en l'absence d'interprète humain (voix synthétiques) ?

## Garanties & responsabilité
8. Que puis-je **garantir** contractuellement à l'acheteur (non-contrefaçon, jouissance paisible, garantie d'éviction) ? Quelle est mon **exposition** si un tiers réclame, compte tenu du risque amont (entraînement du modèle) ?
9. Comment rédiger la **clause de responsabilité / d'indemnisation** pour ne pas porter seul le risque lié à l'entraînement du modèle tiers ?

## Contrefaçon en sortie
10. Quel **seuil de similarité** (mélodie, samples reconnaissables) rend un output contrefaisant ? Comment rendre **opposable** une vérification anti-similarité automatisée intégrée au pipeline ?
11. **Imitation d'artiste réel** (voix / style) : risques (parasitisme, droit à la voix / image, droits de l'artiste-interprète) et garde-fous à coder dans la génération ?

## AI Act / TDM / amont
12. **AI Act (UE)** : quelles obligations de **transparence / marquage « contenu généré par IA »** s'imposent à moi en tant que déployeur / distributeur ?
13. **TDM (dir. 2019/790 art. 4 ; transposition CPI)** : la légalité de l'entraînement amont — et l'**opt-out** (réservation des droits) des ayants droit — m'expose-t-elle en aval comme revendeur ? Choisir un modèle à **jeu d'entraînement licencié** (ou auto-hébergé) réduit-il ma responsabilité ?

## Structure & périphérie
14. **SACEM** : sans droit d'auteur sur la composition, quelles déclarations (ou leur absence) ; impact sur la sync et les sociétés de gestion côté acheteur ?
15. **Double licence AGPLv3 + commerciale** : pour vendre la licence commerciale, quelle structure de **cession des droits des contributeurs (CLA)** en droit français, et quelle validité (cession écrite, périmètre défini — art. L.131-3 CPI) ?
16. **Canular Malentendu Records** (faux disques publiés sur Discogs) : exposition (fausse attribution, parasitisme, CGU de la plateforme) ; faut-il l'**isoler juridiquement** de la société commerciale ?

---

### Les 2 questions à ne SURTOUT pas quitter le bureau sans réponse
- **Q1** (CGU amont : revente / redistribution / service) — conditionne l'existence même du produit.
- **Q5 + Q6** (droits voisins de producteur, licenciables en sync) — conditionne l'existence d'un **actif à vendre**.
