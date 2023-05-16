'use server';
import { getAccessToken } from 'app/action';
import { deleteAccessToken } from 'lib/shopify';
import { revalidatePath } from 'next/cache';
import { setCookie } from 'utils/cookie';

export async function signOut() {
  const accessToken = await getAccessToken();
  try {
    await deleteAccessToken(accessToken || '');

    setCookie('accessToken', '');
    setCookie('expiresAt', '');

    revalidatePath('/account');
  } catch (e) {
    console.log(e);
  }
}
