import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded border border-gray-200 px-4 py-2 text-black duration-150 hover:outline hover:outline-1 dark:bg-black dark:text-gray-100 ${
        className || ''
      }`}
    >
      {props.children}
    </button>
  );
}
