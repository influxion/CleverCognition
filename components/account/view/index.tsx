import { Customer } from 'lib/shopify/types/customer';
import SignOutButton from './sign-out-button';

export default function AccountView({ customer }: { customer: Customer }) {
  return (
    <>
      {JSON.stringify(customer)}
      {/* @ts-expect-error */}
      <SignOutButton />
    </>
  );
}
