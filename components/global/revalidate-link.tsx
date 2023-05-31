'use client';
import { cn } from 'lib/utils';
import { useRouter } from 'next/navigation';
import { action } from './action';

export default function RevalidateLink({
  href,
  className,
  children
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <form
      action={async () => {
        await action(href);
        router.push(href);
      }}
      className="w-full"
    >
      <button type="submit" className={cn(className, 'w-full text-left')}>
        {children}
      </button>
    </form>
  );
}
