import React from "react";
import Link from "next/link";
import { routes } from "../../routes";
import NavList from "./NavList";

interface Props {}

export const Nav = (props: Props) => {
  return (
    <nav className="mb-12 flex justify-between">
      <Link href="/">
        <h3 className="font-bold leading-5 text-lg cursor-pointer hover:text-yellow-500">
          Michał <br /> Maciejewski
        </h3>
      </Link>
      <NavList routes={routes} />
    </nav>
  );
};
