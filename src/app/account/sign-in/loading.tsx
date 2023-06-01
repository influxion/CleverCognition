export default function Loading() {
  return (
    <div className="mx-auto my-20 flex min-h-[50vh] max-w-7xl flex-col md:flex-row">
      <div className="flex w-full flex-col justify-center gap-4 border-b p-4 py-12 md:border-b-0 md:border-r md:p-12">
        <h3 className="mb-8 text-center text-4xl">Sign In</h3>

        <div className="h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        <div className="w-full">
          <div className="h-[20px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        </div>

        <div className="mt-8 h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-12 p-4 py-12 md:p-12">
        <h5 className="text-center text-4xl">Not a user?</h5>
        <div className="h-[42px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
      </div>
    </div>
  );
}
