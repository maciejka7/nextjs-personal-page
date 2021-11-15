import React from 'react'

interface Props {
    badge: string
}

const ProjectItemBadge = (props: Props) => {
    return (
        <p className='transform scale-90 text-xs border border-purple-700 bg-purple-500 rounded-xl px-2 py-1 mb-1 text-white' >
            {props.badge}
        </p>
    )
}

export default ProjectItemBadge
