import useFormResolver from '../hooks/useFormResolver'

import { signupFieldsSchema, signupFormRules } from "../schemas/signup.schema.tsx"

import Form from "../components/Form"

export default function Signup() {
  const { control, errors, onSubmit, handleSubmit } = useFormResolver(signupFormRules)

  return (
    <Form
      title="Register"
      subtitle="Fill the form to create a new account"
      schema={signupFieldsSchema}
      control={control}
      errors={errors}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  )
}
