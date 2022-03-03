export interface IButtonProp {
    handleClick(e: React.MouseEvent<HTMLButtonElement>): void,
    title: string
    className?: string
}