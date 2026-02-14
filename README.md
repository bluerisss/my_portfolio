# Portfolio - Nguyen Thanh Nam

Personal portfolio website of **Nguyen Thanh Nam** - Solution Engineer & Cloud Architect, specializing in scalable data systems, AI-driven platforms, and cloud-native architecture.

## 🚀 Overview

A modern portfolio website built with Next.js, showcasing projects, technical expertise, and experience in Solution Engineering and Cloud Architecture.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful interface with smooth animations
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Performance** - Optimized with Next.js App Router
- 🎭 **Dark Mode** - Dark theme support with next-themes
- 🎯 **Interactive Components** - Interactive components with Framer Motion
- 📊 **Project Showcase** - Featured projects display
- 💼 **Technical Expertise** - Skills and expertise showcase

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### State Management & Data
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### Other Libraries
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Recharts](https://recharts.org/)** - Chart library

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Setup Steps

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd nam-s-architecture
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
nam-s-architecture/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── providers.tsx      # Global providers
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   └── ...           # Custom components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🚢 Deployment

### Vercel (Recommended)

This project is optimized for Vercel:

1. Push your code to GitHub
2. Import your project to [Vercel](https://vercel.com)
3. Vercel will automatically detect and deploy

### Other Platforms

- **Netlify** - Supports Next.js out of the box
- **AWS Amplify** - Deploy with CI/CD
- **Docker** - Build and deploy with containers

## 🎨 Customization

### Updating Content

- Edit components in `src/components/` to update sections
- Modify `app/page.tsx` to change the homepage layout
- Update metadata in `app/layout.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes in components

### Theme

The project uses `next-themes` for theme management. Default theme is set to dark mode in `app/providers.tsx`.

## 📝 License

This is a personal portfolio project. You can reference the code, but please do not copy the entire design and content.

## 📧 Contact

**Nguyen Thanh Nam**  
Solution Engineer & Cloud Architect

- Portfolio: [Your Website URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: [Your Email]

---

⭐ If you find this project helpful, please star this repo!
