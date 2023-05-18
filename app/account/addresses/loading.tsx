export default function Loading() {
    return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <h2 className="mb-8 w-full text-center text-4xl">Your Addresses</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="animate-pulse rounded bg-gray-100 dark:bg-gray-900 h-[162px]"></div>
        <div className="animate-pulse rounded bg-gray-100 dark:bg-gray-900 h-[162px]"></div>
        <div className="animate-pulse rounded bg-gray-100 dark:bg-gray-900 h-[162px]"></div>
        <div className="animate-pulse rounded bg-gray-100 dark:bg-gray-900 h-[162px]"></div>
        <div className="animate-pulse rounded bg-gray-100 dark:bg-gray-900 h-[162px]"></div>
      </div>
    </div>
  );
}