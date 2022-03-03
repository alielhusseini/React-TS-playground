export interface IPrivateRoute {
    isAuth: boolean
    component: React.ComponentType<{ name: string }>
}