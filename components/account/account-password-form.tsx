'use client';
import { Input } from 'components/ui/input';
import SubmitButton from 'components/global/submit-button';
import { Form, useFormStatus } from 'components/global/form';
import { updateAccountPassword } from 'app/account/action';

export default function AccountPasswordForm() {
  const { data, error, setter } = useFormStatus();
  return (
    // @ts-expect-error
    <Form action={updateAccountPassword} setter={setter} className="flex w-full flex-col gap-4 rounded-md border p-4">
        <Input
          className="w-full"
          placeholder="New Password"
          name="password"
          required
          defaultValue=""
        />
        <SubmitButton varient="destructive" className="w-full" success={!!data}>
          Change Password
        </SubmitButton>
        <p className="text-xs">Note: You will be logged out after changing your password.</p>
    </Form>
  );
}
