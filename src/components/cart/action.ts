"use server";

import { getCustomerSafe, linkCustomerToCart } from "@/app/action";
import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from "@/lib/shopify";
import { getCookie } from "@/utils/cookie";

export async function getCartWithCustomer() {
  const cartId = getCookie("cartId");
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

export async function removeItem(lineId: string, cartId: string) {
  await removeFromCart(cartId, [lineId]);
}

export async function updateItem(
  lineId: string,
  variantId: string,
  cartId: string,
  quantity: number
) {
  if (quantity > 0) {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ]);
  } else {
    await removeFromCart(cartId, [lineId]);
  }
}

export async function addItem(merchandiseId: string, cartId: string) {
  return await addToCart(cartId, [{ merchandiseId, quantity: 1 }]);
}
