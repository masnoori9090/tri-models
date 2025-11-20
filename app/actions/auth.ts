'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    // TODO: In a real app, verify against the Admin table in DB
    // For this demo, we'll use a hardcoded check
    if (username === 'admin' && password === 'admin123') {
        const cookieStore = await cookies()
        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        })
        redirect('/admin/dashboard')
    } else {
        // Redirect back to login with error param
        redirect('/admin/login?error=invalid')
    }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
    redirect('/admin/login')
}
