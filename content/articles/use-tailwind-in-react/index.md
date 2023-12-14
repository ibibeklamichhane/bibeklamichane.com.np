---
title: "How to use TailwindCSS with Reactjs."
description: "Use Tailwind CSS with React."
date: "2023-10-16"
banner:
  src: "../../images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg"
  alt: "First Markdown Post"
  caption: 'Photo by <u><a href="https://unsplash.com/@lautaroandreani?utm_source=medium&utm_medium=referral">Florian Olivo</a></u>'
categories:
  - "React.js"
keywords:
  - "Tailwind"
  - "React"
  - "Markdown"
  - "Blog"
---

## Introduction

Tailwind CSS is essentially a utility-first CSS framework designed for quickly creating custom user interfaces. It's a highly customizable, low-level CSS framework that provides you with all the essential building blocks necessary to craft unique designs without the need to struggle with overriding opinionated styles.

Tailwind represents a modern CSS framework that offers numerous advantages compared to traditional CSS. Its utility-first approach, along with pre-defined classes, streamlines the process of styling HTML components, making it faster, more efficient, and consistently structured.


## Install Tailwind CSS with React.js

### 1. Create your project:

To get started with Tailwind CSS in a React project, you can follow these steps:

```bash
$ npx create-react-app firstapp
cd my-project
```

### 2. Install Tailwind CSS:

After creating your React project, navigate to your project directory and install Tailwind CSS. You can achieve this by running the following commands in your terminal:

```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
### 3. Configure your template paths:

To configure your template paths in `tailwind.config.js`, you'll need to specify the paths to your template files. Replace the content in `tailwind.config.js` with the following code:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using the `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### 4. Add the Tailwind directives to your CSS:

To incorporate Tailwind CSS into your project's CSS, you need to add the `@tailwind` directives for each of Tailwind's layers to your `index.css` file. In your React project, navigate to the 'index.css' file and replace its contents with the following:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Start your build process:

To begin using Tailwind CSS in your React project, initiate the build process by running the following command:

```bash
npm run dev
```

### 6. Start using Tailwind in your project:

Now that your React project is set up with Tailwind CSS, you can begin using Tailwind's utility classes to style your content. Here's an example of how to use Tailwind classes in a React component:

```jsx
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```