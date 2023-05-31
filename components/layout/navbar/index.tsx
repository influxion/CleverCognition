import Link from 'next/link';
import { Suspense } from 'react';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types/menu';
import MobileMenu from './mobile-menu';
import Search from './search';
import { getAuthedStatus } from 'app/action';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  const authed = await getAuthedStatus();

  return (
    <nav className="relative flex items-center justify-between gap-4 bg-white p-4 dark:bg-black lg:px-6">
      <div className="block md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex justify-self-center md:justify-self-start">
        <div className="md:mr-4">
          <Link href="/" aria-label="Go back home">
            <LogoIcon className="h-8 transition-transform hover:scale-110" />
          </Link>
        </div>
        {menu.length ? (
          <ul className="hidden md:flex">
            {menu.map((item: Menu) => (
              <li key={item.title} className="flex">
                <Link
                  href={item.path}
                  className="whitespace-nowrap rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="flex max-w-3xl gap-2 md:w-full">
        <div className="hidden w-full md:block">
          <Search />
        </div>

        <div className="flex w-full justify-end md:w-fit">
          <Suspense fallback={<CartIcon className="h-6" />}>
            {/* @ts-expect-error Server Component */}
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
