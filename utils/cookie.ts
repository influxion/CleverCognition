import { cookies } from 'next/headers';

export function getCookie(name: string) {
  const cookie = cookies().get(name);

  return cookie?.value;
}

export function deleteCookie(name: string) {
  return cookies().delete(name);
}

export function setCookie(name: string, value: string) {
  return cookies().set(name, value, {
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true
  });
}
