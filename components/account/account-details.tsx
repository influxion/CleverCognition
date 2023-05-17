import Button from 'components/global/button';
import Input from 'components/global/input';
import { Customer } from 'lib/shopify/types/customer';

export default function AccountDetails({ customer }: { customer: Customer }) {
  return (
    <form className="flex w-full flex-col gap-4 lg:w-2/3">
      <div className="flex w-full gap-4">
        <Input
          className="w-full"
          placeholder="First Name"
          name="first-name"
          defaultValue={customer.firstName}
        />
        <Input
          className="w-full"
          placeholder="Last Name"
          name="last-name"
          defaultValue={customer.lastName}
        />
      </div>
      <Input placeholder="Email" name="email" defaultValue={customer.email} />
      {/* <Input placeholder="Phone Number" name="phone" defaultValue={customer.phone} /> */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4"
          name="accepts-marketing"
          defaultChecked={customer.acceptsMarketing ? true : false}
        />
        <p>Recieve marketing messages (Optional)</p>
      </label>
      <Button className="mt-8" type="submit">
        Save
      </Button>
    </form>
  );
}
