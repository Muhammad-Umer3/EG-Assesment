import React from 'react'

interface CheckboxProps {
  label: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }: CheckboxProps) => {
  return (
    <label className='flex items-center space-x-1 cursor-pointer'>
      <input
        type='checkbox'
        onChange={onChange}
        className={`h-4 w-4 rounded accent-primary checked:accent-primary`}
      />
      <span className='font-normal text-xs'>{label}</span>
    </label>
  )
}

export default Checkbox
