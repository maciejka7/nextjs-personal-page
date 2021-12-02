import React from 'react'
import { Header, HeaderProps } from '../src/components/Header';

const headerSizeVariants: HeaderProps[] = [
    {type: 'h1', size: 'small', text: 'H1 - Loream ipsum dolor sit amet'},
    {type: 'h2', size: 'medium', text: 'H2 - Loream ipsum dolor sit amet'},
    {type: 'h3', size: 'large', text: 'H3 - Loream ipsum dolor sit amet', gradient: true},
]

interface Props {}

const styleguide = (props: Props) => {
    return (
        <div>
            <h1>Styleguide</h1>
            { headerSizeVariants.map((header, index) => {
                return (
                    <div key={index} className="mt-4 mb-6">
                        <h2 className="italic text-green-600 pb-2">{header.type}</h2>
                        <Header {...header} />
                    </div>
                )
            })}
        </div>
    )
}

export default styleguide
