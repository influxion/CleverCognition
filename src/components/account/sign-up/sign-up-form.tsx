'use client';
import { Input } from '@/components/ui/input';
import { signUp } from '../../../app/account/sign-up/action';
import SubmitButton from '@/components/global/submit-button';
import { Form, useFormStatus } from '@/components/global/form';

export default async function SignUpForm() {
  const { data, error, setter } = useFormStatus();
  return (
    /* @ts-expect-error */
    <Form
      action={signUp}
      setter={setter}
      className="flex w-full flex-col justify-center gap-4 p-4 py-12 md:w-1/2 md:p-12"
    >
      <h3 className="mb-8 text-center text-4xl">Sign Up</h3>

      <div className="flex w-full gap-4">
        <Input
          name="first-name"
          placeholder="First Name (Optional)"
          className="w-full"
        />
        <Input
          name="last-name"
          placeholder="Last Name (Optional)"
          className="w-full"
        />
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
      {/* <Input type="tel" name="phone-number" placeholder="Phone Number (Optional)" /> */}
      <label className="flex items-center gap-2">
        <input type="checkbox" name="accepts-marketing" className="h-4 w-4" />
        <p>Recieve marketing messages (Optional)</p>
      </label>
      <SubmitButton className="mt-8" success={!!data}>
        Sign Up
      </SubmitButton>
    </Form>
  );
}
