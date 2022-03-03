export interface IInputProp {
    name: string
    type: 'text' | 'password' | 'number'
    value: string
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void
    className?: string
}