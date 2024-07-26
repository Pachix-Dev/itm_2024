import { useOktoberfest } from '../../store/oktoberfest-cart'
import { useEffect } from 'react'

export function Redirect() {
  const { complete_purchase } = useOktoberfest()

  useEffect(() => {
    if (complete_purchase !== true) {
      window.location.href = '/oktoberfest'
    }
  }, [complete_purchase])

  return <></>
}
