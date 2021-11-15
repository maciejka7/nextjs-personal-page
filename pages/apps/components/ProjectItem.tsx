import Link from "next/link";
import React from "react";
import type { AppsItem } from "../appsList";
import ProjectItemBadge from "./ProjectItemBadge";

interface Props {
  data: AppsItem;
}

const ProjectItem = (props: Props) => {

  const { description, icon, name, route, badges } = props.data

  return (
    <Link href={'apps'+route}>
      <a className="flex flex-col justify-center text-center p-8 rounded-md shadow-lg border border-gray-100 w-1/3 transform hover:scale-105 transition">
        <h2 className="font-bold text-xl mb-8"> {name} </h2>
        {React.createElement(icon, { className: "self-center text-5xl mb-4"})}
        <h3> {description} </h3>
        <div className="flex flex-wrap mt-8">
          {badges && badges.map(badge => (
            <ProjectItemBadge key={badge} badge={badge} />
          ))}
        </div>
      </a>
    </Link>
  );
};

export default ProjectItem;
