import React from "react";

function NavDropDownMenu() {
  return (
    <nav className=" bg-white dark:bg-gray-900 border-0 p-4 shadow-lg rounded-md md:hidden ">
      <ul className="space-y-4 px-4">
        <li>
          <a
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-50 hover:opacity-75 "
            href=""
          >
            Explemetery
          </a>
        </li>
        <li>
          <a
            className=" dark:text-white inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:opacity-75"
            href=""
          >
            Videos
          </a>
        </li>
        <li>
          <a
            className="  dark:text-white inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:opacity-75"
            href=""
          >
            About
          </a>
        </li>
        <li>
          <a
            className="  dark:text-white inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:opacity-75"
            href=""
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="  dark:text-white inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:opacity-75"
            href=""
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavDropDownMenu;
