'use client';
import { Input } from 'components/ui/input';
import { useRef } from 'react';

export default function PhoneInput() {
  const phoneRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input ref={phoneRef} />
    </>
  );
}
