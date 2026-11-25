# Wanted Design System

A design system for **Wanted** — a career-growth platform in South Korea. This system is materialized from the *"Wanted Design System (Community)"* Figma file (published by Wanted to commemorate its 10th anniversary). It carries Wanted's real tokens, typography, iconography, brand marks and component patterns so agents can generate on-brand interfaces and assets.

> Source of truth: the attached `.fig`. Values here are transcribed from it verbatim — never rounded to a grid or to a public-library default. Where the file omits a value, the Wanted named scale (which the file's observed values match exactly) fills the gap; those spots are noted below.

Products represented in the file: **Wanted** (careers/job platform), plus sub-brand lockups for **WantedSpace**, **WantedGigs**, **Wanted OneID**, **Wanted Agent** and **LaaS**. The system is bilingual — UI copy is predominantly **Korean** with English labels for system/dev terms.

---

## Index (manifest)

- **`styles.css`** — global entry point (import this). `@import`s only:
  - `tokens/fonts.css` — webfonts (Pretendard JP, Wanted Sans) via jsDelivr
  - `fig-tokens.css` — 488 Figma Variables across all theme modes (light, dark, platform, breakpoints)
  - `tokens/typography.css` — semantic type scale + utility classes (`.wds-*`)
- **`components/`** — reusable React primitives, grouped:
  - `icon/` — **Icon** (116 glyphs, friendly aliases, `currentColor`)
  - `action/` — **Button**, **IconButton**, **TextButton**, **FloatingActionButton**
  - `selection/` — **Checkbox**, **Radio**, **Switch**, **Chip**
  - `display/` — **Badge**, **ContentBadge**, **Avatar** (+ **AvatarGroup**), **Card**, **Divider**, **ListCell**
  - `forms/` — **TextField**, **Textarea**, **Select**
  - `feedback/` — **Alert**, **Spinner**, **Skeleton**, **ProgressBar**, **Tooltip**
  - `navigation/` — **BottomNavigation**, **Tabs**, **SegmentedControl**
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand)
- **`ui_kits/wanted-app/`** — clickable mobile recreation of the Wanted careers app
- **`assets/logo/`** — Wanted wordmark (SVG), gradient symbol (PNG + SVG)
- **`SKILL.md`** — Agent-Skill wrapper

Namespace for `@dsCard` HTML: `window.WantedDesignSystem_ec589a`.

---

## Content fundamentals

- **Language & voice.** Korean-first, warm and encouraging but concise. Product surfaces speak *to* the user ("당신에게 딱 맞는 포지션"), action labels are short imperative verbs ("지원하기", "저장", "더보기"). English is reserved for system/dev terms and sub-brand names.
- **Casing.** Korean has no case; English labels use Title Case for nav/brands and sentence case for helper text. Token names are `kebab/slash` in Figma, flattened to `--kebab-case` in CSS.
- **Tone.** Trustworthy, modern, understated. Marketing copy leans aspirational ("커리어의 모든 것"); product copy is functional and calm.
- **Numbers & data.** Salary/counts localized (예: `6,000만원`, `D-3`, `128`). Badges compress large counts (`99+`).
- **Emoji.** Not part of the brand UI. Meaning is carried by the icon set, not emoji.

---

## Visual foundations

- **Color.** Anchored on **Wanted Blue `#0066FF`** (`--primary-normal` → Blue 50; hover → `--primary-strong` Blue 45). Neutrals come from a **Cool Neutral** ramp (slightly blue-tinted grays); base ink is `#171719` (Cool Neutral 10). Text/line/fill tokens are **alpha-based** (`--label-alternative` = `rgba(55,56,60,0.61)`, `--fill-normal` = `rgba(112,115,124,0.08)`) so they sit correctly on any surface. Status: positive `#00BF40`, negative `#FF4242`, cautionary orange. A broad **accent** family (violet, purple, cyan, pink, lime, red-orange) provides content-badge hues. Full dark mode is defined (`:root[data-theme="dark"]` scope in `fig-tokens.css`).
- **Typography.** **Pretendard JP** for all UI/body; **Wanted Sans Variable** for brand/display moments; **SF Mono** for code/data. The scale is Display → Title → Heading → Headline → Body → Label → Caption, each with tight optical tracking (negative on large sizes, positive on small). Body has Normal (medium) and Reading (regular) weights. *Display 2 and Caption 1 line-height/tracking follow the documented Wanted scale, which every directly-observed value matches.*
- **Shape / radius.** Soft but not pill-everything: buttons 8/10/12 by size, fields 12, cards 16, sheets 24, chips & avatars fully round. Company avatars are squircles (~28% radius), person avatars circles.
- **Elevation.** Cards use soft, low, neutral shadows (`0 1px 4px / 0 4px 16px rgba(23,23,25,0.06)`) — never harsh. Outlined variants use a 1px `--line-normal-normal` hairline instead of shadow. FAB and switch knobs carry a tighter drop shadow.
- **Interaction.** Solid controls darken via a translucent black overlay on hover/press; ghost/outlined controls fill with `--fill-normal` (hover) → `--fill-strong` (press). Focus shows a 3px primary halo (`rgba(0,102,255,0.12)`). Transitions are quick (120–160ms) and un-flashy; the switch knob eases with `cubic-bezier(0.4,0,0.2,1)`. No bounce, no decorative looping motion.
- **Layout.** Generous whitespace on a 4-based rhythm; content in cards on a light alternative-gray background (`--background-normal-alternative`). Mobile surfaces use a bottom tab bar; hit targets ≥ 44px.
- **Imagery.** Real avatars/company logos and job thumbnails; the brand symbol is a vivid blue→pink→orange gradient mark. No stock-gradient backgrounds behind UI.

