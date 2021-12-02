import React from 'react'
import type { HeaderProps } from './types'

const sizesFontsMap = {
    large: 'text-5xl',
    medium: 'text-4xl',
    small: 'text-lg'
}


const Header = (props: HeaderProps) => {


    function ifItsGradient() : string {
        if (props.gradient) {
            return 'bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'
        }
        return ''
    }

    function getHeaderClassName() : { className: string } | null {
        const classes = 'font-bold'
        return { className: `${sizesFontsMap[props.size]} ${ifItsGradient()} ${classes}` }
        
    }

    return (
        React.createElement(props.type, { ...getHeaderClassName() }, props.text)
    )
}

export default Header
