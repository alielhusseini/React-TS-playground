import { RandomNumberTypeProp } from "./RandomNumber.types"

export function RandomNumber({ value, isPositive, isNegative, isZero }: RandomNumberTypeProp): JSX.Element {
    return (
        <div>{value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}</div>
    )
}
