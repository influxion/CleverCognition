import { getCustomerWithRevalidate } from 'app/action';
import { redirect } from 'next/navigation';
import BackButton from 'components/global/back-button';
import { createAddress } from './action';
import { Input } from 'components/ui/input';
import SubmitButton from 'components/global/submit-button';
import { Suspense } from 'react';

export default async function AddAddressPage() {
  const customer = await getCustomerWithRevalidate();

  if (!customer) return redirect('/account');
  return (
    <Suspense>
      <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
        <BackButton href="/account/addresses" noRevalidate={true}>
          Addresses
        </BackButton>

        <h2 className="my-8 w-full text-center text-4xl">Add Address</h2>
        <form action={createAddress} className="flex w-full flex-col gap-4">
          <div className="flex w-full gap-4">
            <Input name="first-name" placeholder="First Name" className="w-full" />
            <Input name="last-name" placeholder="Last Name" className="w-full" />
            <Input name="company" placeholder="Company" className="w-full" />
            <Input name="phone" placeholder="Phone Number" className="w-full" />
          </div>
          <div className="flex w-full gap-4">
            <Input name="address1" placeholder="Address 1" className="w-full" />
            <Input name="address2" placeholder="Address 2" className="w-full" />
            <Input name="zip" placeholder="Zip / Postal Code" className="w-full" />
          </div>
          <div className="flex w-full gap-4">
            <Input name="city" placeholder="City" className="w-full" />
            <Input name="province" placeholder="Province / State" className="w-full" />
            <Input name="country" placeholder="Country" className="w-full" />
          </div>
          <SubmitButton className="mt-8">Add</SubmitButton>
        </form>
      </div>
    </Suspense>
  );
}
