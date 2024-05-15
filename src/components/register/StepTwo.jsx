import { useRegisterForm } from '../../store/register-form'

export function StepTwo() {
  const { name, setName, incrementStep, decrementStep } = useRegisterForm()
  return (
    <div>
      <h1>Step Two</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={incrementStep}>Next</button>
      <button onClick={decrementStep}>Back</button>
    </div>
  )
}
