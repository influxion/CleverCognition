'use server';

import { createCustomer } from 'lib/shopify';

export async function signUp(formData: FormData) {
  try {
    const customer = await createCustomer({
      firstName: (formData.get('firstname') as string) || null,
      lastName: (formData.get('lastname') as string) || null,
      email: formData.get('new-email') as string,
      password: formData.get('new-password') as string,
      phone: (formData.get('phone-number') as string) || null,
      acceptsMarketing: !!formData.get('accepts-marketing')
    });
    if (customer) {
      return { data: true, error: null, redirect: '/account' };
    } else {
      return { data: null, error: true };
    }
  } catch (e) {
    console.log(e);
    return { data: null, error: true };
  }
}
