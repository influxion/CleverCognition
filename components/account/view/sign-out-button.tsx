'use server';
import { signOut } from 'app/account/action';

export default async function SignOutButton() {
  return (
    <form action={signOut}>
      <button>Sign out</button>
    </form>
  );
}
