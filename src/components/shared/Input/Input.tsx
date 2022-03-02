import { FC } from "react"
import { IInputProp } from "./Input.types"
import styles from './Input.module.scss'

export const Input: FC<IInputProp> = ({ value, handleChange, type, className, name }) => {

    const { inputStyle } = styles

    return (
        <input className={className ? className : inputStyle} type={type} name={name} value={value} onChange={handleChange} />
    )
}