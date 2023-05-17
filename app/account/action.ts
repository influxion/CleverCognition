'use server';
import { getAccessToken } from 'app/action';
import { deleteAccessToken } from 'lib/shopify';
import { revalidatePath } from 'next/cache';
import { setCookie } from 'utils/cookie';

export async function signOut() {
  const accessToken = await getAccessToken();
  setCookie('accessToken', '');
  setCookie('expiresAt', '');
  try {
    await deleteAccessToken(accessToken || '');

    revalidatePath('/account');
  } catch (e) {
    console.log(e);
  }
}
