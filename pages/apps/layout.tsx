import React, { Children, ReactElement } from 'react'

interface Props {
  children: React.Component | ReactElement | string
}

const Layout = (props: Props) => {
  return (
    <div className="">
      {props.children}
    </div>
  )
}

export default Layout

