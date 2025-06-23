import type React from "react";

interface HeaderProps {
    title?: string
    children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (
        <header>
            {title && <h1>{title}</h1>}
            {children && <div>{children}</div>}
        </header>
    )
}

export default Header