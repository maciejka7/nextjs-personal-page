import React from 'react'
import type { AppsItem } from '../appsList'
import ProjectItem from './ProjectItem'



interface Props {
    list: AppsItem[]
}

const ProjectList = (props: Props) => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold mb-16">Projects List:</h1>
            {props.list.map(item => (
                <ProjectItem data={item} key={item.name} />
            ))}
        </div>
    )
}

export default ProjectList
