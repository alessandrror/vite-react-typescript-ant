import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

import userStore, { login } from '../stores/user.store.ts'

import type { LoginFormType, LoginFormRules } from "../schemas/login.schema"
import type { SignupFormType, SignupFormRules } from "../schemas/signup.schema"

export type FormType = LoginFormType | SignupFormType

type FormRules = LoginFormRules | SignupFormRules

export default function useFormResolver(formRules: FormRules, dispatch?: boolean, path?: string) {

  const navigate = useNavigate()
  const { control, formState: { errors }, setError, handleSubmit, reset } = useForm<FormType>()

  const onSubmit = (data: FormType) => {
    const { success, error } = formRules.safeParse(data)

    if (!success) {
      error.issues.forEach(({ path, message }) => {
        const [key] = path
        setError(key as keyof FormType, { message })
      })
      return
    }

    console.log('si', data)

    reset()

    if (dispatch) {
      userStore.dispatch(login())
    }

    if (path) {
      navigate(path)
    }
  }

  return { control, errors, onSubmit, handleSubmit }
}
