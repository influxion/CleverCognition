import CaretLeftIcon from 'components/icons/caret-left';
import Link from 'next/link';
import { Button } from 'components/ui/button';
import { redirectAction } from 'app/action';

export default function BackButton({
  href,
  children,
  noRevalidate
}: {
  href: string;
  children: React.ReactNode;
  noRevalidate?: boolean;
}) {
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
    <form
      action={async () => {
        'use server';
        await redirectAction(href);
      }}
    >
      <Button className="flex w-fit items-center pl-2" type="submit">
        <CaretLeftIcon className="h-6" />
        {children}
      </Button>
    </form>
  );
}
