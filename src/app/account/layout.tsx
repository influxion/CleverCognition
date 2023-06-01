"use client";
import { ReactNode, useEffect, startTransition } from "react";
import "../globals.css";
import { usePathname, useRouter } from "next/navigation";

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    startTransition(() => router.refresh());
  }, [pathname]);

  return <>{children}</>;
}
