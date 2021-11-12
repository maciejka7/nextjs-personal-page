import React from 'react'
import ProjectList from './components/ProjectList'
import Layout from './layout'
import { appsList } from './appsList'

interface Props {}

const index = (props: Props) => {
    return (
        <Layout>
            <ProjectList list={appsList} />
        </Layout>
    )
}

export default index
