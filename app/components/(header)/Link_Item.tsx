import React, { FC } from "react";

interface LinkItemProp {
  name:string,
  url:string
}

function Link_Item({name,url}:LinkItemProp) {
  return (
    <li>
      <a
        className="text-gray-500 transition hover:text-gray-500/75 hover:text-teal-600 dark:text-white"
        href={url}
      >
        {" "}
        {name}{" "}
      </a>
    </li>
  );
}

export default Link_Item;
