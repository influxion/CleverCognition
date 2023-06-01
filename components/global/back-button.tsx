'use client';
import CaretLeftIcon from 'components/icons/caret-left';
import Link from 'next/link';
import { Button } from 'components/ui/button';
import { redirectAction } from 'app/action';
import { useTransition } from 'react';

export default function BackButton({
  href,
  children,
  noRevalidate
}: {
  href: string;
  children: React.ReactNode;
  noRevalidate?: boolean;
}) {
  let [isPending, startTransition] = useTransition();
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
    <Button
      className="flex w-fit items-center pl-2"
      onClick={() => startTransition(() => redirectAction(href))}
    >
      <CaretLeftIcon className="h-6" />
      {children}
    </Button>
  );
}
