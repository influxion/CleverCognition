'use server';

import { getCustomerSafe, linkCustomerToCart } from 'app/action';
import { createCart, getCart } from 'lib/shopify';
import { getCookie } from 'utils/cookie';

export async function getCartWithCustomer() {
  const cartId = getCookie('cartId');
  const customer = await getCustomerSafe();
  let cart;
  let cartIdUpdated = false;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartIdUpdated = true;
  }

  if (customer) {
    await linkCustomerToCart(customer);
  }

  return { cart, cartIdUpdated };
}
