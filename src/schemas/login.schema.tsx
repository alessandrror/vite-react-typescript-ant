import { z } from "zod"
import {  MailOutlined, LockOutlined } from "@ant-design/icons"

export const loginFieldsSchema = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    icon: <MailOutlined />
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    icon: <LockOutlined />
  }
]

export const loginFormRules = z.object({
  email: z.string({ message: 'The email field cannot be empty' }).email({ message: 'It must be a valid email' }),
  password: z.string({ message: 'The password field cannot be empty' }).min(8, { message: 'It must be at least 8 characters' })
})

export type LoginFormType = z.infer<typeof loginFormRules>

export type LoginFormRules = z.ZodType<LoginFormType>

export type LoginFieldNames = 'email' | 'password'
