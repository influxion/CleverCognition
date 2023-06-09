export default function Loading() {
  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <div className="h-[40px] w-[121px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      <h2 className="my-8 w-full text-center text-4xl">Edit Address</h2>
      <div className="flex w-full flex-col gap-4">
        <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="mt-8 h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      </div>
    </div>
  );
}
