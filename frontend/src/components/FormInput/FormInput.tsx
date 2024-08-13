import { IconType } from '@/common/types'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Input from '../Input/Input'

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

const FormInput: React.FC<InputProps> = (props: InputProps) => {
  const { control, setValue: useFormSetValue, setError, getValues } = useFormContext()
  const { name, onChange, ...rest } = props
  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Input
          {...rest}
          name={name}
          defaultValue={getValues(name)}
          onChange={(e) => {
            onChange?.(e)
            setError(name, {})
            useFormSetValue(name, e.target.value)
          }}
        />
      )}
    />
  )
}

export default FormInput
