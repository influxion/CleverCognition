import Button from 'components/global/button';
import Input from 'components/global/input';

export default function SignUp() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image')
    };

    const res = await fetch('/api/customer', {
      method: 'POST',
      body: JSON.stringify(body)
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <form onSubmit={onSubmit} className="flex w-1/2 flex-col justify-center gap-4 border-l p-12">
      <h3 className="mb-8 text-center text-4xl">Sign Up</h3>

      <div className="flex w-full gap-4">
        <Input name="firstname" placeholder="First Name" className="w-1/2" />
        <Input name="lastname" placeholder="Last Name" className="w-1/2" />
      </div>
      <Input type="email" name="new-email" placeholder="Email" />
      <Input
        type="password"
        name="new-password"
        placeholder="New Password"
        autoComplete="new-password"
      />
      <Input
        type="password"
        name="confirm-new-password"
        placeholder="Confirm New Password"
        autoComplete="new-password"
      />
      <Input type="tel" name="phone-number" placeholder="Phone Number" />

      <Button className="mt-8" type="submit">
        Sign Up
      </Button>
    </form>
  );
}
