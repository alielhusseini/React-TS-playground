export interface IButtonProp {
    handleClick(e: React.MouseEvent<HTMLButtonElement>, i: number): void,
    title: string
    className?: string
}