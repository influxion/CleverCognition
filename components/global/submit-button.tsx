'use client';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { ClipLoader } from 'react-spinners';

export default function SubmitButton({
  children,
  className,
  hideChild,
  disabled,
  varient,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  hideChild?: boolean;
  disabled?: boolean;
  varient?: 'destructive' | 'secondary' | 'outline' | 'ghost' | 'link';
  props?: any;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      variant={varient || undefined}
      className={cn(className, 'flex items-center justify-center gap-2')}
      {...props}
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}{' '}
      {pending && hideChild ? null : children}
    </Button>
  );
}
