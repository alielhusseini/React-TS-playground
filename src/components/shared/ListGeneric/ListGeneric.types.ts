export interface IListGeneric<T> {
    items: T[]
    handleClick(value: T): void
}