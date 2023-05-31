import CaretLeftIcon from 'components/icons/caret-left';
import Link from 'next/link';
import { Button } from 'components/ui/button';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function BackButton({
  href,
  children,
  noRevalidate
}: {
  href: string;
  children: React.ReactNode;
  noRevalidate?: boolean;
}) {
  async function action() {
    'use server';
    revalidatePath(href);
    redirect(href);
  }
  if (noRevalidate)
    return (
      <Link href={href}>
        <Button className="flex w-fit items-center pl-2" type="submit">
          <CaretLeftIcon className="h-6" />
          {children}
        </Button>
      </Link>
    );
  return (
    <form action={action}>
      <Button className="flex w-fit items-center pl-2" type="submit">
        <CaretLeftIcon className="h-6" />
        {children}
      </Button>
    </form>
  );
}
