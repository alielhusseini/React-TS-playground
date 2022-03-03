import { IButton2Prop } from "./Button2.types"

export function Button2({ variant, children, ...rest }: IButton2Prop) {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}
