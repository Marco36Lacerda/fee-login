# Gong Frontend Exercise

A web application built with React, TypeScript, Vite, and Tailwind CSS as part of the Gong frontend engineering exercise.

## Features

- Login page with email/password authentication via Firebase
- Protected hierarchy page with full user tree
- Photo or initials badge per user
- Manager/non-manager indicators
- Logged-in user displayed with logout option

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

src/
├── components/
│ ├── ProtectedRoute.tsx # Route guard for authenticated pages
│ ├── TreeNode.tsx # Recursive tree node component
│ └── UserBadge.tsx # Photo or initials avatar
├── hooks/
│ ├── useAuth.ts # Login, logout, session management
│ └── useUsers.ts # Fetch all users from Firebase
├── pages/
│ ├── LoginPage.tsx # Login form
│ └── HierarchyPage.tsx # Full hierarchy tree view
├── utils/
│ ├── buildTree.ts # Builds tree structure from flat user array
│ └── encode.ts # Encode function provided by Gong
├── types.ts # Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css

## Architecture Notes

Authentication logic is encapsulated in `useAuth`, which uses the provided `encode` function to generate a secret, looks it up in Firebase to retrieve the user ID, then finds the matching user in the users array. The hierarchy tree is built client-side in `buildTree` from the flat users array using `managerId` references.
