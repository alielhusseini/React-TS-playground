import { IToastNotificationProp } from "./ToastNotification.types"

export function ToastNotification({ position }: IToastNotificationProp): JSX.Element {
    return (
        <div>Toast Notification Position is {position}</div>
    )
}
