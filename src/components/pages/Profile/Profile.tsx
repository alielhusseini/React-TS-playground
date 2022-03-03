import { FC } from 'react'
import { IProfileProp } from './Profile.types'

export const Profile: FC<IProfileProp> = ({ name }) => {
    return (
        <div>Authenticated Profile of {name}</div>
    )
}
