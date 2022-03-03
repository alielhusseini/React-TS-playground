type HorizaontalPositionType = 'center' | 'left' | 'right'
type VerticalPositionType = 'top' | 'center' | 'bottom'

export interface IToastNotificationProp {
    position: Exclude<`${HorizaontalPositionType}-${VerticalPositionType}`, 'center-center'> | 'center'
}