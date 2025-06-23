import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMap } from '../../../types/icon'
import type { IconName } from '../../../types/icon'

interface IconProps {
    name: IconName
}

const Icon: React.FC<IconProps> = ({ name }) => {
    return (
        <FontAwesomeIcon
            icon={iconMap[name.toLowerCase() as keyof typeof iconMap]}
            size="xl"
        />
    )
}

export default Icon
