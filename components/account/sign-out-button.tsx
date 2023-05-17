'use server';
import { signOut } from 'app/account/action';
import Button from 'components/global/button';

export default async function SignOutButton() {
  return (
    <form action={signOut}>
      <Button type="submit">Sign out</Button>
    </form>
  );
}
