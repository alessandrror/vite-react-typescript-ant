import type { ControllerRenderProps } from "react-hook-form"
import type { LoginFormType, LoginFieldNames } from "../schemas/login.schema"
import type { SignupFormType, SignupFieldNames } from "../schemas/signup.schema"

export type FieldNames =  LoginFieldNames | SignupFieldNames
export type ControlForms =  LoginFormType | SignupFormType

export type FieldProps = {
  id: string
  type: string
  placeholder: string
  error: string
  field: ControllerRenderProps<ControlForms, FieldNames>
}
