export default function Loading() {
  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <div className="h-[42px] w-[121px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      <h2 className="mb-8 w-full text-center text-4xl">Add Address</h2>
      <div className="flex w-full flex-col gap-4">
        <div className="h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      </div>
      <div className="mt-8 h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
    </div>
  );
}
