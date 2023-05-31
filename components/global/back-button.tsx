'use client';
import CaretLeftIcon from 'components/icons/caret-left';
import Link from 'next/link';
import { Button } from 'components/ui/button';
import { action } from './action';
import { useRouter } from 'next/navigation';

export default function BackButton({
  href,
  children,
  noRevalidate
}: {
  href: string;
  children: React.ReactNode;
  noRevalidate?: boolean;
}) {
  const router = useRouter();
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
        await action(href);
        router.push(href);
      }}
      className="w-full"
    >
      <Button className="flex w-fit items-center pl-2" type="submit">
        <CaretLeftIcon className="h-6" />
        {children}
      </Button>
    </form>
  );
}
