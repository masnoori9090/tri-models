'use server'

import { redirect } from 'next/navigation'

export async function submitClientRegistration(formData: FormData) {
    const clientData = {
        companyName: formData.get('companyName') as string,
        tradeLicense: formData.get('tradeLicense') as string,
        industry: formData.get('industry') as string,
        contactPerson: formData.get('contactPerson') as string,
        position: formData.get('position') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        address: formData.get('address') as string,
        licenseUrl: formData.get('licenseUrl') as string,
        message: formData.get('message') as string,
    }

    // TODO: Store in database (will need Client model in Prisma schema)
    console.log('Client registration:', clientData)

    // For now, just redirect with success message
    redirect('/?client_registered=true')
}
