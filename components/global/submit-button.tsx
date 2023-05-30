'use client';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import { useEffect, useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { ClipLoader } from 'react-spinners';

export default function SubmitButton({
  children,
  className,
  hideChild,
  disabled,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  hideChild?: boolean;
  disabled?: boolean;
  props?: any;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { pending } = useFormStatus();
  useEffect(() => {
    setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);
  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      className={cn(className, 'flex items-center justify-center gap-2')}
      {...props}
    >
      {pending ? (
        <ClipLoader
          loading={true}
          size={18}
          color={isDarkMode ? '#fff' : '#000'}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}{' '}
      {pending && hideChild ? null : children}
    </Button>
  );
}
