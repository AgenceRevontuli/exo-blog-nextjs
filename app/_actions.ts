'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from './lib/prismadb'

export async function formSubmit(formData: FormData) {
    await prisma.posts.create({
        data:{
            title: formData.get('title') as string, 
            content: formData.get('content') as string
        }
    })
}