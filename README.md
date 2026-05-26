# She Can Foundation

**Live Demo:** [https://shecan-portal.vercel.app/](https://shecan-portal.vercel.app/)

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Lucide](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Project Description

This is the official web portal for **She Can Foundation**, a non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women through education, advocacy, community support, and leadership development.

The application is a fully responsive, single-page application designed to serve as the foundation's public-facing digital presence. It communicates the organization's mission, showcases its impact through data, and provides a direct communication channel for prospective volunteers, donors, and partners through a validated contact form backed by a serverless API route.

The design system follows a high-contrast editorial aesthetic inspired by authority, purpose, and intentional structure. It deliberately avoids the commonly overused soft pastel or glassmorphism trends in favor of crisp typographic hierarchy, hard geometric borders, and bold color contrast that reflects the organization's values of strength and clarity.

---

## Features

- Fully responsive, mobile-first layout across all breakpoints
- Sticky navigation bar with scroll-aware shadow, mobile hamburger menu, and animated underline links
- Two-column hero section with a dark quote manifesto panel and founder testimonial
- Four-pillar mission grid with hover-fill transitions
- Impact statistics section with large typographic numbers and hover lift effects
- Split-layout contact form with client-side validation and a Next.js API route for server-side processing
- Inline animated success state on form submission without any page reload
- SEO-optimized metadata, semantic HTML structure, and accessible form labels
- Zero external image dependencies beyond the organization logo
- One-click deployment to Vercel

---

## File Architecture

```
she-can/
├── public/
│   └── she-YlenJon1O7ieeEoa.avif    # Organization logo (AVIF format for optimal compression)
│
├── src/
│   └── app/
│       ├── api/
│       │   └── contact/
│       │       └── route.js          # POST handler: server-side form validation and response
│       ├── globals.css               # Global styles, CSS custom properties, utility classes, keyframe animations
│       ├── layout.js                 # Root layout: font loading (Inter, Playfair Display, Syne), HTML metadata
│       └── page.js                   # Main page: all section components (Navbar, Hero, Mission, Impact, Contact, Footer)
│
├── next.config.mjs                   # Next.js configuration (Turbopack root, future options)
├── postcss.config.mjs                # PostCSS configuration required by Tailwind CSS
├── jsconfig.json                     # JavaScript path aliases (@/* -> ./src/*)
├── eslint.config.mjs                 # ESLint rules for Next.js
├── package.json                      # Project dependencies and npm scripts
└── README.md                         # This file
```

### Key File Responsibilities

**`src/app/layout.js`**
The root layout wraps every page in the application. It handles Google Fonts loading via `next/font/google` (which self-hosts fonts for zero layout shift and no external requests at runtime), sets the HTML `lang` attribute, applies the CSS font variables to the document body, and defines the global SEO metadata object consumed by Next.js for `<head>` generation.

**`src/app/globals.css`**
Contains all CSS that cannot be expressed cleanly through Tailwind utility classes alone: CSS custom properties for the design token palette, `@font-face` variable declarations, keyframe animation definitions (`scale-in`, `fade-up`), stateful class utilities (`input-solid`, `btn-solid`, `btn-ghost`, `stat-card`, `pillar-card`), and the `headline-underline` gradient decoration technique. Tailwind's `@import "tailwindcss"` directive at the top activates the framework.

**`src/app/page.js`**
The main and only route of the application. It is structured as a client component (`'use client'`) because it requires React state for the contact form (loading, error, and success states) and the scroll listener in the Navbar. All visual sections are defined as named functions within this file and composed at the bottom in the default `Home` export. This single-file approach is intentional for a project of this scope, keeping the component tree shallow and easy to navigate.

**`src/app/api/contact/route.js`**
A Next.js App Router API route that handles `POST` requests from the contact form. It performs server-side validation (required fields, email regex) and returns structured JSON responses with appropriate HTTP status codes. In a production environment, this handler would be the integration point for an email service (Resend, SendGrid) or a database write operation.

---

## Why This Tech Stack

**Next.js (App Router)**
Next.js was chosen because it provides both the React frontend and the serverless API routes in a single unified project. The App Router architecture enables fine-grained control over which components are server-rendered and which are interactive client components. Critically, it produces a build artifact that deploys to Vercel with zero configuration, making it the most appropriate framework for a project with a one-click deployment requirement.

**React 19**
React is the industry-standard UI library. Version 19 ships with improved performance characteristics and is the peer dependency of the Next.js version used here. The component model allows the page to be structured as composable, readable sections rather than a monolithic HTML document.

**Tailwind CSS 4**
Tailwind's utility-first approach was used for all layout, spacing, color, and responsive breakpoint declarations directly in JSX. This eliminates the need to maintain a separate component stylesheet and keeps styles co-located with their markup. Version 4 uses a single `@import "tailwindcss"` directive and scans source files automatically without a separate configuration file for content paths.

**Lucide React**
Lucide provides a consistent, tree-shakeable SVG icon library. Every icon is imported individually, meaning only the icons actually used are included in the final bundle. The library supports `size` and `strokeWidth` props that make it trivial to maintain visual consistency across the design system.

**Google Fonts via `next/font`**
Three typefaces define the typographic hierarchy: **Inter** for body text (geometric, highly legible at all sizes), **Playfair Display** for editorial serif headings (authoritative and high-contrast), and **Syne** for labels, badges, and UI elements (bold, architectural). Loading fonts via `next/font/google` self-hosts them at build time, eliminating the performance cost and privacy implications of a browser-side Google Fonts request.

**Vercel**
Vercel is the deployment platform built by the creators of Next.js. It natively understands the Next.js build output, automatically deploys API routes as serverless functions, handles CDN distribution of static assets, and provides SSL out of the box. The platform requires no configuration file for a standard Next.js project.

---

## Local Setup and Deployment

### Prerequisites

- Node.js version 18.18.0 or higher
- npm version 9 or higher

Verify your versions with:

```bash
node -v
npm -v
```

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/Dhiptanshu/she-can-foundation.git
cd she-can-foundation/she-can
```

Install all dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload automatically as you edit source files.

### Building for Production

To verify the production build locally before deploying:

```bash
npm run build
```

To serve the production build locally:

```bash
npm start
```

### Linting

```bash
npm run lint
```

### Deploying to Vercel

**Option 1: One-click via Vercel Dashboard**

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click "Add New Project".
3. Import the repository and set the root directory to `she-can` if the repository contains the outer `SheCan` parent folder.
4. Click "Deploy". No environment variables are required for the base setup.

**Option 2: Vercel CLI**

Install the Vercel CLI globally:

```bash
npm install -g vercel
```

Run the deployment command from inside the `she-can` directory:

```bash
vercel
```

Follow the prompts to link to your Vercel account and project. For subsequent deployments:

```bash
vercel --prod
```

---

## Environment Variables

No environment variables are required to run the project in its current state. The `/api/contact` route validates and acknowledges form submissions in memory.

If you integrate an email service or database in future, add your secrets to a `.env.local` file at the root of the `she-can` directory:

```
EMAIL_API_KEY=your_key_here
DATABASE_URL=your_connection_string_here
```

Next.js automatically loads `.env.local` during development. Add the same variables to your Vercel project settings under "Environment Variables" for production.

---

## Author

**Dhiptanshu Malik**
[github.com/Dhiptanshu](https://github.com/Dhiptanshu)

Built as an internship submission for She Can Foundation.
