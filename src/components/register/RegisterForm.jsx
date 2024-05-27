import { useRegisterForm } from '../../store/register-form'
import { StepFour } from './StepFour'
import { StepOne } from './StepOne'
import { StepThree } from './StepThree'
import { StepTwo } from './StepTwo'
import { Stepper } from './Stepper'

export function RegisterForm() {
  const { step } = useRegisterForm()

  return (
    <section className='py-5'>
      <Stepper />
      <form className='mx-auto'>
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo />}
        {step === 2 && <StepThree />}
        {step === 3 && <StepFour />}
      </form>
    </section>
  )
}
