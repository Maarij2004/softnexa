# Softnexa Website

A modern, responsive React website for Softnexa - Digital Transformation Solutions.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Built with React 18
- 🧭 React Router for navigation
- 🎯 Component-based architecture
- ⚡ Optimized performance
- 🌈 Beautiful gradient color scheme

## Pages

- **Home** - Landing page with hero, services, projects, about, and CTA sections
- **Services** - Overview of all services offered
- **Projects** - Portfolio showcase
- **About** - Company information and statistics
- **Contact** - Contact form and information
- **Service Detail Pages**:
  - Digital Marketing
  - Web Development
  - Mobile App Development
  - AI & Advanced Automation
  - SEO Services
  - Shopify Solutions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Services.js
│   ├── Projects.js
│   ├── About.js
│   ├── CTA.js
│   ├── Button.js
│   ├── SectionTitle.js
│   └── ScrollToTop.js
├── pages/               # Page components
│   ├── Home.js
│   ├── Services.js
│   ├── Projects.js
│   ├── About.js
│   ├── Contact.js
│   └── services/        # Service detail pages
│       ├── ServiceDetailTemplate.js
│       ├── DigitalMarketing.js
│       ├── WebDevelopment.js
│       ├── MobileApp.js
│       ├── AIAutomation.js
│       ├── SEO.js
│       └── Shopify.js
├── App.js               # Main app component with routing
├── App.css
├── index.js             # Entry point
└── index.css            # Global styles
```

## Color Scheme

The website uses a modern blue-purple gradient color scheme:

- Primary Blue: `#1a56db`
- Secondary Blue: `#3b82f6`
- Primary Purple: `#7c3aed`
- Secondary Purple: `#8b5cf6`
- Light Blue: `#dbeafe`
- Light Purple: `#ede9fe`

## Technologies Used

- React 18
- React Router DOM
- CSS3 (with CSS Variables)
- Font Awesome Icons
- Google Fonts (Poppins, Montserrat)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

