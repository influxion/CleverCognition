import Button from 'components/global/button';
import Input from 'components/global/input';
import Link from 'next/link';
import { signIn } from './action';

export default function AccountSignIn() {
  return (
    <>
      <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl flex-col md:flex-row">
        <form
          action={signIn}
          className="flex w-full flex-col justify-center gap-4 border-b p-4 py-12 md:border-b-0 md:border-r md:p-12"
        >
          <h3 className="mb-8 text-center text-4xl">Sign In</h3>

          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" className="w-full" />
          <div className="w-full">
            <Link href="/reset-password" className="mt-1 block text-sm font-medium">
              Forgot password?
            </Link>
          </div>

          <Button className="mt-8" type="submit">
            Sign In
          </Button>
        </form>
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
