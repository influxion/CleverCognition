"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { ProductVariant } from "@/lib/shopify/types/product";
import SubmitButton from "../global/submit-button";
import { addItem } from "../cart/action";

export function AddToCart({
  variants,
  availableForSale,
  cartId,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  cartId: string;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const variant = variants.find((variant: ProductVariant) =>
      variant.selectedOptions.every(
        (option) => option.value === searchParams.get(option.name.toLowerCase())
      )
    );

    if (variant) {
      setSelectedVariantId(variant.id);
    }
  }, [searchParams, variants, setSelectedVariantId]);

  return (
    <form
      action={async () => {
        if (!availableForSale) return;
        await addItem(selectedVariantId!, cartId);
        router.refresh();
      }}
    >
      <SubmitButton
        aria-label="Add item to cart"
        className={clsx(
          "flex w-full items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100 dark:bg-white dark:text-black",
          {
            "cursor-not-allowed opacity-60": !availableForSale,
          }
        )}
      >
        <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
      </SubmitButton>
    </form>
  );
}
