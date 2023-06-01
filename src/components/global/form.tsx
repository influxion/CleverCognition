"use client";

import { redirectAction } from "@/app/action";
import { Dispatch, SetStateAction, useState } from "react";
type FormState = {
  data: any;
  error: any;
};

export async function Form({
  action,
  className,
  children,
  setter,
}: {
  action: (
    formData: FormData
  ) => Promise<{ data: any; error: any; redirect?: string }>;
  className?: string;
  children: React.ReactNode;
  setter: Dispatch<SetStateAction<FormState>>;
}) {
  return (
    <form
      className={className}
      action={async (formData: FormData) => {
        //reset state
        setter({ data: null, error: null });

        const { data, error, redirect } = await action(formData);
        setter({ error, data });
        if (redirect) return await redirectAction(redirect);
      }}
    >
      {children}
    </form>
  );
}
export function useFormStatus() {
  const [state, setter] = useState<FormState>({ data: null, error: null });
  return {
    data: state.data,
    error: state.error,
    setter,
  };
}
