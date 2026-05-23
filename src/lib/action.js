'use server'
import { revalidatePath } from 'next/cache'

export async function refreshData(path) {

  revalidatePath(path)
}