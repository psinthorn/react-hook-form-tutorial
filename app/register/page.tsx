import RegisterForm from '@/components/form/RegisterForm'
import RegisterFormWithZod from '@/components/form/RegisterFormWithZod'

const RegisterRoute = () => {
  return (
    <div>
      <RegisterForm />
      <RegisterFormWithZod />
    </div>
  )
}

export default RegisterRoute