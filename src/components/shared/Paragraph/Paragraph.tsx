import { IStylesProp } from "./Paragraph.types"

export function Paragraph({ styles }: IStylesProp): JSX.Element {
    return (
        <div style={styles}>Paragraph Text</div>
    )
}
