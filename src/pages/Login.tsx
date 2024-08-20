import useFormResolver from '../hooks/useFormResolver'

import { loginFieldsSchema, loginFormRules } from "../schemas/login.schema.tsx"

import Form from "../components/Form"

export default function Login() {

  const { control, errors, onSubmit, handleSubmit } = useFormResolver(loginFormRules, true, '/')

  return (
    <section className="flex flex-col justify-center items-center bg-white" style={{ minHeight: "calc(100dvh - (((112 / 16) * 1rem)))" }}>
      <Form
        title="Welcome back!"
        subtitle="Log into your account"
        schema={loginFieldsSchema}
        control={control}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
    </section>
  )
}
