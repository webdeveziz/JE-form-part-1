import React, { useEffect, useState } from 'react'
import TextField from '../textField'
import { validator } from '../../utils/validator'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    validate()
  }, [data])

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    console.log(data)
  }

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательно для запольнения!' },
      isEmail: { message: 'Некорректное email!' }
    },
    password: {
      isRequired: { message: 'Пароль обязательно для запольнения!' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву!'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одну цифру!'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов!',
        value: 8
      }
    }
  }

  const isValid = Object.keys(errors).length === 0

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              value={data.email}
              name="email"
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              label="Пароль"
              type="password"
              value={data.password}
              name="password"
              onChange={handleChange}
              error={errors.password}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
