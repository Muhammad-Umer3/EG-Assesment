export interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
  disabled?: boolean
  fullWidth?: boolean
  className?: string
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-12 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

const Button = ({
  primary = true,
  size = 'medium',
  label,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-primary text-white' : 'bg-secondary text-white'

  const sizeClass = sizeClasses[size]

  return (
    <button
      type='button'
      disabled={disabled}
      className={`rounded-full border-none ${disabled ? 'bg-gray-500' : 'hover:bg-secondary hover:cursor-pointer'} ${mode} ${sizeClass} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
