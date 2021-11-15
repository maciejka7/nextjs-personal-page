import {ImLab} from 'react-icons/im'
import { IconType } from 'react-icons/lib'

export interface AppsItem {
    name: string,
    description: string,
    icon: IconType,
    route: string,
    badges?: string[]
}

export const appsList: AppsItem[] = [
    {
        name: 'Rick and Morty Wiki',
        description: "Rick and Morty api usage with react redux",
        route: '/rickandmorty',
        icon: ImLab,
        badges: ['React', 'Redux', 'Redux-thunk', 'Axios', 'React Query']
    },
]