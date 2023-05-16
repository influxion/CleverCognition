'use server';

import { createAccessToken } from 'lib/shopify';
import { revalidatePath } from 'next/cache';
import { setCookie } from 'utils/cookie';

export async function signIn(formData: FormData) {
  try {
    const { accessToken, expiresAt } = await createAccessToken({
      email: formData.get('email') as string,
      password: formData.get('password') as string
    });

    setCookie('accessToken', accessToken);
    setCookie('expiresAt', expiresAt.toString());

    revalidatePath('/account');
  } catch (e) {
    console.log(e);
  }
}
