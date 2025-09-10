import { Post } from "./types";

// list of blog posts
export const posts: Post[] = [
  {
    id: "post1",
    title: "Hello World",
    date: "2025-09-10",
    content: `# Welcome 🌸

This is my **first blog post** written in Markdown.

## Features:
- Easy blogging
- Clean design
- Markdown support

## Code Example:
\`\`\`javascript
console.log("Hello Blog!");
\`\`\`
`,
  },
  {
    id: "post2",
    title: "Learning Next.js",
    date: "2025-09-12",
    content: `# Learning Next.js 🚀

In this post, we talk about why **Next.js** is awesome.

### Benefits:
- File-based routing
- Server-side rendering
- Static site generation
- Easy deployment with Vercel
`,
  },
];
