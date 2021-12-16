import React from 'react'
import type {SubHeaderProps  } from './types'

const sizesFontsMap = {
    large: 'text-5xl',
    medium: 'text-4xl',
    small: 'text-lg'
}

export const Header = (props: SubHeaderProps) => {

    const gradient = props.gradient ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent' : ''
    const headerText = props.text ? props.text : props.children
    const headerType = props.type ? props.type : 'h3'

    
    function getHeaderClassName() : { className: string }{
        const commonClasses = 'font-bold tracking-tighter mb-4'
        const size = sizesFontsMap[props.size] || sizesFontsMap['medium']
        return { className: `${size} ${gradient} ${commonClasses}` }
    }

    return (
        React.createElement(headerType, { ...getHeaderClassName() }, headerText)
    )
}