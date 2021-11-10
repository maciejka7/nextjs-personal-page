import {ImLab} from 'react-icons/im'
import { IconType } from 'react-icons/lib'

interface AppsItem {
    name: string,
    description: string,
    icon: IconType,
    route: string,
}

export const appsList: AppsItem[] = [
    {
        name: 'Rick and Morty Wiki',
        description: "Rick and Morty api usage with react redux",
        route: '/ricknmorty',
        icon: ImLab,
    },
]