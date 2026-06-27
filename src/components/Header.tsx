"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartPanel from "./CartPanel";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="relative z-40 flex h-auto min-h-[70px] w-full flex-wrap items-center justify-between gap-3 bg-white px-4 py-3 sm:px-10">
      <div className="flex items-center gap-2">
        <Link href="/">
          <p className="font-logo text-2xl font-bold sm:text-3xl">
            <span className="text-brand-red">Pro</span>store.ir
          </p>
        </Link>
        <input
          type="search"
          placeholder="جستجو"
          aria-label="جستجو"
          className="hidden w-64 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-2 focus:outline-brand-red sm:block lg:w-96"
        />
      </div>

      <div className="hidden items-center gap-3 sm:flex">
        <Image
          src="/icon/icons8-account-100.png"
          alt=""
          width={25}
          height={25}
          className="h-[25px] w-[25px]"
        />
        <Link href="/login" className="text-black hover:text-brand-red">
          ورود
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/register" className="text-black hover:text-brand-red">
          ثبت نام
        </Link>

        <div className="relative">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-gray-400 px-3 py-2 text-xs text-gray-500 transition-colors duration-500 hover:bg-brand-red hover:text-white"
          >
            <Image
              src="/icon/icons8-shopping-cart-64.png"
              alt=""
              width={25}
              height={25}
              className="h-[25px] w-[25px]"
            />
            <span>سبد خرید</span>
          </button>

          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs text-white">
              {cartCount}
            </span>
          )}
        </div>
      </div>
      {/* when cart opens */}
      <CartPanel setCartOpen={setCartOpen} open={cartOpen} />
    </header>
  );
}
