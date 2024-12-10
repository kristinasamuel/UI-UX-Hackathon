"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex flex-row items-center justify-center w-full h-[100px] bg-[#FFFFFF] overflow-hidden">
      <div className="flex items-center justify-between w-full max-w-[1286px] mx-auto px-4">
        <div className="flex items-center">
          <Image
            src={"/images/logo.png"}
            alt="Maubel House"
            width={50}
            height={32}
          />
          <p className="font-bold text-[34px]  text-black font-Montserrat ml-2">
            Furniro
          </p>
        </div>
        {/* Menu icon  */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <FiMenu className="h-[28px] w-[28px]" />
          </button>
        </div>
           {/* Quick links */}
        <ul className="hidden sm:flex flex-row items-center font-Poppins font-medium text-[16px] space-x-8">
          <Link href={"/"}> <li>Home </li> </Link> 
           <Link href={"shop"}><li>Shop</li> </Link>
           <Link href={"blog"}><li>Blog</li> </Link>
          <Link href={"contact"}> <li>Contact</li></Link>
        </ul>

        <div className="hidden sm:flex flex-row items-center gap-6">
          <Image
            src={"/images/Vector (4).png"}
            alt="logo"
            width={28}
            height={28}
          />
          <Image
            src={"/images/Vector (5).png"}
            alt="logo"
            width={28}
            height={28}
          />
          <Image
            src={"/images/Vector (6).png"}
            alt="logo"
            width={28}
            height={28}
          />
          <Image src={"/images/cart.png"} alt="logo" width={28} height={28} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-[100px] left-0 w-full bg-neutral-400 shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 font-Poppins font-medium text-[16px]">
          <Link href={"/"}> <li>Home</li> </Link> 
           <Link href={"/shop"}><li>Shop</li> </Link>
           <Link href={"/blog"}><li>Blog</li> </Link>
          <Link href={"cart"}> <li>Cart</li></Link>
          <Link href={"/shop/singleProduct"}> <li>Products</li></Link>
          <Link href={"contact"}> <li>Contact</li></Link>
          </ul>
        </div>
      )}
    </header>
  );
}
