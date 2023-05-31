'use server';

import { deleteAccessToken, getCustomer, renewAccessToken, updateBuyerIdentity } from 'lib/shopify';
import { Customer } from 'lib/shopify/types/customer';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { deleteCookie, getCookie, setCookie } from 'utils/cookie';

export async function getAccessToken() {
  let accessToken = getCookie('accessToken');
  const expiresAt = getCookie('expiresAt');

  if (!accessToken || !expiresAt) return;

  if (expiresAt ? new Date(expiresAt) < new Date() : false) {
    accessToken = await refreshToken(accessToken);
  }

  return accessToken;
}

export async function getCustomerWithRevalidate({
  accessToken,
  path
}: {
  accessToken?: string;
  path?: string;
} = {}) {
  if (!accessToken) {
    accessToken = await getAccessToken();
  }

  if (!accessToken) redirect('/account/sign-in');

  const customer = await getCustomer(accessToken);

  if (!customer) {
    await signOut();
    redirect('/account/sign-in');
  }

  if (path) {
    revalidatePath(path);
  }

  return customer;
}

export async function getCustomerSafe({ accessToken }: { accessToken?: string } = {}) {
  if (!accessToken) {
    accessToken = await getAccessToken();
  }
  if (!accessToken) return null;
  return await getCustomer(accessToken);
}

export async function getAuthedStatus() {
  const accessToken = await getAccessToken();
  if (!accessToken) return false;
  const customer = await getCustomer(accessToken);
  if (!customer) return false;
  return true;
}

export async function signOut() {
  const accessToken = await getAccessToken();
  deleteCookie('accessToken');
  deleteCookie('expiresAt');
  try {
    await deleteAccessToken(accessToken || '');
    await unlinkCustomerFromCart();
  } catch (e) {
    console.log(e);
  }
  redirect('/account/sign-in');
}

export async function linkCustomerToCart(customer: Customer, cartId: string = '') {
  if (!cartId) {
    cartId = getCookie('cartId')!;
  }
  if (!cartId) return;
  const accessToken = await getAccessToken();
  await updateBuyerIdentity({
    cartId,
    buyerIdentity: {
      email: customer.email,
      customerAccessToken: accessToken,
      phone: customer.phone,
      countryCode: customer.defaultAddress?.countryCodeV2
    }
  });
}

export async function unlinkCustomerFromCart() {
  let cartId = getCookie('cartId')!;

  if (!cartId) return;
  await updateBuyerIdentity({
    cartId,
    buyerIdentity: {
      countryCode: undefined,
      customerAccessToken: undefined,
      deliveryAddressPreferences: [
        {
          customerAddressId: undefined,
          deliveryAddress: {
            address1: undefined,
            address2: undefined,
            city: undefined,
            company: undefined,
            country: 'CA',
            firstName: undefined,
            lastName: undefined,
            phone: undefined,
            province: undefined,
            zip: undefined
          }
        }
      ],
      email: undefined,
      phone: undefined
    }
  });
}

export async function refreshToken(customerAccessToken: string) {
  try {
    const { accessToken, expiresAt } = await renewAccessToken(customerAccessToken);

    setCookie('accessToken', accessToken);
    setCookie('expiresAt', expiresAt.toString());

    revalidatePath('/account');
    return accessToken;
  } catch (e) {
    console.log(e);
  }
}

export async function redirectAction(href: string) {
  redirect(href);
}