export interface SubHeaderProps {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: 'small' | 'medium' | 'large'
    children?: React.ReactNode
    gradient? : boolean,
    text?: string
}