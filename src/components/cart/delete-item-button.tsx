import CloseIcon from "@/components/icons/close";

import clsx from "clsx";
import type { Cart, CartItem } from "@/lib/shopify/types/cart";
import { removeItem } from "./action";
import SubmitButton from "../global/submit-button";
import { useRouter } from "next/navigation";

export default async function DeleteItemButton({
  item,
  cart,
}: {
  item: CartItem;
  cart: Cart;
}) {
  const router = useRouter();
  return (
    <form
      action={async () => {
        await removeItem(item.id, cart.id);
        router.refresh();
      }}
    >
      <SubmitButton
        hideChild
        aria-label="Remove cart item"
        className={clsx(
          "ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900"
        )}
      >
        <CloseIcon className="hover:text-accent-3 mx-[1px] h-4 w-4" />
      </SubmitButton>
    </form>
  );
}
