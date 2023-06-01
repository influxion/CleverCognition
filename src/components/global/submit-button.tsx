'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { ClipLoader } from 'react-spinners';

export default function SubmitButton({
  children,
  className,
  hideChild,
  disabled,
  varient,
  success,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  hideChild?: boolean;
  success?: boolean;
  disabled?: boolean;
  varient?: 'destructive' | 'secondary' | 'outline' | 'ghost' | 'link';
  props?: any;
}) {
  const { pending } = useFormStatus();
  const [checked, setCheck] = useState(false);

  useEffect(() => {
    if (success) {
      setCheck(true);
      setTimeout(() => {
        setCheck(false);
      }, 5000);
    }
  }, [success]);

  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      variant={varient || undefined}
      className={cn(
        className,
        'relative flex items-center justify-center gap-2'
      )}
      {...props}
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}{' '}
      {(pending && hideChild) || checked ? null : children}
      <CheckCircle
        className={cn(
          checked ? 'animate-carousel animate-fadeIn' : 'opacity-0',
          'absolute right-1/2 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 duration-200'
        )}
      />
    </Button>
  );
}
