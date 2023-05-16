import AccountSignIn from 'components/account/sign-in/index';
import { getCustomerWithRevalidate, linkCustomerToCart } from 'app/action';
import AccountView from 'components/account/view';

export default async function AccountPage() {
  const customer = await getCustomerWithRevalidate();

  if (!customer) return <AccountSignIn />;

  await linkCustomerToCart(customer);

  return <AccountView customer={customer} />;
}
