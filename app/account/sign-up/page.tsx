import Button from 'components/global/button';
import Input from 'components/global/input';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import { signUp } from './action';

export default async function SignUpPage() {
  return (
    <>
      <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl justify-center">
        <form action={signUp} className="flex w-1/2 flex-col justify-center gap-4 p-12">
          <h3 className="mb-8 text-center text-4xl">Sign Up</h3>

          <div className="flex w-full gap-4">
            <Input name="firstname" placeholder="First Name (Optional)" className="w-1/2" />
            <Input name="lastname" placeholder="Last Name (Optional)" className="w-1/2" />
          </div>
          <Input type="email" name="new-email" placeholder="Email *" required />
          <Input
            type="password"
            name="new-password"
            required
            minLength={5}
            min={5}
            placeholder="Password *"
            autoComplete="new-password"
          />
          <Input
            type="password"
            name="confirm-new-password"
            required
            minLength={5}
            min={5}
            placeholder="Confirm Password *"
            autoComplete="new-password"
          />
          <Input type="tel" name="phone-number" placeholder="Phone Number (Optional)" />
          <label className="flex items-center gap-2">
            <input type="checkbox" name="accepts-marketing" className="h-4 w-4" />
            <p>Recieve marketing messages (Optional)</p>
          </label>
          <Button className="mt-8" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </Suspense>
    </>
  );
}
