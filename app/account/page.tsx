import Button from 'components/global/button';
import Input from 'components/global/input';
import Footer from 'components/layout/footer';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function AccountPage() {
  return (
    <>
      <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl">
        <form className="flex w-1/2 flex-col justify-center gap-4 border-r p-12">
          <h3 className="mb-8 text-center text-4xl">Sign In</h3>

          <Input type="email" name="email" placeholder="Email" />
          <div className="w-full">
            <Input type="password" name="password" placeholder="Password" className="w-full" />
            <Link href="/reset-password" className="mt-1 block text-sm font-medium">
              Forgot password?
            </Link>
          </div>

          <Button className="mt-8" type="submit">
            Sign In
          </Button>
        </form>
        <div className="flex w-1/2 flex-col items-center justify-center gap-12 p-12">
          <h5 className="text-center text-4xl">Not a user?</h5>
          <Link
            href="/sign-up"
            className="w-full rounded border border-gray-200 py-2 text-center hover:outline hover:outline-1 focus:outline focus:outline-1"
          >
            Create an account
          </Link>
        </div>
      </div>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </Suspense>
    </>
  );
}