---

## Iconography

- **Set.** A single house-drawn line/fill icon family (~300 glyphs in the file; 116 materialized here into `components/icon/icon-data.js`). Style: 24×24 grid, rounded joins, ~1.5–2px optical stroke, with paired **outline** (`FillFalse`) and **filled** (`FillFillTrue`) variants for stateful icons (bell, bookmark, heart, home…), plus **thick** variants for emphasis (check, close, arrows).
- **Usage.** Render with `<Icon name="bell" size={24} />`. Friendly aliases are preferred (`bell`, `bell-fill`, `chevron-right`, `nav-recruit`); raw generated keys also work. Icons paint with **`currentColor`** — set the parent's `color`. Multi-color brand logos (Google, etc.) keep their own fills.
- **Emoji / unicode.** Not used as icons. Everything routes through the SVG set.
- **Substitutions.** None — icons are the file's own vectors, copied as path data (not redrawn).

---

## Fonts — note

Pretendard JP and Wanted Sans are open-source (SIL OFL) and loaded from **jsDelivr CDN** in `tokens/fonts.css` (no binaries committed). If you need self-hosted `woff2` files (offline/production), drop them in `assets/fonts/` and swap the `@import`s for local `@font-face` rules. **Ask the user for the official binaries if exact hinting matters.**

## Intentional additions

- **Icon** wrapper — the file ships icons as ~300 separate symbols; a single `<Icon>` component with an alias map is added so consumers have one ergonomic API. No visual invention; pure path data from the file.

## Sources

- Figma: *Wanted Design System (Community)* — attached `.fig` (mounted VFS). Pages incl. Overview, Foundation, Color (Atomic/Semantic), Typography, Grid, Theme, Icon, Logo, Component(2), Guidelines.
- Fonts: `orioncactus/pretendard` (Pretendard JP), `wanteddev/wanted-sans` (Wanted Sans) — both jsDelivr.

## Coverage & caveats

- The source lists **959 component families**, but that count is dominated by **non-consumer-facing internals**, which are intentionally *not* shipped as standalone components:
  - **~300 icon glyphs** — folded into one `<Icon>` component (116 materialized as path data).
  - **Hundreds of `…/Resource/*`, `…/_Resource/*`, `Cell/Resource/*`, `Action Area/*` slot sub-parts** — these are Figma's internal composition atoms (leading/trailing slots, control internals), not APIs a designer picks. They are folded into their parent primitive (e.g. Checkbox's control, ListCell's slots, Chip's content).
  - **Duplicate platform/theme variants** of the same component (iOS / Android / Web / Desktop / Mobile copies, `Variant2` duplicates, deprecated sets) — collapsed into one responsive component with props.
  - **Decorate/Interaction/Opacity/Dimmer/Overlay** helpers — represented by token-driven interaction states inside components, not shipped as components.
- What **is** shipped is the full **consumer-facing primitive set**: Button/IconButton/TextButton/FAB, Chip, Checkbox/Radio/Switch, Badge/ContentBadge, Avatar/AvatarGroup, Card, Divider, ListCell, TextField/Textarea/Select, Alert/Spinner/Skeleton/ProgressBar/Tooltip, BottomNavigation/Tabs/SegmentedControl, and the Icon set — **27 components** covering every interaction the source's screens use.
- Not yet built as distinct components (say the word and I'll add): **Auto Complete / Combobox**, **Date Picker**, **Bottom Sheet / Dialog**, **Snackbar/Toast**, **Pagination**, **Accordion**. These exist in the file but weren't needed by the UI kit.
- Type styles are authored (the file has **0 named Figma text styles**); the scale is transcribed from inline usage.
- Dark-mode and platform token modes are present in `fig-tokens.css` but components are tuned for the default (light) theme.
