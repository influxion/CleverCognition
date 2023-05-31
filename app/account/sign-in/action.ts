'use server';

import { getCustomerWithRevalidate, linkCustomerToCart } from 'app/action';
import { createAccessToken } from 'lib/shopify';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { setCookie } from 'utils/cookie';

export async function signIn(formData: FormData) {
  try {
    const { accessToken, expiresAt } = await createAccessToken({
      email: formData.get('email') as string,
      password: formData.get('password') as string
    });

    const customer = await getCustomerWithRevalidate({ accessToken });

    if (customer) {
      await linkCustomerToCart(customer);
    }

    setCookie('accessToken', accessToken);
    setCookie('expiresAt', expiresAt.toString());
  } catch (e) {
    console.log(e);
  }
  redirect('/account');
}
