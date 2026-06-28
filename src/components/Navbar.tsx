import Image from "next/image";
import Link from "next/link";
import { categoryLinks, navLinks } from "../data/products";

export default function Navbar() {
  return (
    <nav className="relative z-30 hidden h-auto w-full rounded-b-[20px] bg-white px-10 py-2 sm:block">
      <ul className="flex flex-wrap items-center gap-6">
        <li className="group relative">
          <button
            type="button"
            className="flex items-center gap-2 py-2 text-black hover:text-brand-red"
          >
            <Image src="/icon/categories.svg" alt="" width={20} height={20} />
            دسته بندی محصولات
          </button>

          <ul className="invisible absolute right-0 top-full min-w-[180px] rounded-lg bg-white py-2 opacity-0 shadow-lg transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
            {categoryLinks.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  className="flex items-center gap-2 px-4 py-2 hover:text-brand-red"
                >
                  <Image src={cat.icon} alt="" width={25} height={25} />
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {navLinks.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <Image src={item.icon} alt="" width={18} height={18} />
            <Link href="#" className="text-black hover:text-brand-red">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
