import { getCustomerWithRevalidate } from '@/app/action';
import { redirect } from 'next/navigation';
import BackButton from '@/components/global/back-button';
import { deleteAddress, updateAddress } from './action';
import SubmitButton from '@/components/global/submit-button';
import { Input } from '@/components/ui/input';
import { Home, Trash2 } from 'lucide-react';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { DefaultAddressButton } from '@/components/account/addresses/default-button';
import { Suspense } from 'react';
import AccountUpdateAddressForm from '@/components/account/addresses/account-update-address-form';

export default async function EditAddressPage({
  params: { addressNumber },
}: {
  params: { addressNumber: string };
}) {
  const customer = await getCustomerWithRevalidate();

  const address = customer.addresses[+addressNumber];

  if (!address) return redirect('/account/addresses');

  return (
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
                  <Input
                    name="id"
                    className="hidden"
                    defaultValue={address.id}
                  />
                  <SubmitButton
                    className="w-10 rounded-full p-0"
                    hideChild={true}
                  >
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
      <AccountUpdateAddressForm
        address={address}
        addressNumber={addressNumber}
      />
    </div>
  );
}
