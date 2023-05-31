'use client';
import { Input } from 'components/ui/input';
import Link from 'next/link';
import { signIn } from '../../../app/account/sign-in/action';
import SubmitButton from 'components/global/submit-button';
import { Form } from 'components/global/form';
import { useFormStatus } from '../../global/form';

export default async function SignInForm() {
  const { data, error, setter } = useFormStatus();
  return (
    /* @ts-expect-error */
    <Form
      setter={setter}
      action={signIn}
      className="flex w-full flex-col justify-center gap-4 border-b p-4 py-12 md:border-b-0 md:border-r md:p-12"
    >
      <h3 className="mb-8 text-center text-4xl">Sign In</h3>

      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" className="w-full" />
      <div className="w-full">
        <Link href="/account/reset" className="mt-1 block text-sm font-medium">
          Forgot password?
        </Link>
      </div>

      <SubmitButton success={!!data} className="mt-8">
        Sign In
      </SubmitButton>
    </Form>
  );
}
