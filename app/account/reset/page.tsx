import Input from 'components/global/input';
import Button from 'components/global/button';
import { resetPassword } from './action';

export default async function AccountResetPage() {
  return (
    <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl justify-center">
      <form
        action={resetPassword}
        className="flex w-full flex-col justify-center gap-4 p-4 py-12 md:w-1/2 md:p-12"
      >
        <h3 className="mb-8 text-center text-4xl">Reset Password</h3>

        <Input type="email" name="email" placeholder="Email *" required />
        <Button className="mt-8" type="submit">
          Send Reset Email
        </Button>
      </form>
    </div>
  );
}
