import { IListGeneric } from "./ListGeneric.types"

export const ListGeneric = <T extends {}>({ items, handleClick }: IListGeneric<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => (
                <div key={index} onClick={() => handleClick(item)}>
                    {item}
                </div>
            ))}
        </div>
    )
}
