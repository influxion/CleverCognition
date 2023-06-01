import { Customer } from '@/lib/shopify/types/customer';
import AccountUpdateForm from './account-update-form';
import AccountPasswordForm from './account-password-form';

export default function AccountDetails({ customer }: { customer: Customer }) {
  return (
    <div className="lg:w-2/3">
      <AccountUpdateForm customer={customer} />
      <div className="my-4 rounded border"></div>
      <AccountPasswordForm />
    </div>
  );
}
