#!/usr/bin/env node

// Simple script to seed Railway database
// Run with: node seed-production.js

const { PrismaClient } = require('@prisma/client')

// You'll need to get your DATABASE_URL from Railway
// Railway → tri-models → Variables → DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL || 'PASTE_YOUR_RAILWAY_DATABASE_URL_HERE'

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DATABASE_URL
        }
    }
})

async function main() {
    console.log('🌱 Starting to seed production database...')

    // Import and run your seed script
    const seed = require('./prisma/seed-models.ts')

    console.log('✅ Seeding complete!')
}

main()
    .catch((e) => {
        console.error('❌ Error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
