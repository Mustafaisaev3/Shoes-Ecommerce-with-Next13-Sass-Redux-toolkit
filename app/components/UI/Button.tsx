'use client'

import { IconType } from 'react-icons'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    title?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    icon?: IconType,
    leftIcon?: IconType,
    rightIcon?: IconType,
    className?: string,
    size?: 'sm' | 'md' | 'lg',
    width?: string,
    height?: string,
}


const Button: React.FC<ButtonProps> = ({ title, onClick, size = 'md', width, height, icon: Icon, leftIcon: LeftIcon, rightIcon: RightIcon, className }) => {
  return (
    <button className={`btn ${className} ${size}`} style={{width, height}} onClick={onClick}>
        {LeftIcon && <LeftIcon size={18} />}
        {title && title}
        {Icon && <Icon size={18} />}
        {RightIcon && <RightIcon size={18} />}
    </button>
  )
}

export default Button