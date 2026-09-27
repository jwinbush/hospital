<h1 align="center">Serenity Health</h1>

<p align="center"><i>Compassionate care, close to home.</i></p>

<p align="center">
  <img src="src/assets/images/serenity-health-logo.png" alt="Serenity Health logo" width="320">
</p>

---

## What this is

A full refresh of the Serenity Health website. The old Serenity Care Services site did the job, but it was starting to show its age, so this project rebuilds the public site from the ground up with a cleaner look, clearer navigation and a layout that works on every screen size.

The goal is simple: make it easy for patients to find a doctor, understand the services, and book an appointment without digging around.

## What's inside

### The public site

Everything a patient needs, all sharing one header and footer:

- **Home**: hero, quick links, services, conditions and locations at a glance
- **About**: mission, team and careers
- **Services**: an overview plus a detail page for each service
- **Conditions & treatments**: browse by category
- **Find a Doctor**: provider listings with individual profiles
- **Patient resources**: health library, patient forms, insurance & billing, FAQs
- **Patient portal**, **Contact**, **Locations** and **Book an Appointment**

Links from the old site (`/home`, `/our-services`, `/careers`, `/faq`) redirect to their new homes, so bookmarks don't break.

### The portal

The original logged-in app for patients and hospitals (sign-up, login, dashboards, profiles, chat and self-analysis) is still here under its own routes, untouched by the redesign.

## Tech stack

- **Angular 18** with TypeScript
- **SCSS** with a small design system built on CSS variables
- **Angular Material**, **Font Awesome**, **GSAP** and **SweetAlert2**

## Getting started

You'll need Node.js and npm.

```sh
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200). The page reloads automatically as you edit.

| Command | What it does |
| --- | --- |
| `npm start` | Runs the dev server |
| `npm run build` | Builds for production into `dist/` |
| `npm run watch` | Rebuilds on every change (development build) |
| `npm test` | Runs the unit tests with Karma |

## Where things live

```
src/
├── app/
│   ├── site/                 # the new public website
│   │   ├── pages/            # one folder per page
│   │   ├── shared/           # reusable pieces: page hero, CTA band, provider card
│   │   ├── layout/           # shared header + footer wrapper
│   │   ├── site-content.ts   # all the site's text, people and places
│   │   └── site.routes.ts    # public URLs
│   ├── Utilities/            # navbar, footer, error page, alerts
│   ├── Hospitals/ Patients/  # the portal
│   └── app-routing.module.ts
├── assets/                   # images, fonts, videos
└── styles/                   # global styles, split into numbered partials
```

### Changing content

Most of the words on the site (services, conditions, providers, locations, nav links) live in **`src/app/site/site-content.ts`**. Edit it there and the pages update. You rarely need to touch the templates.

> **Heads up:** provider names, phone numbers, addresses, hours and insurance plans are placeholder content for now. Swap in the real details before launch.

### Styling

Global styles live in `src/styles/`, loaded in order by `src/styles.scss`:

- **`_01-tokens.scss`**: colors, font sizes, spacing and widths as CSS variables. Use them anywhere, e.g. `color: var(--color-teal);`
- **`_07-buttons.scss`**: every button gets `.btn` plus one variant: `.btn-primary`, `.btn-secondary`, `.btn-tertiary` or `.btn-light`. Add `.btn-sm`, `.btn-lg` or `.btn-block` for size.
- The rest cover the reset, layout, typography, components, utilities and animations. Each file has a short guide at the top.

Component styles follow a BEM-style naming pattern (`.hero__title`, `.main-nav__link`) so it's easy to tell what belongs where.

## Author

Built and redesigned by **Jawon Winbush**.

## License

Licensed under the [Apache License 2.0](LICENSE).
