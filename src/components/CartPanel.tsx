"use client";

import { useRef, useEffect } from "react";

interface CartPanelProps {
  open: boolean;
  setCartOpen: (open: boolean) => void;
}

export default function CartPanel({ open, setCartOpen }: CartPanelProps) {
  const clickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target as Node)
      ) {
        setCartOpen(false);
      }
    };

    if (open) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [open, setCartOpen]);

  if (!open) return null;

  return (
    <div
      ref={clickRef}
      className="absolute left-8 top-20 z-50 max-h-[600px] w-[400px] overflow-auto rounded-2xl bg-white p-3 shadow-lg"
    >
      <p className="text-center font-bold">سبد خرید</p>
      <ul className="mt-2 divide-y divide-gray-200">
        <li className="flex items-center justify-center py-10 text-sm text-gray-400">
          سبد خرید شما خالی است
        </li>
      </ul>
    </div>
  );
}
