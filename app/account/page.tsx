import AccountSignIn from 'components/account/sign-in';
import { signOut, refreshToken, validateToken } from './action';
import { getCookie } from 'utils/cookie';

export default async function AccountPage() {
  const accessToken = getCookie('accessToken');
  const expiresAt = getCookie('expiresAt');

  if (!accessToken) return <AccountSignIn />;

  if (expiresAt ? new Date(expiresAt) < new Date() : false) {
    await refreshToken(accessToken);
  }

  const customer = await validateToken(accessToken);

  return (
    <div>
      {JSON.stringify(customer)}
      <form action={signOut}>
        <input
          type="text"
          defaultValue={accessToken}
          className="hidden"
          name="customerAccessToken"
        />
        <button type="submit">Log Out</button>
      </form>
    </div>
  );
}
