import type { Control, FieldErrors, UseFormHandleSubmit, FieldValues } from "react-hook-form"

import type { LoginFieldNames } from "../schemas/login.schema"
import type { SignupFieldNames } from "../schemas/signup.schema"

import type { FormType } from "../hooks/useFormResolver"

export type FieldNames = LoginFieldNames | SignupFieldNames

export type FormProps = {
  title: string
  subtitle: string
  schema: {
    id: string
    name: string
    type: string
    label: string
    placeholder: string
    icon: JSX.Element
  }[]
  control: Control<FormType>
  errors: FieldErrors<FieldValues>
  onSubmit: (data: FormType) => void
  handleSubmit: UseFormHandleSubmit<FormType>
}
