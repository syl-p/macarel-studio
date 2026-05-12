# WebSylvain — Project Context & Guidelines
> Ce fichier est destiné aux agents IA (Claude Code, OpenCode, Aider, Cursor, Gemini CLI…).
> Lis-le entièrement avant d'écrire la moindre ligne de code.

---

## 1. Qui je suis

Je suis un développeur fullstack solo basé à **Carcassonne, Occitanie**.
Je travaille sous le nom **WebSylvain** — mon studio de développement web artisanal.

Mon profil technique :
- Expertise principale : **Ruby on Rails + Hotwire (Turbo, Stimulus) + HTMX**
- Philosophie hypermedia : je préfère envoyer du HTML depuis le serveur plutôt que du JSON consommé par une SPA
- Frontend interactif : **Three.js / WebGL** quand c'est justifié
- Infra & DevOps : **Kamal**, GitHub Actions, PostgreSQL, Redis, Sidekiq
- Site vitrine : **Astro + Tailwind v4**

Je suis seul sur ce projet pour l'instant. Le code doit être **lisible, maintenable et documenté**.

---

## 2. Ce projet — websylvain.com

Site vitrine de WebSylvain, construit avec **Astro 5 + Tailwind CSS v4**.

### Objectif
Présenter mes services, ma philosophie craft, et convertir des visiteurs en clients (PME, startups, agences design cherchant un bras technique Rails).

### Stack technique du site
```
Framework   : Astro 5
Styles      : Tailwind CSS v4 (@tailwindcss/vite — pas de tailwind.config.ts)
Typo        : DM Serif Display (titres h1) + DM Sans (body) + DM Mono (labels, code)
Déploiement : À définir (Netlify / Vercel / Coolify)
Langue      : Français uniquement
```

### Pages existantes
- `/` — Homepage
- `/a-propos` — À propos
- `/contact` — Formulaire de contact + FAQ
- `/services` — À construire

### Structure du projet
```
src/
├── layouts/
│   └── Layout.astro          ← shell HTML, fonts, meta SEO
├── components/
│   ├── Nav.astro
│   ├── Logo.astro            ← SVG logo "!" avec variantes dark/light/accent
│   ├── Hero.astro
│   ├── Services.astro
│   ├── CraftPhilosophy.astro
│   ├── Process.astro
│   ├── CtaBand.astro         ← props: title, subtitle, cta, href
│   ├── Footer.astro
│   ├── about/
│   │   ├── AboutHero.astro
│   │   ├── AboutValues.astro
│   │   ├── AboutApproach.astro
│   │   ├── AboutClients.astro
│   │   └── AboutManifesto.astro
│   └── contact/
│       ├── ContactHero.astro
│       ├── ContactForm.astro
│       ├── ContactInfo.astro
│       └── ContactFaq.astro
├── pages/
│   ├── index.astro
│   ├── a-propos.astro
│   ├── contact.astro
│   └── services.astro
└── styles/
    └── global.css            ← TOUTE la config Tailwind v4 + composants custom
```

---

## 3. Design system — règles absolues

### Tailwind v4 — fonctionnement
En v4, **il n'y a pas de `tailwind.config.ts`**. Tout le thème est défini dans `src/styles/global.css` via `@theme`. Les variables CSS générées par `@theme` créent automatiquement les classes utilitaires.

```css
/* Exemple : cette déclaration dans @theme */
--color-websylvain-argile: #C84B11;

/* Génère automatiquement ces classes */
bg-websylvain-argile
text-websylvain-argile
border-websylvain-argile
```

**Ne jamais créer de `tailwind.config.ts`** — tout passe par `global.css`.

### Palette de couleurs

| Token CSS                          | Valeur    | Usage                                    |
|------------------------------------|-----------|------------------------------------------|
| `--color-websylvain-nuit`         | `#1A0A00` | Fond hero, CTA band, sections sombres    |
| `--color-websylvain-argile`       | `#C84B11` | Couleur principale, CTA, liens           |
| `--color-websylvain-soleil`       | `#F2A122` | Accent chaud, logo !, em dans titres     |
| `--color-websylvain-miel`         | `#F7C97A` | Texte sur fond sombre                    |
| `--color-websylvain-calcaire`     | `#FDF6EE` | Fond page (jamais blanc pur)             |
| `--color-websylvain-pierre`       | `#E8D5BA` | Bordures sur fond clair                  |
| `--color-websylvain-garrigue`     | `#5C3D1E` | Texte tertiaire, labels sur fond crème   |
| `--color-websylvain-roc`          | `#2A1200` | Fond tags sur hero sombre                |
| `--color-websylvain-encre`        | `#1F1208` | Texte primaire sur fond clair            |
| `--color-websylvain-schiste`      | `#7A5C40` | Texte secondaire sur fond clair          |
| `--color-websylvain-thym`         | `#2D6A4F` | Accent tech, succès, badges verts        |
| `--color-websylvain-thym-lt`      | `#E8F5EE` | Fond badge thym                          |
| `--color-websylvain-craft`        | `#FDF0E6` | Fond section "philosophie craft"         |

