# Student Portal Dashboard

## Overview

A modern, responsive student portal dashboard for a college/university built with React and Express. The application provides students with access to their academic information, including a digital ID card, grades, assignments, class schedules, announcements, and attendance tracking. The design follows a clean, minimalist, and academic aesthetic with a royal blue accent color.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript, bundled with Vite
- **Routing**: Wouter for client-side navigation (lightweight React Router alternative)
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Icons**: Lucide React for consistent iconography

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/` (Dashboard, Academics, Assignments, Schedule)
- Reusable UI components in `client/src/components/`
- shadcn/ui primitives in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture

- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Style**: RESTful JSON endpoints under `/api/` prefix
- **Data Storage**: In-memory storage class (`MemStorage`) with interface for future database integration
- **Schema Validation**: Zod for type-safe schema definitions shared between client and server

The backend serves:
- Static files from the Vite build in production
- Vite dev server middleware in development (HMR support)
- REST API endpoints for student data, courses, assignments, schedule, announcements, and notices

### Shared Code

The `shared/` directory contains Zod schemas that define data types used by both frontend and backend:
- Student profile
- Subject attendance
- Announcements and notices
- Courses and assignments
- Schedule items

### Build System

- **Development**: `tsx` for running TypeScript directly, Vite for frontend hot reloading
- **Production**: esbuild bundles the server, Vite builds the frontend to `dist/public/`
- **Database Migrations**: Drizzle Kit configured for PostgreSQL (schema in `shared/schema.ts`)

### Layout Structure

The application uses a fixed sidebar navigation pattern:
- Left sidebar with navigation links (collapsible on mobile via SidebarProvider context)
- Top header with user avatar, notifications, and logout
- Main content area that scrolls independently

## External Dependencies

### Database
- **Drizzle ORM**: Database toolkit configured for PostgreSQL
- **connect-pg-simple**: PostgreSQL session store (available but not yet implemented)
- **DATABASE_URL**: Environment variable required for database connection

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI primitives (dialog, dropdown, tabs, etc.)
- **class-variance-authority**: Component variant styling
- **date-fns**: Date formatting utilities
- **embla-carousel-react**: Carousel component support
- **react-hook-form** with **@hookform/resolvers**: Form handling with Zod validation

### Build Tools
- **Vite**: Frontend bundler with React plugin
- **esbuild**: Server bundler for production builds
- **Drizzle Kit**: Database migration tooling
- **@replit/vite-plugin-***: Replit-specific development plugins

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **tailwind-merge** and **clsx**: Class name utilities
- Custom CSS variables in `client/src/index.css` for theming