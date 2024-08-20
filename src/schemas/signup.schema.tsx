import { z } from "zod"
import { UserOutlined, CalendarOutlined, MailOutlined, LockOutlined } from "@ant-design/icons"

export const signupFieldsSchema = [
  {
    id: 'completeName',
    type: 'text',
    name: 'completeName',
    label: 'Complete name',
    placeholder: 'Enter your complete name',
    icon: <UserOutlined />
  },
  {
    id: 'birthdate',
    type: 'date',
    name: 'birthdate',
    label: 'Birthdate',
    placeholder: 'Enter your birthdate',
    icon: <CalendarOutlined />
  },
  {
    id: 'username',
    type: 'text',
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <UserOutlined />
  },
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
  },
  {
    id: 'passwordConfirmation',
    name: 'passwordConfirmation',
    type: 'password',
    label: 'Confirm password',
    placeholder: 'Enter your password',
    icon: <LockOutlined />
  }
]

export const signupFormRules = z.object({
  completeName: z.string({ message: 'The name field cannot be empty' }),
  birthdate: z.null(),
  username: z.string({ message: 'The username field cannot be empty' }),
  email: z.string({ message: 'The email field cannot be empty' }).email({ message: 'It must be a valid email' }),
  password: z.string({ message: 'The password field cannot be empty' }).min(8, { message: 'It must be at least 8 characters' }),
  passwordConfirmation: z.string({ message: 'The confirmation password field cannot be empty' }).min(8, { message: 'It must be at least 8 characters' })
})
.refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
  message: 'Passwords do not match',
  path: ['password' ,'passwordConfirmation']
})

export type SignupFormType = z.infer<typeof signupFormRules>

export type SignupFormRules = z.ZodType<SignupFormType>

export type SignupFieldNames = 'email' | 'password' | 'passwordConfirmation'
