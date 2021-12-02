import Link from "next/link";
import React from "react";
import type { Routes } from "../../routes";

interface Props {
  routes: Routes[];
}

const NavList = (props: Props) => {
  return (
    
      <ul className=" w-1/2 flex justify-evenly">
        {props.routes.map((navItem) => (
          <Link href={navItem.href} key={navItem.position+navItem.name} >
            <a className="transition hover:text-yellow-500 "> {navItem.name} </a>
          </Link>
        ))}
      </ul>
  );
};

export default NavList;
