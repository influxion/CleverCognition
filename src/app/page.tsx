import { Carousel } from "@/components/carousel";
import { ThreeItemGrid } from "@/components/grid/three-items";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  // openGraph: {
  //   images: [
  //     {
  //       url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
  //       width: 1200,
  //       height: 630
  //     }
  //   ],
  //   type: 'website'
  // }
};

export default async function HomePage() {
  return (
    <>
      {/* Add System*/}
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Carousel />
      </Suspense>
    </>
  );
}
