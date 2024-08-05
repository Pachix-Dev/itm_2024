import { useOktoberfest } from '../../store/oktoberfest-cart'
import { useEffect } from 'react'

export function RedirectOktoberfest() {
  const { complete_purchase } = useOktoberfest()

  useEffect(() => {
    if (complete_purchase !== true) {
      window.location.href = '/oktoberfest'
    }
  }, [complete_purchase])

  return <></>
}
