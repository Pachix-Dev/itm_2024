import { useOktoberfest } from '../../store/oktoberfest-cart'

export function Total() {
  const { total } = useOktoberfest()

  function formatAmountMXN(amount) {
    const formattedAmount = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(amount)

    return formattedAmount
  }

  return (
    <div className='mt-5 grid gap-6 items-center bg-white shadow-md p-4 rounded-xl'>
      <div className='flex justify-between'>
        <p className='text-xl'>Subtotal</p>
        <p className='text-xl'>{formatAmountMXN(total)}</p>
      </div>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-bold'>Total</h2>
        <p className='text-4xl'>{formatAmountMXN(total)}</p>
      </div>
    </div>
  )
}
