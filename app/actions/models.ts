'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type ModelFilter = {
    gender?: string;
    minAge?: number;
    maxAge?: number;
    minHeight?: number;
    maxHeight?: number;
    category?: string;
    hairColor?: string;
    eyeColor?: string;
    experience?: string;
    city?: string;
    search?: string;
    page?: number;
    limit?: number;
};

export async function getModels(filter: ModelFilter = {}) {
    const {
        gender,
        minAge,
        maxAge,
        minHeight,
        maxHeight,
        category,
        hairColor,
        eyeColor,
        experience,
        city,
        search,
        page = 1,
        limit = 20,
    } = filter;

    const where: any = {
        // status: 'ACTIVE',
    };

    if (gender && gender !== 'All') {
        where.gender = gender;
    }

    if (minAge || maxAge) {
        const now = new Date();
        where.dateOfBirth = {};
        if (minAge) {
            const maxBirthDate = new Date(now.getFullYear() - minAge, now.getMonth(), now.getDate());
            where.dateOfBirth.lte = maxBirthDate;
        }
        if (maxAge) {
            const minBirthDate = new Date(now.getFullYear() - maxAge - 1, now.getMonth(), now.getDate());
            where.dateOfBirth.gte = minBirthDate;
        }
    }

    if (minHeight) {
        where.height = { gte: minHeight };
    }

    if (maxHeight) {
        where.height = { ...where.height, lte: maxHeight };
    }

    if (category && category !== 'All') {
        where.categories = { contains: category };
    }

    if (hairColor && hairColor !== 'All') {
        where.hairColor = { contains: hairColor };
    }

    if (eyeColor && eyeColor !== 'All') {
        where.eyeColor = { contains: eyeColor };
    }

    if (experience && experience !== 'All') {
        where.experienceLevel = experience;
    }

    if (city) {
        where.city = { contains: city };
    }

    if (search) {
        where.OR = [
            { firstName: { contains: search } },
            { lastName: { contains: search } },
            { city: { contains: search } },
        ];
    }

    const skip = (page - 1) * limit;

    const [models, total] = await Promise.all([
        prisma.model.findMany({
            where,
            include: {
                photos: {
                    where: { isPrimary: true },
                    take: 1,
                },
            },
            skip,
            take: limit,
            orderBy: { featured: 'desc' }, // Featured first
        }),
        prisma.model.count({ where }),
    ]);

    return {
        models,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
    };
}

export async function getModelById(id: string) {
    return await prisma.model.findUnique({
        where: { id },
        include: {
            photos: {
                orderBy: { orderNumber: 'asc' },
            },
        },
    });
}

export async function getFeaturedModels() {
    return await prisma.model.findMany({
        where: {
            // status: 'ACTIVE',
            // featured: true,
        },
        include: {
            photos: {
                where: { isPrimary: true },
                take: 1,
            },
        },
        take: 8,
    });
}

export async function createModelApplication(data: any) {
    try {
        // Basic validation could go here

        const model = await prisma.model.create({
            data: {
                ...data,
                status: 'PENDING',
                categories: JSON.stringify(data.categories), // Ensure categories are stringified
            },
        });
        return { success: true, modelId: model.id };
    } catch (error) {
        console.error('Error creating application:', error);
        return { success: false, error: 'Failed to submit application' };
    }
}
