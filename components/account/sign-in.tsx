import Button from "components/global/button";
import Input from "components/global/input";

export default function SignIn() {
function onSubmit(e: React.FormEvent<HTMLFormElement>) {

}
    return (<form onSubmit={onSubmit} className="flex w-1/2 flex-col justify-center gap-4 border-r p-12">
    <h3 className="mb-8 text-center text-4xl">Sign In</h3>

    <Input type="email" name="email" placeholder="Email" />
    <Input type="password" name="password" placeholder="Password" />

    <Button className="mt-8" type="submit">
      Sign In
    </Button>
  </form>)
}