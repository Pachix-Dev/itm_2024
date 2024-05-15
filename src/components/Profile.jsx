import { useRegisterForm } from '../store/register-form'

export function Profile() {
  const { name, email } = useRegisterForm()

  return (
    <div className='p-20'>
      <img src='https://via.placeholder.com/150' alt='profile' />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}
