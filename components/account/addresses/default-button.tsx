'use client';

import { useEffect, experimental_useOptimistic as useOptimistic } from 'react';
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from 'components/ui/tooltip';
import SubmitButton from 'components/global/submit-button';
import { Home } from 'lucide-react';
import { Input } from 'components/ui/input';
import { updateDefaultAddress } from './action';
import { Customer } from 'lib/shopify/types/customer';

export function DefaultAddressButton({ address, customer }: { address: any; customer: Customer }) {
  const [optimisticStatus, setOptimisticStatus] = useOptimistic(
    JSON.stringify(address) === JSON.stringify(customer.defaultAddress),
    (_, newState) => !!newState
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <form
            action={async (formData: FormData) => {
              setOptimisticStatus(!optimisticStatus);
              updateDefaultAddress(formData);
            }}
          >
            <Input name="id" className="hidden" defaultValue={address.id} />
            <SubmitButton
              disabled={optimisticStatus}
              className="w-10 rounded-full p-0"
              hideChild={true}
            >
              <Home className="h-4 w-4" />
            </SubmitButton>
          </form>
        </TooltipTrigger>
        <TooltipContent>
          <p>Set default address</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
