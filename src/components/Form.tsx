import { FC } from "react"
import { ConfigProvider, Form, Space, Button } from "antd"
import { Controller } from "react-hook-form"

const { Compact } = Space

import type { FormProps, FieldNames } from "../types/form"

import Field from "./Field"

const FormComponent: FC<FormProps> = ({ title, subtitle, schema, control, errors, onSubmit, handleSubmit }) => {
  return (
    <ConfigProvider theme={{
      components: {
        Input: {
          activeShadow: '0 0 0 2px rgba(22, 78, 99, 0.1)',
          activeBorderColor: 'rgb(22, 78, 99)',
          hoverBorderColor: 'rgb(22, 78, 99)'
        },
        Button: {
          defaultBg: '#164e63',
          defaultColor: '#ffffff',
          defaultActiveBg: '#164e63',
          defaultHoverBg: '#203e49',
          defaultHoverColor: '#ffffff',
          defaultHoverBorderColor: '#164e63'
        }
      }
    }}>
      <Form autoComplete="off" className="w-96 bg-white shadow-2xl rounded-2xl">
        <div className="my-10">
          <h1 className="text-cyan-900 font-bold text-center px-5 text-2xl">
            { title }
          </h1>
          <h2 className="text-cyan-900 font-light text-center px-5 text-sm">
            { subtitle }
          </h2>
        </div>
        {
          schema.map(({ id, name, type, label, placeholder, icon }) =>
              <Controller
                key={id}
                name={name as FieldNames}
                control={control}
                render={({ field }) => (
                  <Compact className="px-5 pb-6 flex flex-col w-full" >
                    <Form.Item label={label} htmlFor={id} layout="vertical" noStyle>
                      <label htmlFor={id}>{icon} {label}</label>
                      <Field
                        id={id}
                        type={type}
                        field={field}
                        placeholder={placeholder}
                        error={errors[id]?.message as string}
                      />
                      {
                        errors[id] &&
                        <small className="text-red-500">{errors[id]?.message as string}</small>
                      }
                    </Form.Item>
                  </Compact>
                )}
              />
          )
        }
        <div className="flex justify-center mt-3 mb-5 px-5">
          <Button onClick={handleSubmit(onSubmit)} type="default" size="large" className="w-full">Login</Button>
        </div>
      </Form>
    </ConfigProvider>
  )
}

export default FormComponent
