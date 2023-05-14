'use server';

import { createCustomer } from 'lib/shopify';
import { redirect } from 'next/navigation';

export async function signUp(formData: FormData) {
  try {
    await createCustomer({
      firstName: (formData.get('firstname') as string) || null,
      lastName: (formData.get('lastname') as string) || null,
      email: formData.get('new-email') as string,
      password: formData.get('new-password') as string,
      phone: (formData.get('phone-number') as string) || null,
      acceptsMarketing: !!formData.get('accepts-marketing')
    });
  } catch (e: any) {
    return new Error(e[0].message);
  }
  redirect('/account');
}
