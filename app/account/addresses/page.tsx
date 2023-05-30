import { getCustomerWithRevalidate } from 'app/action';
import BackButton from 'components/global/back-button';
import RevalidateLink from 'components/global/revalidate-link';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export default async function AccountAddressesPage() {
  const customer = await getCustomerWithRevalidate();

  if (!customer) return redirect('/account');

  return (
    <Suspense>
      <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
        <BackButton href="/account">Account</BackButton>

        <h2 className="my-8 w-full text-center text-4xl">Your Addresses</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {customer.addresses.length
            ? customer.addresses.map((address, i) => (
                <RevalidateLink
                  href={`/account/addresses/${i}`}
                  className="relative flex flex-col gap-1 rounded border p-6 outline-1 hover:outline focus:outline"
                >
                  <h3 className="text-xl font-bold">{address.name}</h3>
                  {JSON.stringify(address) === JSON.stringify(customer.defaultAddress) ? (
                    <div className="absolute right-6 top-6  rounded-full bg-black px-2 py-1 text-xs font-bold uppercase text-white dark:bg-white dark:text-black">
                      Default
                    </div>
                  ) : null}
                  {address.address1 ? <p>{address.address1}</p> : null}
                  {address.address2 ? <p>{address.address2}</p> : null}
                  {address.zip ? <p>{address.zip}</p> : null}
                  {address.formattedArea ? <p>{address.formattedArea}</p> : null}
                </RevalidateLink>
              ))
            : null}
          <Link
            href="/account/addresses/add"
            className="relative flex flex-col items-center justify-center gap-2 rounded border p-6 outline-1 hover:outline focus:outline"
          >
            <h3 className="text-xl font-bold">Add New Address</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
