import { useRegisterStudent } from '../../store/register-student'
import { useEffect } from 'react'

export function Redirect() {
  const { complete_register } = useRegisterStudent()

  useEffect(() => {
    if (complete_register !== true) {
      window.location.href = '/'
    }
  }, [complete_register])

  return <></>
}
