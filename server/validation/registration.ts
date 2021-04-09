import {body} from 'express-validator'

export const  registerValidations = [
    body('email', 'Введите E-Mail')
    .isEmail()
    .withMessage('Неверный E-Mail')
    .isLength({
      min: 5,
      max: 20,
    })
    .withMessage('Введите валидный email'),
  body('password', 'Укажите пароль')
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage('​Минимальная длина пароля 6 символов')
]
