import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputref?: any;
  className?: string;
}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      ref={props?.inputref || null}
      {...props}
      className={`rounded border border-gray-200 px-4 py-2 text-black dark:bg-black dark:text-gray-100 ${
        props?.className || ''
      }`}
    />
  );
}
