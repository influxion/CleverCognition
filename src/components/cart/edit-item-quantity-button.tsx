import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

import clsx from "clsx";
import MinusIcon from "@/components/icons/minus";
import PlusIcon from "@/components/icons/plus";
import type { Cart, CartItem } from "@/lib/shopify/types/cart";
import SubmitButton from "../global/submit-button";
import { updateItem } from "./action";

export default function EditItemQuantityButton({
  item,
  type,
  cart,
}: {
  item: CartItem;
  type: "plus" | "minus";
  cart: Cart;
}) {
  const router = useRouter();

  return (
    <form
      action={async () => {
        await updateItem(
          item.id,
          item.merchandise.id,
          cart.id,
          type === "plus" ? item.quantity + 1 : item.quantity - 1
        );
        router.refresh();
      }}
    >
      <SubmitButton
        aria-label={
          type === "plus" ? "Increase item quantity" : "Reduce item quantity"
        }
        hideChild
        className={clsx(
          "ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900",
          {
            "ml-auto": type === "minus",
          }
        )}
      >
        {type === "plus" ? (
          <PlusIcon className="h-4 w-4" />
        ) : (
          <MinusIcon className="h-4 w-4" />
        )}
      </SubmitButton>
    </form>
  );
}
