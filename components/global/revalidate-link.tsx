import { cn } from 'lib/utils';
import { revalidatePath } from 'next/cache';
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
  async function action() {
    'use server';
    revalidatePath(href);
    redirect(href);
  }
  return (
    <form action={action} className="w-full">
      <button type="submit" className={cn(className, 'w-full text-left')}>
        {children}
      </button>
    </form>
  );
}
