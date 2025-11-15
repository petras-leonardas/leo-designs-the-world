# Leo's Portfolio — Single-Page Application

A modern, responsive portfolio site built with React, TypeScript, Tailwind CSS, and Vite.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### 3. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
leo-designs-the-world/
├── index.html                 # Entry HTML
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite bundler config
├── tailwind.config.cjs        # Tailwind CSS config
├── postcss.config.cjs         # PostCSS config
└── src/
    ├── main.tsx               # React app entry
    ├── App.tsx                # Main layout component
    ├── vite-env.d.ts          # Vite type definitions
    ├── components/
    │   ├── Navbar.tsx         # Sticky navigation bar
    │   └── DarkModeToggle.tsx # Dark mode toggle button
    ├── sections/
    │   ├── HeroSection.tsx    # Hero / intro section
    │   ├── AboutSection.tsx   # About me section
    │   ├── ArticlesSection.tsx# Articles/blog section
    │   ├── MentorshipSection.tsx # Mentorship section
    │   ├── HobbiesSection.tsx # Hobbies/outside work section
    │   └── ContactSection.tsx # Contact/footer section
    └── styles/
        └── globals.css        # Global styles & Tailwind imports
```

---

## Features

- ✅ **Single-page layout** with smooth scrolling
- ✅ **Sticky navigation** with anchor links
- ✅ **Dark mode toggle** (class-based with Tailwind)
- ✅ **Responsive design** using Tailwind utility classes
- ✅ **Semantic HTML** sections for accessibility
- ✅ **TypeScript** for type safety
- ✅ **Vite** for fast development and optimized builds

---

## Customization

### Adding Content

Each section is a separate component in `src/sections/`. Replace placeholder text and add your own content:

- **Hero**: Update intro, title, and photo
- **About**: Add your story and experience
- **Articles**: Map over blog posts or add featured articles
- **Mentorship**: Describe your mentoring approach
- **Hobbies**: Add images and descriptions
- **Contact**: Link to email, LinkedIn, or add a contact form

### Styling

All sections use Tailwind CSS utility classes. Key customizations:

- **Colors**: Modify `tailwind.config.cjs` to change the color palette
- **Typography**: Adjust font sizes and weights in section components
- **Dark mode**: Update dark mode colors using `dark:` variants

### Dynamic Content

The scaffold is ready for dynamic data:

- **Blog feed**: Fetch posts and map them in `ArticlesSection`
- **Contact form**: Replace placeholder buttons with a form component
- **CMS integration**: Connect to a headless CMS or API

---

## Tech Stack

- **React 18** — UI library
- **TypeScript 5** — Type safety
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Utility-first styling
- **PostCSS & Autoprefixer** — CSS processing

---

## Next Steps

1. ✅ **Install dependencies** with `npm install`
2. ✅ **Start dev server** with `npm run dev`
3. 🎨 **Customize content** in each section component
4. 📝 **Add your portfolio items** (projects, articles, etc.)
5. 🚀 **Deploy** to Vercel, Netlify, or your preferred host

---

## Notes

- All errors you see in the IDE will disappear once you run `npm install`
- The project uses SWC for fast TypeScript compilation
- Dark mode state is managed with React hooks and persists across the session
- The layout is mobile-first and fully responsive

---

**Built with ❤️ for Leo's portfolio**
