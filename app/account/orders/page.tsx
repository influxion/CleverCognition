import { getCustomerWithRevalidate } from 'app/action';
import { redirect } from 'next/navigation';
import BackToAccountButton from '../../../components/account/back-to-account-button';

export default async function AccountOrdersPage() {
  const customer = await getCustomerWithRevalidate();

  if (!customer) return redirect('/account');

  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center py-16 px-4">
      <BackToAccountButton />
      <h2 className="my-8 w-full text-center text-4xl">Your Orders</h2>
    </div>
  );
}
