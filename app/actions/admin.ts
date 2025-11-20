'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function approveModel(modelId: string) {
    await prisma.model.update({
        where: { id: modelId },
        data: { status: 'ACTIVE' }
    })
    revalidatePath('/admin/dashboard')
}

export async function rejectModel(modelId: string) {
    await prisma.model.update({
        where: { id: modelId },
        data: { status: 'REJECTED' }
    })
    revalidatePath('/admin/dashboard')
}

export async function deleteModel(modelId: string) {
    await prisma.model.delete({
        where: { id: modelId }
    })
    revalidatePath('/admin/dashboard')
}

export async function toggleFeatured(modelId: string, currentStatus: boolean) {
    await prisma.model.update({
        where: { id: modelId },
        data: { featured: !currentStatus }
    })
    revalidatePath('/admin/dashboard')
}

export async function bulkAddModel(formData: FormData) {
    const data = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        dateOfBirth: new Date(formData.get('dateOfBirth') as string),
        gender: formData.get('gender') as string,
        city: formData.get('city') as string,
        country: formData.get('country') as string,
        height: parseFloat(formData.get('height') as string),
        categories: formData.get('categories') as string || '["Fashion"]',
        status: 'ACTIVE', // Bulk added models are automatically active
    }

    const photos = [
        { url: formData.get('photo1') as string, isPrimary: true, orderNumber: 0 },
        { url: formData.get('photo2') as string, isPrimary: false, orderNumber: 1 },
        { url: formData.get('photo3') as string, isPrimary: false, orderNumber: 2 },
        { url: formData.get('photo4') as string, isPrimary: false, orderNumber: 3 },
        { url: formData.get('photo5') as string, isPrimary: false, orderNumber: 4 },
    ].filter(p => p.url && p.url.trim() !== '')

    await prisma.model.create({
        data: {
            ...data,
            photos: {
                create: photos.map(p => ({
                    url: p.url,
                    type: 'PORTFOLIO',
                    isPrimary: p.isPrimary,
                    orderNumber: p.orderNumber,
                }))
            }
        }
    })

    revalidatePath('/admin/dashboard')
    revalidatePath('/admin/bulk-add')
}
