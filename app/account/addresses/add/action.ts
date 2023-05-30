'use server';
import { getAccessToken } from 'app/action';
import { customerAddressCreate } from 'lib/shopify';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createAddress(formData: FormData) {
  try {
    const accessToken = await getAccessToken();
    await customerAddressCreate({
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
    });
  } catch (e: any) {
    console.log(e);
    return new Error(e);
  }
  revalidatePath(`/account/addresses`);
  redirect('/account/addresses');
}
