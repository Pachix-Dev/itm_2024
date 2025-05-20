import { useRegisterStudent } from '../../store/register-student'
import { StepTwo } from './StepTwo'
import { StepOne } from './StepOne'
import { Stepper } from './Stepper'

export function RegisterStudent({ translates, currentLanguage }) {
  const { step } = useRegisterStudent()

  return (
    <section className='py-5'>
      <Stepper translates={translates} />
      <form className='mx-auto'>
        {step === 0 && <StepOne translates={translates} />}
        {step === 1 && (
          <StepTwo translates={translates} currentLanguage={currentLanguage} />
        )}
      </form>
    </section>
  )
}
