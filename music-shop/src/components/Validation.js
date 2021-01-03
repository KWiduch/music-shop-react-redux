import * as yup from 'yup'

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('invalid email')
    .required('email required'),
  password: yup
    .string()
    .min(8,"password is too short, min 8 characters required")
    .required('password required'),
})

export {signInSchema}