'use server';
import { cookies } from 'next/headers';

export const getCookie = async (name: string) => {
	const cookieStore = await cookies();
	const cookie = cookieStore.get(name);
	return cookie?.value;
};

export const setCookie = async (name: string, value: string) => {
	const cookieStore = await cookies();
	cookieStore.set(name, value);
};

export const deleteCookie = async (name: string) => {
	const cookieStore = await cookies();
	cookieStore.delete(name);
};
