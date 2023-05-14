'use server';
import { deleteAccessToken, getCustomer, renewAccessToken } from 'lib/shopify';
import { revalidatePath } from 'next/cache';
import { setCookie } from 'utils/cookie';

export async function refreshToken(customerAccessToken: string) {
  try {
    const { accessToken, expiresAt } = await renewAccessToken(customerAccessToken);

    setCookie('accessToken', accessToken);
    setCookie('expiresAt', expiresAt.toString());

    revalidatePath('/account');
  } catch (e) {
    console.log(e);
  }
}

export async function validateToken(customerAccessToken: string) {
  try {
    const customer = await getCustomer(customerAccessToken);

    return customer;
  } catch (e) {
    setCookie('accessToken', '');
    setCookie('expiresAt', '');

    console.log(e);
  }
}

export async function signOut(formData: FormData) {
  const customerAccessToken = formData.get('customerAccessToken') as string;
  try {
    await deleteAccessToken(customerAccessToken);

    setCookie('accessToken', '');
    setCookie('expiresAt', '');

    revalidatePath('/account');
  } catch (e) {
    console.log(e);
  }
}
