import { useRegisterForm } from '../../store/register-form'

export function StepThree() {
  const { name, setName, incrementStep, decrementStep } = useRegisterForm()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('completado')
  }
  return (
    <div>
      <h1>Step Three</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={decrementStep}>Back</button>

      <button onClick={handleSubmit}>Confirm</button>
    </div>
  )
}
