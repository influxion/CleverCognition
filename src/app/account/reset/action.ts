"use server";

import { customerRecover } from "@/lib/shopify";
import { redirect } from "next/navigation";

export async function resetPassword(formData: FormData) {
  const ok = await customerRecover(formData.get("email") as string);
  if (ok) {
    redirect("/account");
  }
}
