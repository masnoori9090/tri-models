# Tri Models - Professional Modeling Agency Platform

A modern, full-stack modeling agency website built with Next.js, featuring model portfolios, advanced filtering, and comprehensive admin management.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-6.19-2D3748)
![React](https://img.shields.io/badge/React-19.2-61DAFB)

## ✨ Features

### Public Features
- 🎨 **Modern Design** - Clean, professional interface with premium aesthetics
- 🔍 **Advanced Filtering** - Filter models by gender, category, height, and more
- 📱 **Responsive** - Mobile-first design that works on all devices
- 👤 **Model Profiles** - Detailed portfolios with photos and measurements
- 🏢 **Industry Categories** - 8+ specialized categories from High Fashion to Healthcare
- 📊 **Statistics Dashboard** - Showcase agency achievements and reach

### Admin Features
- 🔐 **Secure Login** - Protected admin area
- ➕ **Bulk Model Addition** - Efficiently add multiple models
- 📝 **Model Management** - Edit, approve, and manage model profiles
- 📸 **Photo Management** - Upload and organize model portfolios
- 📈 **Dashboard** - Overview of models, applications, and inquiries

### Client Features
- 📋 **Client Registration** - Easy onboarding for brands and companies
- 💼 **Model Applications** - Browse and request models for projects
- 📬 **Contact System** - Direct communication with the agency

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Database:** Prisma ORM with SQLite (PostgreSQL for production)
- **Styling:** CSS Modules
- **UI Components:** Custom React components
- **Icons:** Lucide React

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/tri-models.git
cd tri-models
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database with sample models
npx tsx prisma/seed-models.ts
```

4. **Create environment file**
```bash
cp .env.example .env
```

Update `.env`:
```env
DATABASE_URL="file:./dev.db"
```

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🗂️ Project Structure

```
tri-models/
├── app/                      # Next.js app directory
│   ├── admin/               # Admin dashboard & features
│   ├── models/              # Model browsing & profiles
│   ├── client/              # Client registration
│   ├── actions/             # Server actions
│   └── page.tsx             # Homepage
├── components/              # Reusable React components
│   ├── layout/             # Header, Footer
│   ├── models/             # Model cards, filters
│   └── ui/                 # Buttons, inputs, etc.
├── prisma/                  # Database schema & migrations
│   ├── schema.prisma       # Prisma schema
│   └── seed-models.ts      # Database seeding
├── public/                  # Static assets
│   └── images/             # Images
└── package.json
```

## 🎯 Industry Categories

The platform supports 8+ specialized modeling categories:

1. **High Fashion** - Runway, editorial, haute couture
2. **Corporate** - Business photography, executive portraits
3. **Hospitality** - Hotels, fine dining, luxury service
4. **E-commerce** - Product modeling, online retail
5. **Healthcare** - Medical facilities, wellness campaigns
6. **Real Estate** - Luxury properties, lifestyle photography
7. **Media/TV** - Commercials, film, brand ambassadors
8. **Automotive** - Luxury cars, promotional events

## 📊 Database Schema

Key models:
- **Model** - Model profiles with measurements, photos, and professional info
- **Photo** - Portfolio images for each model
- **Inquiry** - Client inquiries and booking requests
- **Admin** - Admin user authentication

## 🚀 Deployment

See the comprehensive [Deployment Guide](./deployment-guide.md) for detailed instructions on deploying to:
- Vercel (recommended for Next.js)
- Railway (easy full-stack deployment)
- Render (free PostgreSQL hosting)
- VPS (full control)

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/tri-models)

## 🔒 Environment Variables

Required for production:

```env
DATABASE_URL="postgresql://..."  # PostgreSQL connection string
NODE_ENV="production"
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🧪 Seeding Database

Populate database with sample models:

```bash
npx tsx prisma/seed-models.ts
```

This creates 44 diverse model profiles across all industry categories.

## 🎨 Customization

### Update Hero Image
Replace `/public/images/hero-background.png` with your custom image.

### Modify Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary-pink: #FF1493;
  --text-heading: #1a1a1a;
  /* ... */
}
```

### Add More Models
Use the admin bulk-add feature or modify `prisma/seed-models.ts`.

## 📄 License

Private project - All rights reserved.

## 👥 Contact

For questions or support regarding this platform, please contact [your-email@example.com](mailto:your-email@example.com).

---

**Built with ❤️ using Next.js and modern web technologies**
