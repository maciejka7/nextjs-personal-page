import React from 'react'
import type { AppsItem } from '../appsList'
import ProjectItem from './ProjectItem'



interface Props {
    list: AppsItem[]
}

const ProjectList = (props: Props) => {
    return (
        <div>
            Project List:
            {props.list.map(item => (
                <ProjectItem data={item} key={item.name} />
            ))}
        </div>
    )
}

export default ProjectList
