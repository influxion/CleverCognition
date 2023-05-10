'use client';
import SignIn from 'components/account/sign-in';
import SignUp from 'components/account/sign-up';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default async function AccountPage() {
  return (
    <>
      <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl">
        <SignIn />

        <SignUp />
      </div>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </Suspense>
    </>
  );
}
