import { getCustomerWithRevalidate } from 'app/action';
import { redirect } from 'next/navigation';
import BackButton from 'components/global/back-button';
import { deleteAddress, updateAddress } from './action';
import SubmitButton from 'components/global/submit-button';
import { Input } from 'components/ui/input';
import { Home, Trash2 } from 'lucide-react';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from 'components/ui/tooltip';
import { DefaultAddressButton } from 'components/account/addresses/default-button';
import { Suspense } from 'react';

export default async function EditAddressPage({
  params: { addressNumber }
}: {
  params: { addressNumber: string };
}) {
  const customer = await getCustomerWithRevalidate();

  if (!customer) return redirect('/account');

  const address = customer.addresses[+addressNumber];

  if (!address) return redirect('/account/addresses');

  return (
    <Suspense>
      <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
        <BackButton href="/account/addresses">Addresses</BackButton>

        <div className="relative">
          <h2 className="my-8 w-full text-center text-4xl">Edit Address</h2>
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 gap-4">
            <DefaultAddressButton address={address} customer={customer} />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <form action={deleteAddress}>
                    <Input name="id" className="hidden" defaultValue={address.id} />
                    <SubmitButton className="w-10 rounded-full p-0" hideChild={true}>
                      <Trash2 className="h-4 w-4" />
                    </SubmitButton>
                  </form>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete address</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <form action={updateAddress} className="flex w-full flex-col gap-4">
          <Input name="id" className="hidden" defaultValue={address.id} />
          <Input name="address-number" className="hidden" defaultValue={addressNumber} />
          <div className="flex w-full gap-4">
            <Input
              name="first-name"
              placeholder="First Name"
              className="w-full"
              defaultValue={address.firstName}
            />
            <Input
              name="last-name"
              placeholder="Last Name"
              className="w-full"
              defaultValue={address.lastName}
            />
            <Input
              name="company"
              placeholder="Company"
              className="w-full"
              defaultValue={address.company}
            />
            <Input
              name="phone"
              placeholder="Phone Number"
              className="w-full"
              defaultValue={address.phone}
            />
          </div>
          <div className="flex w-full gap-4">
            <Input
              name="address1"
              placeholder="Address 1"
              className="w-full"
              defaultValue={address.address1}
            />
            <Input
              name="address2"
              placeholder="Address 2"
              className="w-full"
              defaultValue={address.address2}
            />
            <Input
              name="zip"
              placeholder="Zip / Postal Code"
              className="w-full"
              defaultValue={address.zip}
            />
          </div>
          <div className="flex w-full gap-4">
            <Input name="city" placeholder="City" className="w-full" defaultValue={address.city} />
            <Input
              name="province"
              placeholder="Province / State"
              className="w-full"
              defaultValue={address.province}
            />
            <Input
              name="country"
              placeholder="Country"
              className="w-full"
              defaultValue={address.country}
            />
          </div>
          <SubmitButton className="mt-8">Save</SubmitButton>
        </form>
      </div>
    </Suspense>
  );
}
