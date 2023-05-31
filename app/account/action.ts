'use server';
import { getAccessToken } from 'app/action';
import { customerUpdate, deleteAccessToken, updateBuyerIdentity } from 'lib/shopify';
import { revalidatePath } from 'next/cache';
import { getCookie, setCookie } from 'utils/cookie';

export async function signOut() {
  const accessToken = await getAccessToken();
  setCookie('accessToken', '');
  setCookie('expiresAt', '');
  try {
    await deleteAccessToken(accessToken || '');
    await unlinkCustomerFromCart();

    revalidatePath('/account');
  } catch (e) {
    console.log(e);
  }
}

export async function unlinkCustomerFromCart() {
  let cartId = getCookie('cartId')!;

  if (!cartId) return;
  await updateBuyerIdentity({
    cartId,
    buyerIdentity: {
      countryCode: undefined,
      customerAccessToken: undefined,
      deliveryAddressPreferences: [
        {
          customerAddressId: undefined,
          deliveryAddress: {
            address1: undefined,
            address2: undefined,
            city: undefined,
            company: undefined,
            country: 'CA',
            firstName: undefined,
            lastName: undefined,
            phone: undefined,
            province: undefined,
            zip: undefined
          }
        }
      ],
      email: undefined,
      phone: undefined
    }
  });
}

export async function updateAccount(formData: FormData) {
  const accessToken = await getAccessToken();
  try {
    const ok = await customerUpdate({
      customer: {
        firstName: formData.get('first-name') as string,
        lastName: formData.get('last-name') as string,
        email: formData.get('email') as string,
        acceptsMarketing: !!formData.get('accepts-marketing')
      },
      customerAccessToken: accessToken || ''
    });

    if (ok) {
      revalidatePath('/account');
    }
  } catch (e) {
    console.log(e);
  }
}

export async function updateAccountPassword(formData: FormData) {
  const accessToken = await getAccessToken();
  try {
    const ok = await customerUpdate({
      customer: {
        password: formData.get('password') ? (formData.get('password') as string) : undefined
      },
      customerAccessToken: accessToken || ''
    });

    if (ok) {
      revalidatePath('/account');
    }
  } catch (e) {
    console.log(e);
  }
}
