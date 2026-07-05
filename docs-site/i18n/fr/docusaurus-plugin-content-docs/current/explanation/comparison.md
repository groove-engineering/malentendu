---
sidebar_position: 4
title: "Méthode vs. prompt brut"
---

# La méthode vs. un prompt brut

Pourquoi décrire une fusion *une seule fois*, dans une source, plutôt que de taper un prompt directement dans Suno ?

Un **prompt brut** est du texte libre tapé directement dans un modèle. Il produit un *son*. La **méthode** produit une *source* — réutilisable, sourcée, corrigeable — qui se compile vers ce son (et vers d'autres backends). La différence, c'est ce qu'il vous reste après que le morceau a joué.

## Ce que le moteur apporte

| # | Fonctionnalité | Description |
|---|----------------|-------------|
| 1 | **Source unique, indépendante du modèle** | Une fusion décrite *une fois*, en YAML |
| 2 | **Compilateur multi-backend** | Même source → prompt Suno **et** brief humain |
| 3 | **Cadre vs. invité** | Quel genre *domine*, lequel reste *invité* |
| 4 | **Atomes sourcés** | Chaque affirmation porte `held_by` / `validated_by` + son registre |
| 5 | **Exemplaires validés** | Un morceau + un timecode + qui l'a validé |
| 6 | **Prompting négatif structuré** | `avoid` se compile en `[exclude]`, dérivé des échecs passés |
| 7 | **Tension à tenir** | L'intention artistique qui doit survivre à la génération |
| 8 | **Boucle de feedback** | Une dérive corrige l'atome |
| 9 | **Versionné + vérifié** | YAML dans git, reviewable en PR, la CI valide |

## Côte à côte

| Critère | Prompt brut (tapé dans Suno) | groove-engineer |
|---------|------------------------------|-----------------|
| **Cibles** | 1 prompt = 1 modèle ; réécrire pour chaque backend | 1 source → N backends compilés |
| **Provenance** | opinion indifférenciée, pas de trace | chaque affirmation a `held_by` + registre |
| **Hiérarchie des genres** | les deux « égaux » → bouillie ou l'un prend le dessus | cadre vs. invité, explicite |
| **Exclusions** | oubliées, retapées à chaque fois | `avoid` toujours appliqué, hérité des échecs |
| **Mémoire** | aucune — on répète les mêmes ratés | catalogue → l'atome se durcit |
| **Reproductibilité** | texte éphémère dans une boîte | YAML diffable, review en PR, self-check |
| **Intention** | diluée dans la prose | `tension`, nommée et tenue |

## La preuve — Maloya × Acid blues

**Brut, v1** a dérivé vers du rock soviétique ; le maloya a disparu. Consigné comme MR-001.

**La méthode** transforme ce raté en atome :

- `constraint` → *« les percussions maloya réunionnaises doivent mener ; l'acid blues reste une couche invitée »*
- `avoid` → *« rock d'Europe de l'Est / soviétique, guitare électrique dominante, tout ce qui efface les percussions maloya… »*

Le compilateur réinjecte ces garde-fous dans **chaque** génération suivante. Le même échec silencieux ne peut pas se reproduire deux fois.