import { faArrowUp, faAdd } from '@fortawesome/free-solid-svg-icons'

/// -----------------------------------------------------------------------------
/// 🟢 IconName
///
/// Represents the names of icons available in the icon map.
/// -----------------------------------------------------------------------------
export const iconMap = {
    up: faArrowUp,
    add: faAdd,
}

export type IconName = keyof typeof iconMap
