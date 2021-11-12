export interface Routes {
    name : string,
    href: string,
    position: number,

}

export const routes : Routes[] = [
    {
        name: 'Home',
        href: '/',
        position: 1,
    },
    {
        name: 'Resume',
        href: '/resume',
        position: 2,
    },
    {
        name: 'Contact',
        href: '/contact',
        position: 3,
    },
    {
        name: 'Apps',
        href: '/apps',
        position: 4,
    }
] 