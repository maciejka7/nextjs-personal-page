import React from 'react';
import Link from 'next/link';
import { routes } from '../../routes';
import type { Routes } from '../../routes';
import NavList from './NavList';

interface Props {}

const sortRoutes = (routes: Routes[]): Routes[] =>
  routes.sort((a, b) => (a.position > b.position ? 0 : -1));

export const Nav = (props: Props) => {
  const sortedRoutes = React.useMemo(() => sortRoutes(routes), [routes]);

  return (
    <nav className="mb-12 flex justify-between">
      <Link href="/">
        <h3 className="font-bold leading-5 text-lg cursor-pointer transition hover:text-yellow-500">
          Michał <br /> Maciejewski
        </h3>
      </Link>
      <NavList routes={sortedRoutes} />
    </nav>
  );
};
