# AFADU Website

A modern, professional NGO website for AFADU (Advocacy for Rational Use of Medicines) focused on improving healthcare systems in Kenya.

## Features

- **Hero Section**: Full-width auto-sliding image carousel with smooth transitions
- **Navigation**: Sticky navbar with dropdown menus and mobile responsiveness
- **About Section**: Two-column layout with organization information
- **Program Pillars**: Four key program areas with interactive cards
- **Impact Metrics**: Animated counters showing organization statistics
- **Partners Section**: Grid layout showcasing partner organizations
- **Insights/News**: Latest updates and articles
- **Call to Action**: Compelling banner for partnerships
- **Footer**: Comprehensive footer with links and contact information

## Tech Stack

- **Next.js 16.2.1** with App Router
- **TypeScript**
- **Tailwind CSS 4**
- **React 19.2.4**

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
afadu-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Footer.tsx
│       ├── HeroSlider.tsx
│       ├── Navbar.tsx
│       └── ProgramCard.tsx
├── public/
│   └── images/
├── tailwind.config.ts
└── package.json
```

## Key Components

### HeroSlider
- Auto-sliding carousel (5-second intervals)
- Manual navigation with arrows and dots
- Smooth left-to-right sliding transitions
- Overlay with gradient for text readability

### Navbar
- Sticky positioning
- Dropdown menu for Programs
- Mobile-responsive hamburger menu
- Smooth scroll navigation

### ProgramCard
- Reusable card component
- Hover effects and animations
- Icon integration
- Delayed animations for visual appeal

## Design Features

- **Mobile-first responsive design**
- **Professional NGO styling** (similar to WHO, UNICEF)
- **Blue and green color palette** representing healthcare and growth
- **Smooth animations and transitions**
- **Accessible design** with proper contrast ratios
- **SEO optimized** with proper meta tags

## Images

The website uses custom AFADU images in the `/public/images/` directory:
- `Afadulogo.png` - Main organization logo
- `afudu1.webp` through `afudu6.jpeg` - Hero carousel images

## Customization

- Colors are defined in `tailwind.config.ts`
- Component styles use Tailwind utility classes
- Custom CSS classes defined in `globals.css`

## Performance

- Lazy loading images
- Optimized animations
- Efficient component structure
- Minimal bundle size

## 🚀 Live Demo

[![View on GitHub](https://img.shields.io/badge/View-on%20GitHub-blue?style=for-the-badge&logo=github)](https://github.com/Peaceteka/Afadu.git)

---

**Built with ❤️ for AFADU - Advocacy for Rational Use of Medicines**
