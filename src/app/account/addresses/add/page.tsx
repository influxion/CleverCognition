import { getCustomerWithRevalidate } from '@/app/action';
import BackButton from '@/components/global/back-button';
import AccountAddAddressForm from '@/components/account/addresses/account-add-address-form';

export default async function AddAddressPage() {
  await getCustomerWithRevalidate();

  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <BackButton href="/account/addresses" noRevalidate={true}>
        Addresses
      </BackButton>

      <h2 className="my-8 w-full text-center text-4xl">Add Address</h2>
      <AccountAddAddressForm />
    </div>
  );
}
