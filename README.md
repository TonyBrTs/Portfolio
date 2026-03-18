# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, designed to showcase skills, projects, and professional experience in an interactive and visually appealing way.

## Features

- **Hero Section**: Eye-catching introduction with smooth animations
- **About**: Personal background and information
- **Specialties**: Highlighted skills and expertise areas
- **Portfolio**: Showcase of projects and work samples
- **Contact**: Easy way to get in touch
- **Smooth Scrolling**: Enhanced user experience with scroll indicators and smooth navigation
- **Responsive Design**: Optimized for all devices and screen sizes

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── Navbar.tsx
    ├── Portfolio.tsx
    ├── ScrollIndicator.tsx
    ├── ScrollWrapper.tsx
    ├── SmoothScrollManager.tsx
    ├── Specialties.tsx
    └── SpecialtyCard.tsx
```

## Customization

- **Content**: Edit the components in `src/components/` to update personal information, projects, and styling
- **Styling**: Modify `src/app/globals.css` for global styles or component-specific CSS
- **Configuration**: Adjust Next.js settings in `next.config.ts`

## Build for Production

```bash
npm run build
npm run start
```

## Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or any static hosting service that supports Next.js.

For Vercel deployment:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).
