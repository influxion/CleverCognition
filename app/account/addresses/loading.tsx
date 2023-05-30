export default function Loading() {
  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <div className="h-[42px] w-[121px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      <h2 className="mb-8 w-full text-center text-4xl">Your Addresses</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="h-[162px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="h-[162px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="h-[162px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      </div>
    </div>
  );
}
