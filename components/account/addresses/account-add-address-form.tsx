'use client';
import { createAddress } from 'app/account/addresses/add/action';
import { Form, useFormStatus } from 'components/global/form';
import SubmitButton from 'components/global/submit-button';
import { Input } from 'components/ui/input';

export default function AccountAddAddressForm() {
  const { data, error, setter } = useFormStatus();
  return (
    // @ts-expect-error
    <Form action={createAddress} setter={setter} className="flex w-full flex-col gap-4">
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
      <SubmitButton className="mt-8" success={!!data}>
        Add
      </SubmitButton>
    </Form>
  );
}
