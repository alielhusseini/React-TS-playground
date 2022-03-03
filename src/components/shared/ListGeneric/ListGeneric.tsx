import { IListGeneric } from "./ListGeneric.types"

export const ListGeneric = <T extends { id: number, name: string }>({ items, handleClick }: IListGeneric<T>) => { // constraints : <T extends {}> means all types but <T extends string | number> means strings or numbers only. The constraint used here is an object that must have id (number) and name (string) keys
    return (
        <div>
            <h2>List of items</h2>
            {items.map(item => (
                <div key={item.id} onClick={() => handleClick(item)}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}
