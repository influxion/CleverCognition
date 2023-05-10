import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
  className?: string;
}

export default function Input({ className, inputRef, ...props }: InputProps) {
  return (
    <input
      ref={inputRef}
      {...props}
      className={`rounded border border-gray-200 px-4 py-2 text-black dark:bg-black dark:text-gray-100 ${
        className || ''
      }`}
    />
  );
}
