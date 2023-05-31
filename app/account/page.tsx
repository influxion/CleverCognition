import { getCustomerWithRevalidate } from 'app/action';
import AccountDetails from '../../components/account/account-details';
import AccountLinks from 'components/account/account-links';
import SignOutButton from 'components/account/sign-out-button';
import { Suspense } from 'react';

export default async function AccountPage() {
  const customer = await getCustomerWithRevalidate();

  return (
    <Suspense>
      <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
        <h2 className="mb-8 w-full text-center text-4xl">Your Account</h2>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <AccountDetails customer={customer} />
          <AccountLinks customer={customer}>
            {/* @ts-expect-error Server Component */}
            <SignOutButton />
          </AccountLinks>
        </div>
      </div>
    </Suspense>
  );
}
