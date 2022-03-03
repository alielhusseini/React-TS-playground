import { FC } from "react"
import { IStylesProp } from "./Paragraph.types"

export const Paragraph: FC<IStylesProp> = ({ styles, text }) => {
    return (
        <div style={styles}>{text}</div>
    )
}
