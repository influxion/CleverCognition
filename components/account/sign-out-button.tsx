'use server';
import { signOut } from 'app/account/action';
import SubmitButton from 'components/global/submit-button';

export default async function SignOutButton() {
  return (
    <form action={signOut}>
      <SubmitButton>Sign out</SubmitButton>
    </form>
  );
}
