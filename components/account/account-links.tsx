import RevalidateLink from 'components/global/revalidate-link';
import { Customer } from 'lib/shopify/types/customer';
import Link from 'next/link';

export default function AccountLinks({
  customer,
  children
}: {
  customer: Customer;
  children: any;
}) {
  return (
    <div className="flex w-full flex-col gap-4 lg:w-1/3">
      <AccountOrdersLink customer={customer} />
      <AccountAddressesLink customer={customer} />
      {children}
    </div>
  );
}

export function AccountOrdersLink({ customer }: { customer: Customer }) {
  return customer.numberOfOrders > 0 ? (
    <RevalidateLink
      href="/account/orders"
      className="flex flex-col gap-4 rounded border p-6 outline-1 hover:outline focus:outline"
    >
      <h4 className="text-xl font-bold ">Orders</h4>
      <p>View and manage your orders.</p>
      {customer.numberOfOrders ? (
        <p className="font-bold">
          You have {customer.numberOfOrders} order
          {customer.numberOfOrders == 1 ? '' : 's'}.
        </p>
      ) : null}
    </RevalidateLink>
  ) : (
    <div className="flex flex-col gap-4 rounded border p-6 outline-1 hover:outline focus:outline">
      <h4 className="text-xl font-bold ">Orders</h4>
      <p>View and manage your orders.</p>
      {customer.numberOfOrders ? (
        <p className="font-bold">
          You have {customer.numberOfOrders} order
          {customer.numberOfOrders == 1 ? '' : 's'}.
        </p>
      ) : null}
    </div>
  );
}

export function AccountAddressesLink({ customer }: { customer: Customer }) {
  return (
    <RevalidateLink
      href="/account/addresses"
      className="flex flex-col gap-4 rounded border p-6 outline-1 hover:outline focus:outline"
    >
      <h4 className="text-xl font-bold ">Addresses</h4>
      <p>Manage your addresses.</p>
      {customer.defaultAddress ? (
        <div className="flex flex-col">
          <p className="mb-2 font-bold">Default Address:</p>
          {customer.defaultAddress.name ? <p>{customer.defaultAddress.name}</p> : null}
          {customer.defaultAddress.address1 ? <p>{customer.defaultAddress.address1}</p> : null}
          {customer.defaultAddress.address2 ? <p>{customer.defaultAddress.address2}</p> : null}
          {customer.defaultAddress.zip ? <p>{customer.defaultAddress.zip}</p> : null}
          {customer.defaultAddress.formattedArea ? (
            <p>{customer.defaultAddress.formattedArea}</p>
          ) : null}
        </div>
      ) : null}
    </RevalidateLink>
  );
}
