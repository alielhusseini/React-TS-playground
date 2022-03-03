import { Auth } from '../../pages'
import { IPrivateRoute } from './PrivateRoute.types'

export function PrivateRoute({ isAuth, component: Component }: IPrivateRoute) {
    return isAuth ? <Component name='Ali' /> : <Auth />
}
