import { updateAccount } from 'app/account/action';
import { Input } from 'components/ui/input';
import SubmitButton from 'components/global/submit-button';
import { Customer } from 'lib/shopify/types/customer';
import { updateAccountPassword } from '../../app/account/action';

export default function AccountDetails({ customer }: { customer: Customer }) {
  return (
    <div className="lg:w-2/3">
      <form action={updateAccount} className="flex w-full flex-col gap-4">
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
        <SubmitButton className="mt-2 w-full">Save</SubmitButton>
      </form>
      <div className="my-4 rounded border"></div>
      <form
        action={updateAccountPassword}
        className="flex w-full flex-col gap-4 rounded-md border p-4"
      >
        <Input
          className="w-full"
          placeholder="New Password"
          name="password"
          required
          defaultValue=""
        />
        <SubmitButton varient="destructive" className="w-full">
          Change Password
        </SubmitButton>
        <p className="text-xs">Note: You will be logged out after changing your password.</p>
      </form>
    </div>
  );
}
