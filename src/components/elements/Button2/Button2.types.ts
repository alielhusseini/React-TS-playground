export interface IButton2Prop extends Omit<React.ComponentProps<'button'>, 'children'> {
    variant: 'primary' | 'secondary'
    children: string
}

export type Button2TypeProp = Omit<React.ComponentProps<'button'>, 'children'> & {
    variant: 'primary' | 'secondary'
}