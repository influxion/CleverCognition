"use client";

import { AlertCircle, FileWarning, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function NotificationCenter() {
  const [toggle, setToggle] = useState(false);
  const [cookies] = useCookies(["token", "cardId"]);

  return toggle ? (
    <div className="absolute right-1/2 top-4 m-auto w-screen translate-x-1/2 px-4 md:max-w-xl">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  ) : null;
}
