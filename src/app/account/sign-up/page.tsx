"use client";

import SignUpForm from "../../../components/account/sign-up/sign-up-form";

export default async function SignUpPage() {
  return (
    <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl justify-center">
      {/* @ts-expect-error */}
      <SignUpForm />
    </div>
  );
}
