"use server";
import { getAccessToken } from "app/action";
import { customerUpdate, deleteAccessToken } from "lib/shopify";
import { revalidatePath } from "next/cache";
import { setCookie } from "utils/cookie";

export async function signOut() {
  const accessToken = await getAccessToken();
  setCookie("accessToken", "");
  setCookie("expiresAt", "");
  try {
    await deleteAccessToken(accessToken || "");

    revalidatePath("/account");
  } catch (e) {
    console.log(e);
  }
}

export async function updateAccount(formData: FormData) {
  const accessToken = await getAccessToken();
  try {
    const ok = await customerUpdate({
      customer: {
        firstName: formData.get("first-name") as string,
        lastName: formData.get("last-name") as string,
        email: formData.get("email") as string,
        acceptsMarketing: !!formData.get('accepts-marketing')
      },
      customerAccessToken: accessToken || "",
    });

    if (ok) {
      revalidatePath("/account");
    }
  } catch (e) {
    console.log(e);
  }

}
