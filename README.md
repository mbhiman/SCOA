# 🚀 Flipkart SCOA Frontend

A **modern SaaS-style frontend** for the **Flipkart Supply Chain Operations Academy (SCOA)** built with Next.js, Tailwind CSS v4, and a scalable design system.

---

## 🌐 Overview

The **Flipkart Supply Chain Operations Academy (SCOA)** is a training and certification initiative that prepares youth for careers in:

* 📦 Warehousing
* 🚚 Delivery Operations
* 📊 Data Entry
* 🔗 Supply Chain Management

This platform will enable:

* Course exploration
* User authentication
* Enrollment workflows
* Student dashboard (coming soon)

---

## ✨ Features (So Far)

### 🔐 Authentication UI

* Login + Register forms
* OTP + mobile-based structure
* Clean, accessible form components

### 🎨 Design System

* Token-driven styling (`globals.css`)
* Semantic utilities:

  * `bg-base`, `bg-card`
  * `text-ink`, `text-muted`, `text-primary`
  * `border-soft`

✔ No hardcoded colors
✔ Fully theme-driven UI

---

### 🌗 Dark Mode

* Powered by `next-themes`
* Tailwind `dark:` utilities
* System + Light + Dark support

---

### ⚡ Animations

* Built with Framer Motion
* Centralized animation system:

```bash
/lib/animations.ts
```

Includes:

* fadeIn
* slideUp
* scaleIn
* staggerContainer

---

### 📱 Responsive Design

* Mobile-first approach
* Adaptive layouts

| Screen  | Layout     |
| ------- | ---------- |
| Mobile  | Stacked    |
| Tablet  | Grid       |
| Desktop | Two-column |

---

### 🧩 Component Architecture

```bash
components/
├── ui/
│   ├── navbar.tsx
│   ├── button.tsx
│   └── input.tsx
│
├── auth/
│   ├── login-form.tsx
│   └── register-form.tsx
│
└── animations/
    └── fade-in.tsx
```

✔ Modular
✔ Reusable
✔ Scalable

---

## ⚙️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run development server

```bash
npm run dev
```

### 3️⃣ Open in browser

```bash
http://localhost:3000/
```

---

## 🧠 Design Principles

This project follows modern SaaS frontend standards:

* 🎯 Clean UI & spacing
* 🧩 Reusable components
* 🎨 Token-based styling
* ⚡ Minimal dependencies
* 📦 Scalable architecture

---

## 🛠 Tech Stack

| Tool                  | Purpose             |
| --------------------- | ------------------- |
| Next.js (App Router)  | Framework           |
| Tailwind CSS v4       | Styling             |
| next-themes           | Theme management    |
| Framer Motion         | Animations          |
| TypeScript            | Type safety         |
| clsx + tailwind-merge | Class utilities     |

---
