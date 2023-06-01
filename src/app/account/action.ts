"use server";
import { getAccessToken } from "@/app/action";
import { customerUpdate } from "@/lib/shopify";

export async function updateAccount(formData: FormData) {
  const accessToken = await getAccessToken();
  try {
    const ok = await customerUpdate({
      customer: {
        firstName: formData.get("first-name") as string,
        lastName: formData.get("last-name") as string,
        email: formData.get("email") as string,
        acceptsMarketing: !!formData.get("accepts-marketing"),
      },
      customerAccessToken: accessToken || "",
    });

    if (ok)
      return {
        data: true,
        error: null,
      };

    return {
      data: null,
      error: true,
    };
  } catch (e) {
    console.log(e);
    return {
      data: null,
      error: e,
    };
  }
}

export async function updateAccountPassword(formData: FormData) {
  const accessToken = await getAccessToken();
  try {
    const ok = await customerUpdate({
      customer: {
        password: formData.get("password")
          ? (formData.get("password") as string)
          : undefined,
      },
      customerAccessToken: accessToken || "",
    });

    if (ok)
      return {
        data: true,
        error: null,
        revalidate: "/account/sign-in",
      };

    return {
      data: null,
      error: true,
    };
  } catch (e) {
    console.log(e);
    return {
      data: null,
      error: e,
    };
  }
}
