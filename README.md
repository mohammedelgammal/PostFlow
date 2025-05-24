# PostFlow - Next.js Posts Dashboard Application

![PostFlow Screenshot](/public/screenshot.png)

PostFlow helps you easily write, edit, and share posts with a clean dashboard and simple public view with CRUD operations, built with Next.js, TailwindCSS, and shadcn/ui. [Live Demo](https://post-flow-three.vercel.app)

## ✨ Features

### Public Site

- **Responsive Header**
  - Glass morphism effect with scroll transformations
  - Mobile-friendly hamburger menu
- **Posts Listing**
  - shadcn/ui styled cards with title & excerpt
  - React Query for data fetching & caching
  - custom hooks (`usePosts`, `usePost`)
  - Skeleton loading states
- **Post Details**
  - Dynamic route (`/posts/[id]`)
  - Error handling for missing posts

### Admin Dashboard (`/admin`)

- **Full CRUD Operations**
  - Create posts with Rich Text Editor
  - Edit existing posts
  - Delete with confirmation
- **Optimized Mutations**
  - Custom hooks (`useCreatePost`, `useDeletePost`)
  - Automatic cache invalidation

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: TailwindCSS + shadcn/ui components
- **State Management**: React Query v5
- **Rich Text**: Tiptap Editor
- **Deployment**: Vercel

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone git@github.com:mohammedelgammal/PostFlow.git
   cd postflow
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
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

Open http://localhost:3000 in your browser.

The app uses JSONPlaceholder as a mock API:

GET /posts - Fetch all posts
POST /posts - Create new post
GET /posts/:id - Fetch single post
PATCH /posts/:id - Update post
DELETE /posts/:id - Remove post

**Build For Deployment**

```bash
npm run build
```

Outputs optimized production-ready files to the .next folder.

## 📦 Deployment

The project is configured for seamless Vercel deployment:

Push to GitHub/GitLab
Import project in Vercel
Automatic deployments on main branch pushes

## 💙 Thank You!  

Feel free to contribute and leave your invaluable feedback.
