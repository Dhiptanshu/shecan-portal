# She Can Foundation

**Live Demo:** [https://shecan-portal.vercel.app/](https://shecan-portal.vercel.app/)

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Demo & Screenshots

**Watch the walkthrough:**

<video src="https://github.com/user-attachments/assets/UPLOAD_YOUR_VIDEO_IN_GITHUB" controls="controls" muted="muted" playsinline="playsinline" style="max-width: 100%;"></video>

*(Tip: When editing this README on GitHub.com, you can drag and drop your `.mp4` video directly into the text editor, and GitHub will automatically generate a playable video link for you!)*

<details>
<summary>View Screenshots</summary>

![Landing Page Hero](/public/landing.png)
![Contact Form Submission](/public/form.png)
![Contact Form Confirmation](/public/form_success.png)
![Admin Login Screen](/public/admin_login.png)
![Admin Secure Dashboard](/public/admin_dashboard.png)
</details>

---

## Project Description

This is the official, full-stack web portal for **She Can Foundation**, a non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women through education, advocacy, community support, and leadership development.

The application serves as both the public-facing digital presence and the secure backend command center. It communicates the organization's mission, showcases its impact, and seamlessly connects with a PostgreSQL database via Supabase to handle inquiries and store data persistently. 

The design system implements a "Power & Grace" aesthetic, using sharp geometry, high contrast, clean white backgrounds, and deep midnight-indigo blocks, representing the foundation's bold and authoritative approach to systemic change.

---

## Features

- **Database Integration:** Direct connection to a serverless PostgreSQL database via `@supabase/supabase-js` for persistent message storage.
- **Admin Panel:** A dedicated `/admin` dashboard that securely fetches and maps database entries into a structured table format.
- **Authentication:** Password-based route protection on the backend ensuring only authorized personnel can access the command center data.
- **Backend APIs:** Custom Next.js Route Handlers for stateless server interactions (POST handling, validation, database reads/writes).
- **Form Validation:** Dual-layered validation — immediate client-side feedback (empty checks, email regex) and secure server-side verification before database insertion.
- **Responsive Design:** 100% mobile-first layout utilizing Tailwind CSS breakpoints to scale flawlessly from phones to ultrawide monitors.
- **Interactive State Handling:** Real-time UI updates including loading spinners, error banners, and success screens without page reloads.

---

## Application Routes

### Frontend Routes
- **`/` (Public Landing Page):** The main single-page application containing the Hero, Mission, Impact, and Contact sections.
- **`/admin` (Admin Dashboard):** The secure command center. Initially renders a high-contrast login screen. Upon successful authentication, it queries the database and renders all submitted forms in a data table.

### Backend API Routes
- **`POST /api/contact`:** 
  - Receives payload from the public contact form.
  - Performs server-side validation.
  - Executes `supabase.from('submissions').insert(...)` to persist the data.
  - Returns a success or error response to trigger UI state updates.
- **`POST /api/admin/login`:**
  - Receives password payload from the Admin login screen.
  - Validates it strictly against the `ADMIN_PASSWORD` environment variable.
  - If valid, fetches all rows from the database using the Supabase Service Role (bypassing RLS) or Anon key and returns the data array.

---

## Database Schema (Supabase PostgreSQL)

The application relies on a single table named `submissions`. You can run this exact SQL command in your Supabase SQL Editor to initialize the database:

```sql
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Optional: If using the public Anon Key without the Service Role Key, 
-- allow insertions via Row Level Security (RLS)
CREATE POLICY "Allow public inserts" ON submissions
  FOR INSERT TO public WITH CHECK (true);
```

---

## File Architecture

```
she-can/
├── public/
│   └── she-YlenJon1O7ieeEoa.avif    # Organization logo
│
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.js               # Frontend: Admin Dashboard & Authentication UI
│   │   ├── api/
│   │   │   ├── admin/login/
│   │   │   │   └── route.js          # Backend: Authenticates admin & fetches DB rows
│   │   │   └── contact/
│   │   │       └── route.js          # Backend: Validates form & inserts into DB
│   │   ├── globals.css               # Global styles and custom keyframe animations
│   │   ├── layout.js                 # Root layout: fonts and HTML metadata
│   │   └── page.js                   # Frontend: Main landing page component
│   │
│   └── lib/
│       └── supabase.js               # Supabase JS Client initialization
│
├── .env.local                        # Environment variables (Supabase URL, Keys, Admin Password)
├── next.config.mjs                   # Next.js configuration
├── postcss.config.mjs                # PostCSS configuration
├── jsconfig.json                     # Path aliases
├── eslint.config.mjs                 # ESLint rules
└── package.json                      # Dependencies (Next.js, Tailwind, Supabase)
```

---

## Local Setup and Deployment

### Prerequisites

- Node.js v18+ and npm v9+
- A [Supabase](https://supabase.com/) account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhiptanshu/she-can-foundation.git
   cd she-can-foundation/she-can
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root directory and add:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-service-role-key" # Recommended for backend API

   # Admin Dashboard Protection
   ADMIN_PASSWORD="your-secure-password"
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import the project.
3. In the project settings, add the Environment Variables from your `.env.local` file.
4. Click **Deploy**. Vercel will automatically configure the build settings for Next.js.

---

## Author

**Dhiptanshu Malik**
[github.com/Dhiptanshu](https://github.com/Dhiptanshu)