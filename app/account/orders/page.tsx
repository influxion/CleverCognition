import { getCustomerWithRevalidate } from 'app/action';
import { redirect } from 'next/navigation';
import BackButton from '../../../components/global/back-button';

export default async function AccountOrdersPage() {
  const customer = await getCustomerWithRevalidate();

  if (!customer) return redirect('/account');

  console.log(customer.orders)
  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <BackButton href="/account">Account</BackButton>
      <h2 className="my-8 w-full text-center text-4xl">Your Orders</h2>
    </div>
  );
}
