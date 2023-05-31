'use server';
import { revalidatePath } from 'next/cache';
export async function action(href: string) {
  revalidatePath(href);
  console.log('revlalidatePath');
}
