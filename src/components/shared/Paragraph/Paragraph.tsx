import { FC } from "react"
import { IStylesProp } from "./Paragraph.types"

export const Paragraph: FC<IStylesProp> = ({ styles }) => {
    return (
        <div style={styles}>Paragraph Text</div>
    )
}
