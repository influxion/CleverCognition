import { createCustomer } from 'lib/shopify';
import { isShopifyError } from 'lib/type-guards';
import { NextRequest, NextResponse } from 'next/server';
import { formatErrorMessage } from 'utils/format-error-message';

export async function POST(req: NextRequest): Promise<Response> {
  const { firstName, lastName, email, phone, password, confirmPassword, acceptsMarketing } =
    await req.json();

  if (!email) NextResponse.json({ error: 'Email is required' }, { status: 400 });
  if (!password) NextResponse.json({ error: 'Password is required' }, { status: 400 });
  if (password !== confirmPassword)
    NextResponse.json({ error: 'Passwords must match' }, { status: 400 });

  try {
    const customer = await createCustomer({
      firstName: firstName || null,
      lastName: lastName || null,
      email,
      phone: phone || null,
      password,
      acceptsMarketing
    });
    console.log(customer);
    return NextResponse.json({ customer }, { status: 201 });
  } catch (e: any) {
    if (isShopifyError(e)) {
      return NextResponse.json({ message: formatErrorMessage(e.message) }, { status: e.status });
    }
    if (e?.error?.message) {
      return NextResponse.json({ message: e.error.message }, { status: 500 });
    }
    return NextResponse.json({ status: 500 });
  }
}
