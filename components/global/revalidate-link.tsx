import { redirectAction } from 'app/action';
import { cn } from 'lib/utils';
import { redirect } from 'next/navigation';

export default function RevalidateLink({
  href,
  className,
  children
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <form
      action={async () => {
        'use server';
        await redirectAction(href);
      }}
      className="w-full"
    >
      <button type="submit" className={cn(className, 'w-full text-left')}>
        {children}
      </button>
    </form>
  );
}
