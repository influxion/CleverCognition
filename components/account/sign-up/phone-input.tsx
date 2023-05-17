'use client';
import Input from 'components/global/input';
import { useRef } from 'react';

export default function PhoneInput() {
  const phoneRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input inputref={phoneRef} />
    </>
  );
}
