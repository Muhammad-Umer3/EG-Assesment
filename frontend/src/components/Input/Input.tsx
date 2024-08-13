import { IconType } from '@/common/types'
import React from 'react'

interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  Icon?: IconType
  className?: string
  inputClassName?: string
  errorMessage?: string
  name: string
  defaultValue?: string
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder = '',
  Icon,
  onChange,
  className = '',
  inputClassName = '',
  errorMessage,
  defaultValue = '',
}: InputProps) => {
  return (
    <div className={`flex flex-col space-y-1 w-full ${className}`}>
      {label && <label className='text-tertiary font-normal text-xs'>{label}</label>}
      <div className='relative w-full'>
        <input
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`py-2 rounded border-none bg-background focus:outline-none w-full placeholder:italic placeholder:font-medium indent-1 ${inputClassName}`}
          onChange={onChange}
        />
        {Icon && (
          <div className='absolute inset-y-0 right-1 flex items-center cursor-pointer'>
            <Icon />
          </div>
        )}
      </div>
      {errorMessage && <span className='text-red-400 text-xs'>{errorMessage}</span>}
    </div>
  )
}

export default Input
