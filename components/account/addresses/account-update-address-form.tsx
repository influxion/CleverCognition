'use client';
import { updateAddress } from 'app/account/addresses/[addressNumber]/action';
import { Form, useFormStatus } from 'components/global/form';
import SubmitButton from 'components/global/submit-button';
import { Input } from 'components/ui/input';

export default function AccountUpdateAddressForm({
  address,
  addressNumber
}: {
  address: any;
  addressNumber: any;
}) {
  const { data, error, setter } = useFormStatus();
  return (
    // @ts-expect-error
    <Form action={updateAddress} setter={setter} className="flex w-full flex-col gap-4">
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
      <SubmitButton className="mt-8" success={!!data}>
        Save
      </SubmitButton>
    </Form>
  );
}
