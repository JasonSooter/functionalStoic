---
linter-yaml-title-alias: Next.js Foundations Course
title: Next.js Foundations Course
date created: 2025-09-26T15:37:52-06:00
date modified: 2025-09-26T18:08:48-06:00
---
# Next.js Foundations Course

## Summary

In this course, I build a financial dashboard that has:
- A public homepage.
- A login page.
- Dashboard pages that are protected by authentication.
- The ability for users to add, edit, and delete invoices.

The dashboard will also have an accompanying database, which is set up in [a later chapter](https://nextjs.org/learn/dashboard-app/setting-up-your-database).

By the end of the course, we go through the essential skills needed to start building full-stack Next.js applications.

Here's an overview of features learned in this course:

- **Styling**: The different ways to style your application in Next.js.
- **Optimizations**: How to optimize images, links, and fonts.
- **Routing**: How to create nested layouts and pages using file-system routing.
- **Data Fetching**: How to set up a Postgres database on Vercel, and best practices for fetching and streaming.
- **Search and Pagination**: How to implement search and pagination using URL search params.
- **Mutating Data:** How to mutate data using React Server Actions, and revalidate the Next.js cache.
- **Error Handling:** How to handle general and `404` not found errors.
- **Form Validation and Accessibility:** How to do server-side form validation and tips for improving accessibility.
- **Authentication**: How to add authentication to your application using [`NextAuth.js`](https://next-auth.js.org/) and Middleware.
- **Metadata**: How to add metadata and prepare your application for social sharing.

## Changelog

## Resources

- https://nextjs.org/learn/dashboard-app

## Action Items

## FAQ

> [!question] Title
> Contents
> [Source]()

## Content

### Next.js Folder Structure

- **`/app`**: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- **`/app/lib`**: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- **`/app/ui`**: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
- **`/public`**: Contains all the static assets for your application, such as images.
- **Config Files**: You'll also notice config files such as `next.config.ts` at the root of your application. Most of these files are created and pre-configured when you start a new project using `create-next-app`. You will not need to modify them in this course.

### CSS Styling

- Use `global.css` to add CSS rules to **all** the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.

### Nested Routing

- Next.js uses file-system routing where **folders** are used to create nested routes. Each folder represents a **route segment** that maps to a **URL segment**.
- You can create separate UIs for each route using `layout.tsx` and `page.tsx` files.
- `page.tsx` is a special Next.js file that exports a React component, and it's required for the route to be accessible. In your application, you already have a page file: `/app/page.tsx` - this is the homepage associated with the route `/`.
- To create a nested route, you can nest folders inside each other and add `page.tsx` files inside them.
- For example: `/app/dashboard/page.tsx` is associated with the `/dashboard` path

![Diagram showing how adding a folder called dashboard creates a new route '/dashboard'](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Flearn%2Fdark%2Fdashboard-route.png&w=3840&q=75)

- By having a special name for `page` files, Next.js allows you to [colocate](https://nextjs.org/docs/app/getting-started/project-structure#colocation) UI components, test files, and other related code with your routes. Only the content inside the `page` file will be publicly accessible. For example, the `/ui` and `/lib` folders are _colocated_ inside the `/app` folder along with your routes.

### Shared Layout

In Next.js, you can use a special `layout.tsx` file to create UI that is shared between multiple pages.

One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called [partial rendering](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering) which preserves client-side React state in the layout when transitioning between pages.

The `<Layout />` component receives a `children` prop. This child can either be a page or another layout.

#### /app/layout.tsx

This is called the [root layout](https://nextjs.org/docs/app/api-reference/file-conventions/layout#root-layouts) and is required in every Next.js application. Any UI you add to the root layout will be shared across **all** pages in the application. You can use the root layout to modify `<html>` and `<body>` tags, and add metadata
