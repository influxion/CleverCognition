import { getCookie } from '@/utils/cookie';

export default function Loading() {
  const accessToken = getCookie('accessToken');

  if (!accessToken) {
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
  return (
    <div className="m-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
      <h2 className="mb-8 w-full text-center text-4xl">Your Account</h2>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="flex w-full flex-col gap-4 lg:w-2/3">
          <div className="flex gap-4">
            <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
            <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
          </div>
          <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
          <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
          <div className="mt-2 h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
          <div className="animate-pulse rounded border"></div>
          <div className="flex w-full flex-col gap-4 rounded-md border p-4">
            <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
            <div className="h-[40px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
            <div className="h-[16px] w-full animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 lg:w-1/3">
          <div className="h-[494px] animate-pulse rounded bg-gray-100 dark:bg-gray-900"></div>
        </div>
      </div>
    </div>
  );
}
