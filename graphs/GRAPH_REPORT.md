# Graph Report - /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src  (2026-04-21)

## Corpus Check
- 31 files · ~5,853 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 69 nodes · 47 edges · 27 communities detected
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]

## God Nodes (most connected - your core abstractions)
1. `handleResize()` - 3 edges
2. `createBoneAction()` - 3 edges
3. `useLoading()` - 2 edges
4. `resizeHandler()` - 2 edges
5. `Scene()` - 2 edges
6. `setAnimations()` - 2 edges
7. `filterAnimationTracks()` - 2 edges
8. `generateAESKey()` - 2 edges
9. `decryptFile()` - 2 edges
10. `initialFX()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Scene()` --calls--> `useLoading()`  [INFERRED]
  /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/components/Character/Scene.tsx → /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/context/LoadingProvider.tsx
- `resizeHandler()` --calls--> `setSplitText()`  [INFERRED]
  /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/components/MainContainer.tsx → /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/components/utils/splitText.ts
- `handleResize()` --calls--> `setCharTimeline()`  [INFERRED]
  /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/components/Character/utils/resizeUtils.ts → /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/components/utils/GsapScroll.ts
- `handleResize()` --calls--> `setAllTimeline()`  [INFERRED]
  /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/components/Character/utils/resizeUtils.ts → /Users/shubhajitmandal/VsCodeProject/Portfolio-Website-main/src/components/utils/GsapScroll.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.4
Nodes (2): useLoading(), Scene()

### Community 1 - "Community 1"
Cohesion: 0.4
Nodes (0): 

### Community 2 - "Community 2"
Cohesion: 0.5
Nodes (3): setAllTimeline(), setCharTimeline(), handleResize()

### Community 3 - "Community 3"
Cohesion: 0.5
Nodes (0): 

### Community 4 - "Community 4"
Cohesion: 0.5
Nodes (2): resizeHandler(), setSplitText()

### Community 5 - "Community 5"
Cohesion: 0.5
Nodes (0): 

### Community 6 - "Community 6"
Cohesion: 0.83
Nodes (3): createBoneAction(), filterAnimationTracks(), setAnimations()

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (2): decryptFile(), generateAESKey()

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (2): initialFX(), LoopText()

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Community 25"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Community 26"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 9`** (2 nodes): `App.tsx`, `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `Navbar()`, `Navbar.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `Work.tsx`, `setTranslateX()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `Cursor()`, `Cursor.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `Contact()`, `Contact.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (2 nodes): `WorkImage.tsx`, `handleMouseEnter()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `SocialIcons()`, `SocialIcons.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `WhatIDo.tsx`, `setRef()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (2 nodes): `Landing()`, `Landing.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (2 nodes): `About()`, `About.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (2 nodes): `Career()`, `Career.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (2 nodes): `CharacterModel()`, `index.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (2 nodes): `setCharacter()`, `character.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (2 nodes): `setLighting()`, `lighting.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `vite-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `HoverLinks.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `exports.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `boneData.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 2 inferred relationships involving `handleResize()` (e.g. with `setCharTimeline()` and `setAllTimeline()`) actually correct?**
  _`handleResize()` has 2 INFERRED edges - model-reasoned connections that need verification._