# Quick Start: Deploy Tri Models to Railway

**Easiest deployment method - works with your current SQLite database!**

## Why Railway?
- ✅ Supports SQLite or PostgreSQL
- ✅ $5 free credit per month
- ✅ Automatic deployments from GitHub
- ✅ Simple setup (5 minutes)

---

## Step-by-Step Guide

### 1. Push to GitHub (5 minutes)

```bash
# Navigate to project
cd /Users/mohammadmansoori/Documents/SAAS/tri-models

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Tri Models website"

# Create GitHub repo at: https://github.com/new
# Name it: tri-models
# Set to Private
# Don't initialize with README

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/tri-models.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy to Railway (3 minutes)

1. **Go to [railway.app](https://railway.app)**

2. **Sign up with GitHub**

3. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `tri-models` repository

4. **Railway will auto-detect Next.js**
   - No configuration needed!
   - Click "Deploy"

5. **Wait for deployment** (1-2 minutes)
   - Railway will build and deploy automatically

### 3. Setup Database & Environment

**Option A: Keep SQLite (Simpler)**

1. In Railway dashboard, go to your service
2. Click "Settings" → "Volumes"
3. Add new volume:
   - Mount path: `/app`
   - Size: 1GB

**Option B: Use PostgreSQL (Recommended for Production)**

1. In Railway project, click "+ New"
2. Select "Database" → "PostgreSQL"
3. Railway automatically sets `DATABASE_URL`
4. Update Prisma schema:

```prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

5. Commit and push:
```bash
git add prisma/schema.prisma
git commit -m "Switch to PostgreSQL"
git push
```

### 4. Run Database Setup

1. **In Railway dashboard:**
   - Go to your web service
   - Click "Settings" tab
   - Scroll to "Deploy Triggers"
   - Click "Redeploy"

2. **After deployment, run migrations:**
   - In Railway dashboard, click your service
   - Go to "Settings" → "Environment"
   - Add custom start command (if needed for migrations)

### 5. Get Your Live URL

1. In Railway dashboard, click your service
2. Go to "Settings" → "Networking"
3. Click "Generate Domain"
4. Your site is live! 🎉

Example URL: `https://tri-models-production.up.railway.app`

---

## Post-Deployment

### Seed the Database

You can run the seed script via Railway CLI:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to project
railway link

# Run seed
railway run npx tsx prisma/seed-models.ts
```

### Add Custom Domain (Optional)

1. Railway Settings → Custom Domain
2. Add your domain
3. Update DNS records as shown

---

## Troubleshooting

**Build fails?**
- Check Railway logs in dashboard
- Ensure all dependencies in package.json

**Database connection error?**
- If using PostgreSQL, check DATABASE_URL in Environment Variables
- If using SQLite, ensure volume is mounted correctly

**Site loads but models don't show?**
- Run database migrations: `railway run npx prisma migrate deploy`
- Seed database: `railway run npx tsx prisma/seed-models.ts`

---

## Alternative: Vercel (If you prefer)

Vercel is faster for Next.js but requires PostgreSQL:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set up PostgreSQL at neon.tech (free)
# Add DATABASE_URL to Vercel environment variables
# Redeploy
vercel --prod
```

---

## Cost Estimate

**Railway:**
- Free tier: $5 credit/month
- Typical usage: $3-5/month
- Enough for small-medium traffic

**Vercel:**
- Free tier: Generous (perfect for most sites)
- Bandwidth: 100GB/month free
- Unlimited deployments

---

## Next Steps After Deployment

1. ✅ Test all pages and features
2. ✅ Add your custom domain
3. ✅ Seed production database
4. ✅ Test admin login
5. ✅ Update contact information
6. ✅ Add Google Analytics (optional)
7. ✅ Setup monitoring (Sentry, LogRocket)

---

**You're ready to deploy! Choose Railway for easiest setup, or Vercel for best Next.js performance.**

Need help? Check the full [Deployment Guide](./deployment-guide.md) or let me know!
