// API route to seed database - visit once after deployment
// URL: https://your-site.railway.app/api/seed-once

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Import seed data
const models = [
    // Copy all model data from seed-models.ts here
    // This will be populated
]

export async function GET() {
    try {
        // Check if already seeded
        const count = await prisma.model.count()

        if (count > 0) {
            return NextResponse.json({
                message: 'Database already seeded',
                modelCount: count
            })
        }

        // Seed database
        console.log('Starting seed...')

        for (const modelData of models) {
            const birthYear = new Date().getFullYear() - modelData.age

            await prisma.model.create({
                data: {
                    firstName: modelData.firstName,
                    lastName: modelData.lastName,
                    email: `${modelData.firstName.toLowerCase()}.${modelData.lastName.toLowerCase()}@example.com`,
                    phone: `+971 50 ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 9000 + 1000)}`,
                    dateOfBirth: new Date(birthYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28 + 1)),
                    gender: modelData.gender,
                    city: 'Dubai',
                    country: 'UAE',
                    height: modelData.height,
                    weight: modelData.weight,
                    bustChest: modelData.bustChest,
                    waist: modelData.waist,
                    hips: modelData.hips,
                    shoeSize: modelData.shoeSize,
                    hairColor: modelData.hairColor,
                    eyeColor: modelData.eyeColor,
                    experienceLevel: modelData.experienceLevel,
                    yearsExperience: modelData.yearsExperience,
                    categories: JSON.stringify([modelData.category]),
                    specialSkills: modelData.specialSkills,
                    instagram: `https://instagram.com/${modelData.firstName.toLowerCase()}_${modelData.lastName.toLowerCase()}`,
                    status: 'ACTIVE',
                    featured: true,
                    photos: {
                        create: [{
                            url: modelData.image,
                            type: 'PORTFOLIO',
                            isPrimary: true,
                            orderNumber: 0
                        }]
                    }
                }
            })
        }

        const finalCount = await prisma.model.count()

        return NextResponse.json({
            success: true,
            message: 'Database seeded successfully!',
            modelsCreated: finalCount
        })

    } catch (error) {
        console.error('Seed error:', error)
        return NextResponse.json({
            error: 'Failed to seed database',
            details: error.message
        }, { status: 500 })
    }
}
