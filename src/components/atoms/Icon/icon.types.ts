import { faArrowUp, faAdd } from '@fortawesome/free-solid-svg-icons'
import type {SizeProp} from "@fortawesome/fontawesome-svg-core"

export const iconNameMap = {
    up: faArrowUp,
    add: faAdd,
}

export type IconName = keyof typeof iconNameMap

export const iconSizeMap: Record<string, SizeProp> = {
    sm: "sm",
    md: "lg",
    lg: "2x",
}

export type IconSize = keyof typeof iconSizeMap