type ValueType = {
    value: number
}

type PositiveNumberType = ValueType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumberType = ValueType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroNumberType = ValueType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

export type RandomNumberTypeProp = PositiveNumberType | NegativeNumberType | ZeroNumberType