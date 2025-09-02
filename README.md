# Next.js App

🚀 A modern web application built with [Next.js](https://nextjs.org/) and deployed on [Vercel](https://vercel.com).  
Live Demo: [nextjs-app-nu-drab.vercel.app](https://nextjs-app-nu-drab.vercel.app)  
Repository: [github.com/matenka-andrii/nextjs-app](https://github.com/matenka-andrii/nextjs-app)

---

## ✨ Features

- ⚡ **Next.js 15** with the App Router and latest rendering features
- 🎨 **Tailwind CSS 4** for utility-first, modern styling
- 📦 **TypeScript** for static type safety and maintainability
- 📝 **Sanity CMS** integration for structured content and flexible queries
- 🔐 **NextAuth.js** for secure authentication (GitHub OAuth provider)
- 🌐 **Server-Side Rendering (SSR)**, **Incremental Static Regeneration (ISR)** and **experimental Partial Prerendering (PPR)** 
- 🛠️ **ESLint & Prettier** for clean and consistent code
- 🚀 Deployed on **Vercel** with CI/CD

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **CMS:** [Sanity](https://www.sanity.io/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Deployment:** [Vercel](https://vercel.com)

---

## 🔑 Environment Variables
To run the project locally, create a .env.local file in the root directory with the following variables:

```bash
AUTH_SECRET=""
AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""
NEXT_PUBLIC_SANITY_PROJECT_ID=""
NEXT_PUBLIC_SANITY_DATASET=""
NEXT_PUBLIC_SANITY_API_VERSION=""
SANITY_WRITE_TOKEN=""
SENTRY_AUTH_TOKEN=""
```
## 📦 Getting Started
Clone the repository, install dependencies and run the development server:
```bash 
git clone https://github.com/matenka-andrii/nextjs-app.git
cd nextjs-app

npm install

npm run dev
```

## 🚀 Deployment
This project is deployed with Vercel.
Push to the main branch and Vercel will automatically build and deploy the latest version.

## 📄 License
This project is licensed under the MIT License.