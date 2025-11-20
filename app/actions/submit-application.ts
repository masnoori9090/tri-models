'use server'

import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export async function submitApplication(formData: FormData) {
    const name = formData.get('name') as string
    const [firstName, ...lastNameParts] = name.split(' ')
    const lastName = lastNameParts.join(' ') || firstName

    const age = parseInt(formData.get('age') as string)
    const currentYear = new Date().getFullYear()
    const birthYear = currentYear - age
    const dateOfBirth = new Date(birthYear, 0, 1)

    const whatsappCode = formData.get('whatsappCode') as string
    const whatsapp = formData.get('whatsapp') as string
    const callingCode = formData.get('callingCode') as string
    const calling = formData.get('calling') as string

    const rawFormData = {
        firstName,
        lastName,
        email: formData.get('email') as string || `${firstName.toLowerCase()}@temp.com`,
        phone: calling ? `${callingCode}${calling}` : `${whatsappCode}${whatsapp}`,
        dateOfBirth,
        gender: 'Female', // Default, can be updated later
        city: formData.get('location') as string,
        country: 'UAE',
        height: parseFloat(formData.get('height') as string) || 170,
        categories: JSON.stringify([formData.get('passion') as string]),
        instagram: formData.get('instagram') as string,
        portfolio: formData.get('portfolio') as string,
    }

    try {
        const newModel = await prisma.model.create({
            data: {
                firstName: rawFormData.firstName,
                lastName: rawFormData.lastName,
                email: rawFormData.email,
                phone: rawFormData.phone,
                dateOfBirth: rawFormData.dateOfBirth,
                gender: rawFormData.gender,
                city: rawFormData.city,
                country: rawFormData.country,
                height: rawFormData.height,
                categories: rawFormData.categories,
                instagram: rawFormData.instagram,
                status: 'PENDING',
                photos: rawFormData.portfolio ? {
                    create: [{
                        url: rawFormData.portfolio,
                        type: 'PORTFOLIO',
                        isPrimary: true,
                    }]
                } : undefined,
            },
        })

        console.log('Created model:', newModel.id)
    } catch (error) {
        console.error('Error creating model:', error)
        throw new Error('Failed to submit application')
    }

    redirect('/?submitted=true')
}
