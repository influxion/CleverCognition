'use server';

import { getCustomer, renewAccessToken, updateBuyerIdentity } from 'lib/shopify';
import { Customer } from 'lib/shopify/types/customer';
import { revalidatePath } from 'next/cache';
import { getCookie, setCookie } from 'utils/cookie';

export async function getAccessToken() {
  const accessToken = getCookie('accessToken');
  const expiresAt = getCookie('expiresAt');

  if (!accessToken || !expiresAt) return undefined;

  if (expiresAt ? new Date(expiresAt) < new Date() : false) {
    await refreshToken(accessToken);
    return undefined;
  }

  return accessToken;
}

export async function getCustomerWithRevalidate() {
  const accessToken = await getAccessToken();

  if (!accessToken) return;

  const customer = await getCustomer(accessToken);

  return customer;
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
