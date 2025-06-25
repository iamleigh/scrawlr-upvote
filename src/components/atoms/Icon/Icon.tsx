import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconNameMap, iconSizeMap } from './icon.types'
import type { IconName, IconSize } from './icon.types'

interface IconProps {
    name: IconName
    size?: IconSize
}

const Icon: React.FC<IconProps> = ({ name, size = 'md' }) => {
    return (
        <FontAwesomeIcon
            icon={iconNameMap[name.toLowerCase() as keyof typeof iconNameMap]}
            size={iconSizeMap[size.toLowerCase() as keyof typeof iconSizeMap]}
            data-testid="icon"
        />
    )
}

export default Icon
