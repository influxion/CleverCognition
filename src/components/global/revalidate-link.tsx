"use client";
import { redirectAction } from "@/app/action";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function RevalidateLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    // <button
    //   className={cn(className, 'w-full text-left')}
    //   onClick={() => startTransition(() => redirectAction(href))}
    // >
    //   {children}
    // </button>
    <Link href={href} className={cn(className, "w-full text-left")}>
      {children}
    </Link>
  );
}
