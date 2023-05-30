'use server';

import { getAccessToken } from "app/action";
import { customerDefaultAddressUpdate } from "lib/shopify";
import { revalidatePath } from "next/cache";

export async function updateDefaultAddress(formData: FormData) {
    try {
      const accessToken = await getAccessToken();
      await customerDefaultAddressUpdate({
        customerAccessToken: accessToken || '',
        addressId: formData.get('id') as string
      });
    } catch (e: any) {
      return new Error(e[0]);
    }
    revalidatePath(`/account/addresses`);
  }