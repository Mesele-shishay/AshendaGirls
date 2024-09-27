"use client";

import React, { useState } from "react";
import Link_Item from "./Link_Item";
import NavDropDownMenu from "./NavDropDownMenu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropDownClick = () => {
    if (isDropdownVisible) {
      setDropdownVisible(false);
    } else {
      setDropdownVisible(true);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 fixed top-0 w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Image src="/icon.png" className="w-8" alt="Icon" width={100} height={100}/>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <Link_Item name="Explemetery" url="#" />
                <Link_Item name="Videos" url="#" />
                <Link_Item name="About" url="#" />
                <Link_Item name="Services" url="#" />
                <Link_Item name="Blog" url="#" />
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href={"login"}
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href={"signup"}
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="">
            <ModeToggle></ModeToggle>
          </div>
            <div className="block md:hidden">
              <button
                onClick={handleDropDownClick}
                className="rounded bg-gray-100 dark:bg-gray-800 dark:text-zinc-50 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          
        </div>
        
      </div>

      {/* Toggler */}
      {isDropdownVisible && <NavDropDownMenu />}
    </header>
  );
}

export default Header;