### Typographie

```
h1            → font-family: DM Serif Display — class: text-display
h2, h3, h4    → DM Sans, font-weight: 500
body          → DM Sans, font-weight: 400
labels/mono   → DM Mono
```

**Règles strictes :**
- `font-weight` uniquement **400** ou **500** — jamais 600, 700, 800
- `h1` utilise TOUJOURS `font-family: var(--font-display)` ou la classe `.text-display`
- Tracking négatif sur tous les titres : `-0.02em` à `-0.03em`
- Line-height des titres : `1.08` à `1.3`
- Line-height du body : `1.55` à `1.7`

### Bordures
- Cartes et séparateurs : **toujours `0.5px`** — utilise la classe `.border-thin` ou `style="border-width: 0.5px"`
- Éléments actifs/featured uniquement : `1px` ou `1.5px`
- **Jamais de `shadow-*` décorative** — uniquement `shadow-focus` sur les inputs

### Espacement
- Padding horizontal des sections : `px-10` (40px)
- Padding vertical des sections : `py-12` (48px) à `py-14` (56px)
- Gap entre cards : `gap-2` (8px)
- Gap entre éléments de liste : `gap-2.5` à `gap-3`

### Couleurs de fond par zone
```
Page entière      → bg-websylvain-calcaire (#FDF6EE) — jamais blanc pur
Hero              → bg-websylvain-nuit (#1A0A00)
Section craft     → bg-websylvain-craft (#FDF0E6)
Section alternée  → bg-websylvain-pierre/20
CTA band          → bg-websylvain-nuit
Footer            → fond calcaire + border-top pierre
```

---

## 4. Composants custom disponibles

Ces classes sont définies dans `@layer components` de `global.css`.
**Ne pas les réinventer avec des classes Tailwind inline.**

```
Boutons         : btn-primary, btn-secondary, btn-secondary-dark, btn-nav
Navigation      : nav-link, nav-link[aria-current="page"]
Hero            : hero-dark, hero-eyebrow, hero-eyebrow-dot, hero-eyebrow-text, hero-tag
Cards           : card, card-icon
Sections        : section, section-label, section-h2, section-intro
Étapes          : step-row, step-number, step-title, step-body
Badges          : badge-argile, badge-thym
Facts           : fact-item, fact-dot
CTA band        : cta-band, cta-band-title, cta-band-sub
Manifeste       : manifesto, manifesto-eyebrow, manifesto-dot, manifesto-label,
                  manifesto-quote, manifesto-attr
Section craft   : craft-section, craft-stack-item, craft-stack-dot,
                  craft-stack-name, craft-stack-desc
Formulaire      : form-field, form-label, form-label-optional, form-input,
                  form-textarea, form-select
Utilitaires     : border-thin, text-display, text-label, logo-wordmark,
                  logo-wordmark-sub, hidden, stagger-1…5
```

---

## 5. Conventions de code Astro

### Structure d'un composant
```astro
---
// 1. Imports
// 2. Props interface
// 3. Logique / data statique
---

<!-- Template -->
<section class="section">
  ...
</section>

<!-- Style scoped si nécessaire (éviter au maximum, préférer global.css) -->
<style>
  /* Uniquement si la classe ne peut pas être dans global.css */
</style>

<!-- Script si nécessaire -->
<script>
  // TypeScript natif
</script>
```

### Règles Astro
- **Props** : toujours typer avec une `interface Props`
- **Data statique** : déclarer dans le frontmatter `---`, pas inline dans le template
- **Listes** : utiliser `.map()` avec `{items.map((item) => ( <div>...</div> ))}`
- **HTML dynamique** : utiliser `<Fragment set:html={...} />` pour les SVG inline
- **Pas de `useState`** — Astro est statique par défaut, le JS reste minimal
- **Scripts** : toujours en TypeScript, toujours avec les bons types (`as HTMLFormElement | null`)
- **Styles scoped** : uniquement pour les cas impossibles à mettre dans `global.css` (ex: `details[open]`)

### Nommage des fichiers
```
PascalCase pour les composants    → Nav.astro, ContactForm.astro
kebab-case pour les pages         → a-propos.astro, contact.astro
kebab-case pour les dossiers      → about/, contact/
```

### Import order dans les pages
```astro
---
// 1. Layout
import Layout from '../layouts/Layout.astro'
// 2. Composants globaux (Nav, Footer)
import Nav from '../components/Nav.astro'
// 3. Composants de la page
import Hero from '../components/Hero.astro'
// ...
---
```

---

## 6. Contenu éditorial — ton et style

### Identité de marque
- **Nom** : WebSylvain
- **Positionnement** : artisan Rails, craft, hypermedia, Carcassonne
- **Ancien nom** : Macarel Studio (le nom d'origine, conservé dans le logo "!" et l'exclamation historique)

