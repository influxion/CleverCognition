export default function Loading() {
  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <h2 className="mb-8 w-full text-center text-4xl">Your Account</h2>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="h-[230px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900 lg:w-2/3"></div>
        <div className="flex w-full flex-col gap-4 lg:w-1/3">
          <div className="h-[494px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        </div>
      </div>
    </div>
  );
}
