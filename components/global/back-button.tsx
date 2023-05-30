import CaretLeftIcon from 'components/icons/caret-left';
import Link from 'next/link';
import { Button } from 'components/ui/button';

export default function BackButton({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button className="w-fit pl-2" type="button">
      <Link href={href} className="flex items-center">
        <CaretLeftIcon className="h-6" />
        {children}
      </Link>
    </Button>
  );
}
