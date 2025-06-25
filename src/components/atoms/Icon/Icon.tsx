import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMap } from './icon.types'
import type { IconName } from './icon.types'

interface IconProps {
    name: IconName
}

const Icon: React.FC<IconProps> = ({ name }) => {
    return (
        <FontAwesomeIcon
            icon={iconMap[name.toLowerCase() as keyof typeof iconMap]}
        />
    )
}

export default Icon
