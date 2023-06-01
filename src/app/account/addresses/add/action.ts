"use server";
import { getAccessToken } from "@/app/action";
import { customerAddressCreate } from "@/lib/shopify";

export async function createAddress(formData: FormData) {
  try {
    const accessToken = await getAccessToken();
    const ok = await customerAddressCreate({
      customerAccessToken: accessToken || "",
      address: {
        address1: formData.get("address1") as string,
        address2: formData.get("address2") as string,
        city: formData.get("city") as string,
        company: formData.get("company") as string,
        country: formData.get("country") as string,
        firstName: formData.get("first-name") as string,
        lastName: formData.get("last-name") as string,
        phone: formData.get("phone") as string,
        province: formData.get("province") as string,
        zip: formData.get("zip") as string,
      },
    });
    if (ok)
      return {
        data: true,
        error: null,
        redirect: "/account/addresses",
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
