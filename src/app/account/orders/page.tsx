import { getCustomerWithRevalidate } from '@/app/action';
import BackButton from '../../../components/global/back-button';

export default async function AccountOrdersPage() {
  const customer = await getCustomerWithRevalidate();

  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <BackButton href="/account" noRevalidate>
        Account
      </BackButton>
      <h2 className="my-8 w-full text-center text-4xl">Your Orders</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {customer.orders.length > 0
          ? customer.orders.map((order, i) => (
              <div className="relative flex flex-col gap-1 rounded border p-6 outline-1">
                <h3 className="text-xl font-bold">Order: {order.name}</h3>

                <p>
                  {new Date(order.processedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </p>
                <p>${(+order.totalPrice.amount).toFixed(2)}</p>
                <p>
                  {order.financialStatus} | {order.fulfillmentStatus}
                </p>
                <a className="underline" href={order.statusUrl}>
                  View Order Status
                </a>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
