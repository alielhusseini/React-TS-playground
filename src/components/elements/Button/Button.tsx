import { ReactElement } from 'react'
import { IButtonProp } from './Button.types'
import styles from './Button.module.scss'

export function Button({ handleClick, title, className }: IButtonProp): ReactElement {

    const { buttonStyle } = styles

    return (
        <button className={className ? className : buttonStyle} onClick={handleClick}>{title}</button>
    )
}