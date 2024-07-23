import { useOktoberfest } from '../../store/oktoberfest-cart'

export function Resume() {
  const { items } = useOktoberfest()

  function formatAmountMXN(amount) {
    const formattedAmount = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(amount)

    return formattedAmount
  }

  return (
    <div className='grid gap-6'>
      {items.map((item) => (
        <div
          key={item.id}
          className='grid md:flex justify-between items-end gap-5 rounded-xl shadow-md p-4 bg-white relative'
        >
          <div>
            <h3 className='font-bold text-lg'>{item.title}</h3>
            <p className='text-sm'>{item.description}</p>
          </div>
          <p className='text-3xl'>{formatAmountMXN(item.price)}</p>
        </div>
      ))}
    </div>
  )
}
