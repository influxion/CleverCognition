'use client';
import { updateAccount } from '@/app/account/action';
import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/global/submit-button';
import { Customer } from '@/lib/shopify/types/customer';
import { Form, useFormStatus } from '@/components/global/form';

export default function AccountUpdateForm({
  customer,
}: {
  customer: Customer;
}) {
  const { data, error, setter } = useFormStatus();
  return (
    // @ts-expect-error
    <Form
      action={updateAccount}
      setter={setter}
      className="flex w-full flex-col gap-4"
    >
      <div className="flex w-full gap-4">
        <Input
          className="w-full"
          placeholder="First Name"
          name="first-name"
          required
          defaultValue={customer.firstName}
        />
        <Input
          className="w-full"
          placeholder="Last Name"
          name="last-name"
          required
          defaultValue={customer.lastName}
        />
      </div>
      <Input
        placeholder="Email"
        type="email"
        required
        name="email"
        defaultValue={customer.email}
      />
      {/* <Input placeholder="Phone Number" name="phone" defaultValue={customer.phone} /> */}
      <label className="flex h-[40px] items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4"
          name="accepts-marketing"
          defaultChecked={customer.acceptsMarketing ? true : false}
        />
        <p>Recieve marketing messages (Optional)</p>
      </label>
      <SubmitButton className="mt-2 w-full" success={!!data}>
        Save
      </SubmitButton>
    </Form>
  );
}
