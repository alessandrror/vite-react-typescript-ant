import { FC } from "react"
import { Input } from "antd"
import { DatePicker } from "antd"
import type { FieldProps } from "../types/field"

const Field: FC<FieldProps> = ({ id, type, placeholder, error, field }) => {
  if (type === 'password') {
    return (
        <Input.Password
          id={id}
          size="large"
          autoComplete="off"
          placeholder={placeholder}
          status={error && 'error'}
          {...field}
        />
    )
  } else if (type === 'date') {
    return (
      <DatePicker
        id={id}
        size="large"
        autoComplete="off"
        placeholder={placeholder}
        status={error && 'error'}
        className="w-full"
        {...field}
      />
    )
  }else {
      return (
        <Input
          id={id}
          type={type}
          size="large"
          autoComplete="off"
          placeholder={placeholder}
          status={error && 'error'}
          {...field}
        />
      )
  }
}

export default Field
