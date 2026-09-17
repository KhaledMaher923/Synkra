# ⚡ Synkra - Enterprise SaaS Platform UI

> A modern, component-driven Enterprise SaaS web application designed for workflow automation, built with React, Vite, and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel)](https://synkra-plum.vercel.app/)
[![Figma Design](https://img.shields.io/badge/Figma-UI_Kit-F24E1E?style=for-the-badge&logo=figma)](https://www.figma.com/design/FWbDst29BxvfZw8jfBb6KK/Synkra---Enterprise-SaaS-Website-Template--UI-Kit-Available---Community-?node-id=14895-3610&t=IBnxCCtVqC2aLXdt-0)

---

## 📌 Overview

**Synkra** is a high-performance Enterprise SaaS platform landing and dashboard interface. The primary focus of this repository is on **scalable frontend architecture, modern UI design implementation, and reusable component systems**.

- 🌐 **Live Application:** [synkra-plum.vercel.app](https://synkra-plum.vercel.app/)
- 🎨 **Figma Reference:** [Synkra - Enterprise SaaS Template](https://www.figma.com/design/FWbDst29BxvfZw8jfBb6KK/Synkra---Enterprise-SaaS-Website-Template--UI-Kit-Available---Community-?node-id=14895-3610&t=IBnxCCtVqC2aLXdt-0)

---

## ✨ Features

- **🎨 Enterprise-Grade UI/UX:** Faithfully built according to modern SaaS design guidelines with custom layout structures.
- **🌙 Dark Mode Support:** Native dark theme optimization across all page components.
- **🧩 Reusable Component Architecture:** Modular design system dividing sections into independent, maintainable UI components.
- **📱 Fully Responsive:** Optimized layout flow across desktop, tablet, and mobile breakpoints using Tailwind utility classes.
- **⚡ Fast Navigation:** Client-side routing for seamless page transitions.

---

## 🛠️ Tech Stack & Libraries

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v18.0 or higher recommended) installed:
- Check Node version: `node -v`

### Local Setup

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/KhaledMaher923/Synkra.git](https://github.com/KhaledMaher923/Synkra.git)
   
   cd Synkra
1. **Install Dependencies**
	```bash
	npm install
	``` 
2. **Start the Development Server**
   ```bash
   npm run dev
   ```
    Open your browser and navigate to `http://localhost:5173`
3. **Build for Production**
	```bash
	npm run build
	```
### 📂 Project Structure
```
Synkra/
├── public/              # Static assets and favicons
├── src/
│   ├── assets/          # SVG graphics and imagery
│   ├── components/      # Reusable UI components (Navbar, Hero, Cards, Footer)
│   ├── pages/           # Page views 
│   ├── context/         # Application contexts
│   ├── layouts/         # Layouts 
│   ├── routes/          # Pages routes
│   ├── App.jsx          # Root application component
│   └── main.jsx         # React DOM entry point
├── vite.config.js       # Vite configuration
└── package.json         # Project metadata & dependencies
```
