import { createCart, getCart } from 'lib/shopify';
import CartButton from './button';
import { getCookie } from 'utils/cookie';

export default async function Cart() {
  const cartId = getCookie('cartId');

  let cartIdUpdated = false;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  // If the `cartId` from the cookie is not set or the cart is empty
  // (old carts becomes `null` when you checkout), then get a new `cartId`
  //  and re-fetch the cart.
  if (!cartId || !cart) {
    cart = await createCart();
    cartIdUpdated = true;
  }

  return <CartButton cart={cart} cartIdUpdated={cartIdUpdated} />;
}
