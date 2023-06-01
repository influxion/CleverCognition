'use server';
import CartButton from './button';
import { getCartWithCustomer } from './action';

export default async function Cart() {
  const { cart, cartIdUpdated } = await getCartWithCustomer();

  return <CartButton cart={cart} cartIdUpdated={cartIdUpdated} />;
}
