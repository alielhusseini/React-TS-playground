import React from "react"
import { IInputProp } from "./Input.types"
import styles from './Input.module.scss'

export const Input = React.forwardRef<HTMLInputElement, IInputProp>(({ className, handleChange, name, type, value }, ref): JSX.Element => {

    const { inputStyle } = styles

    return (
        <input ref={ref} className={className ? className : inputStyle} type={type} name={name} value={value} onChange={handleChange} />
    )
})