### Ton de voix
- Direct, sans jargon commercial
- On dit **"je"** pour le travail concret, **vague sur la structure** (ne pas affirmer "je suis seul" ni "nous sommes une équipe")
- Phrases courtes, verbes d'action
- Ancrage occitan assumé, jamais folklorique

### Textes récurrents à ne pas modifier
```
Tagline principale  : "Des outils métier qui font dire macarel."
CTA principal       : "Parler du projet"
CTA final           : "WebSylvain, au boulot."
Email               : contact@websylvain.com
Localisation        : Carcassonne, Occitanie
```

### À ne jamais écrire dans le contenu
```
❌ "Notre équipe d'experts passionnés"
❌ "Solutions digitales innovantes"
❌ "Nous accompagnons votre transformation numérique"
❌ "Agence web créative et dynamique"
❌ Tout superlatif non justifié
```

---

## 7. Services proposés

Trois offres, dans cet ordre de priorité :

### 1. Outils métier sur mesure ← offre principale
CRMs internes, tableaux de bord, plateformes de gestion, workflows automatisés.
Stack : Rails + Hotwire + HTMX + PostgreSQL

### 2. SaaS & produits web
MVP complets : auth, billing (Stripe), permissions, emails transactionnels, background jobs.
Stack : Rails + Hotwire + Sidekiq + Redis

### 3. Accompagnement technique A à Z
Architecture, CI/CD, déploiement Kamal, code review, audit de codebase existante.
Pour les équipes qui veulent bien faire dès le départ.

---

## 8. Stack technique de référence

### Site vitrine (ce repo)
```
Astro 5           → framework statique
Tailwind CSS v4   → @tailwindcss/vite (plugin Vite, pas d'intégration Astro)
DM Serif Display  → Google Fonts — titres h1
DM Sans           → Google Fonts — body
DM Mono           → Google Fonts — labels, code
```

### Projets clients (Rails)
```
Ruby on Rails 8   → backend principal
Hotwire           → Turbo + Stimulus (hypermedia first)
HTMX              → quand Turbo ne suffit pas
PostgreSQL        → base de données principale
Redis             → cache, sessions, queues
Sidekiq           → background jobs
Kamal             → déploiement Docker sur VPS
GitHub Actions    → CI/CD
Three.js / WebGL  → expériences 3D côté front (cas spécifiques)
```

---

## 9. Ce qu'un agent IA doit savoir avant de coder

### ✅ À faire
- Lire `src/styles/global.css` avant d'ajouter un composant — les classes existent peut-être déjà
- Utiliser les variables CSS `var(--color-websylvain-*)` pour les couleurs inline si la classe Tailwind n'existe pas
- Utiliser `color-mix(in srgb, var(--color-websylvain-pierre) 50%, transparent)` pour les opacités — pas `bg-opacity-*`
- Proposer une interface `Props` pour tout nouveau composant
- Garder le JS minimal — Astro est statique, on n'a pas besoin de React
- Respecter les espacements : `px-10 py-12` sur les sections principales

### ❌ À ne jamais faire
- Créer un fichier `tailwind.config.ts` — tout est dans `global.css`
- Utiliser `font-bold` ou `font-semibold` — uniquement `font-normal` et `font-medium`
- Ajouter des `shadow-*` décoratifs
- Écrire du CSS en dehors de `global.css` sauf cas scoped inévitable
- Utiliser `bg-white` pour le fond de page — c'est `bg-websylvain-calcaire`
- Hardcoder des couleurs hex dans les classes Tailwind — passer par les tokens
- Ajouter des dépendances npm sans le demander explicitement
- Modifier le contenu éditorial (taglines, CTA, email) sans confirmation

### ⚠️ Points d'attention
- La grille 2 colonnes sur contact utilise `border-r border-thin` sur la colonne gauche — pas de `divide-*`
- Les `<details>` FAQ ont leurs styles dans un `<style>` scoped dans `ContactFaq.astro` — c'est intentionnel
- Le logo est un SVG inline avec `<text>` — ne pas remplacer par une image
- `border-thin` = `border-width: 0.5px` — classe custom définie dans `@layer utilities`
- Tous les tokens CSS `macarel-*` ont été renommés en `websylvain-*` (classes Tailwind et variables CSS)

---

## 10. Commandes utiles

```bash
# Dev
npm run dev          # http://localhost:4321

# Build
npm run build        # génère /dist
npm run preview      # preview du build

# Check types
npm run astro check  # vérifie les types Astro/TS
```

---

## 11. Ce qui reste à faire

- [ ] Page `/services` — détail des trois offres
- [ ] Branchement formulaire contact → API (Rails ou service tiers)
- [ ] Page `/projets` — réalisations (quand il y en aura)
- [ ] SEO : sitemap, og:image, structured data
- [ ] Favicon SVG finalisé
- [x] Mise en prod + domaine websylvain.com
- [ ] Analytics (Plausible — pas Google Analytics)

---

*Dernière mise à jour : mai 2026*
*WebSylvain · Carcassonne, Occitanie · contact@websylvain.com*