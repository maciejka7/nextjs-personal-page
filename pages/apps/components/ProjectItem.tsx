import Link from "next/link";
import React from "react";
import type { AppsItem } from "../appsList";

interface Props {
  data: AppsItem;
}

const ProjectItem = (props: Props) => {
  return (
    <Link href={'apps'+props.data.route}>
      <a className="flex flex-col justify-center text-center p-4 rounded shadow-md border-2 border-yellow-500 w-1/3 transform hover:scale-105 transition">
        <h2 className="font-bold text-xl mb-4"> {props.data.name} </h2>
        <props.data.icon className="self-center text-5xl mb-4 text-yellow-500" />
        <h3> {props.data.description} </h3>
      </a>
    </Link>
  );
};

export default ProjectItem;
