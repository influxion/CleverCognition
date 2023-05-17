import { getCustomerWithRevalidate } from 'app/action';
import BackToAccountButton from 'components/account/back-to-account-button';
import { redirect } from 'next/navigation';

export default async function AccountAddressesPage() {
  const customer = await getCustomerWithRevalidate();

  if (!customer) return redirect('/account');

  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center py-16 px-4">
      <BackToAccountButton />
      <h2 className="my-8 w-full text-center text-4xl">Your Addresses</h2>
    </div>
  );
}
