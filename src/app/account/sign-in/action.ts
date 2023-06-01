"use server";

import { getCustomerWithRevalidate, linkCustomerToCart } from "@/app/action";
import { createAccessToken } from "@/lib/shopify";
import { setCookie } from "@/utils/cookie";

export async function signIn(formData: FormData) {
  try {
    const { accessToken, expiresAt } = await createAccessToken({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    const customer = await getCustomerWithRevalidate({ accessToken });

    if (customer) {
      await linkCustomerToCart(customer);
    }

    setCookie("accessToken", accessToken);
    setCookie("expiresAt", expiresAt.toString());

    if (customer) {
      return { data: true, error: null, redirect: "/account" };
    } else {
      return { data: null, error: true };
    }
  } catch (e) {
    console.log(e);
    return { data: null, error: true };
  }
}
