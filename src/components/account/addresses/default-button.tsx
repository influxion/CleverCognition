"use client";

import { useState } from "react";
import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "@/components/ui/tooltip";
import SubmitButton from "@/components/global/submit-button";
import { Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Customer } from "@/lib/shopify/types/customer";
import { updateDefaultAddress } from "@/app/account/addresses/[addressNumber]/action";

export function DefaultAddressButton({
  address,
  customer,
}: {
  address: any;
  customer: Customer;
}) {
  const [optimisticState, setOptimisticState] = useState(
    JSON.stringify(address) === JSON.stringify(customer.defaultAddress)
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <form
            action={async (formData: FormData) => {
              setOptimisticState(!optimisticState);
              updateDefaultAddress(formData);
            }}
          >
            <Input name="id" className="hidden" defaultValue={address.id} />
            <SubmitButton
              disabled={optimisticState}
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
