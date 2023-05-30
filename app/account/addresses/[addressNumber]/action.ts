'use server';
import { getAccessToken } from 'app/action';
import {
  customerAddressDelete,
  customerAddressUpdate,
  customerDefaultAddressUpdate
} from 'lib/shopify';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function updateAddress(formData: FormData) {
  try {
    const accessToken = await getAccessToken();
    await customerAddressUpdate({
      customerAccessToken: accessToken || '',
      address: {
        address1: formData.get('address1') as string,
        address2: formData.get('address2') as string,
        city: formData.get('city') as string,
        company: formData.get('company') as string,
        country: formData.get('country') as string,
        firstName: formData.get('first-name') as string,
        lastName: formData.get('last-name') as string,
        phone: formData.get('phone') as string,
        province: formData.get('province') as string,
        zip: formData.get('zip') as string
      },
      id: formData.get('id') as string
    });
  } catch (e: any) {
    return new Error(e[0]);
  }
  revalidatePath('/account/addresses');
  redirect('/account/addresses');
}

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
  redirect('/account/addresses');
}

export async function deleteAddress(formData: FormData) {
  try {
    const accessToken = await getAccessToken();
    await customerAddressDelete({
      customerAccessToken: accessToken || '',
      id: formData.get('id') as string
    });
  } catch (e: any) {
    return new Error(e);
  }
  revalidatePath(`/account/addresses`);
  redirect('/account/addresses');
}
