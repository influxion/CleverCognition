import Link from 'next/link';
import { getAuthedStatus } from 'app/action';
import { redirect } from 'next/navigation';
import SignInForm from '../../../components/account/sign-in/sign-in-form';

export default async function SignInPage() {
  const authed = await getAuthedStatus();
  if (authed) redirect('/account');

  return (
    <>
      <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl flex-col md:flex-row">
        {/* @ts-expect-error */}
        <SignInForm />
        <div className="flex w-full flex-col items-center justify-center gap-12 p-4 py-12 md:p-12">
          <h5 className="text-center text-4xl">Not a user?</h5>
          <Link
            href="/account/sign-up"
            className="w-full rounded border border-gray-200 py-2 text-center hover:outline hover:outline-1 focus:outline focus:outline-1"
          >
            Create an account
          </Link>
        </div>
      </div>
    </>
  );
}
