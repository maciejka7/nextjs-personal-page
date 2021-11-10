import React from 'react'
import { appsList } from './appsList'
interface Props {
    
}

const index = (props: Props) => {
    return (
        <div>
            <h2>Apps</h2>
            { appsList.map(app => (
                <p>
                    {app.name}
                </p>
            ))}
        </div>
    )
}

export default index
