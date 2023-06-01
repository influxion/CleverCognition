'use client';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import SearchIcon from '@/components/icons/search';
import { Input } from '@/components/ui/input';

export default function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  function onSubmit(e: any) {
    e.preventDefault();

    const search = inputRef.current;

    if (search && search.value) {
      router.push(`/search?q=${search.value}`);
    } else {
      router.push(`/search`);
    }
    if (search) {
      search.value = '';
      search.blur();
    }
    setSearchBarOpen(false);
  }

  function onClick() {
    if (searchBarOpen && inputRef?.current?.value) {
      onSubmit(new Event('submit', { bubbles: true, cancelable: true }));
    } else {
      setSearchBarOpen(!searchBarOpen);
      if (!searchBarOpen && inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative m-0 flex w-full items-center justify-end bg-transparent p-0"
    >
      <label
        htmlFor="search"
        className="relative flex h-full w-full items-center justify-start duration-200 md:justify-end"
      >
        <Input
          ref={inputRef}
          type="text"
          id="search"
          name="search"
          placeholder="Search for products..."
          autoComplete="off"
          className={`w-0 border-white pl-10 duration-200 placeholder:invisible dark:border-black md:pl-2 ${
            searchBarOpen ? '!w-full !border-gray-500 placeholder:!visible' : ''
          }`}
        />
        <button
          onClick={onClick}
          type="button"
          className="absolute left-0 mx-2 h-7 md:left-auto md:right-0"
        >
          <SearchIcon className="h-full w-full" />
        </button>
      </label>
    </form>
  );
}
