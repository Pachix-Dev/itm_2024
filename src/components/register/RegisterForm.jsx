import { useRegisterForm } from '../../store/register-form'
import { StepOne } from './StepOne'
import { StepThree } from './StepThree'
import { StepTwo } from './StepTwo'
import { Stepper } from './Stepper'

export function RegisterForm() {
  const { step } = useRegisterForm()

  return (
    <section className='pt-5'>
      <Stepper />
      <form className='mx-auto md:w-4/6'>
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo />}
        {step === 2 && <StepThree />}
      </form>
    </section>
  )
}
