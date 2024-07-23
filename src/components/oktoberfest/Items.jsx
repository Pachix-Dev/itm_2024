import { useOktoberfest } from '../../store/oktoberfest-cart'

export function Items() {
  const { items, updateQuantity, removeToCart } = useOktoberfest()

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
          <div className='absolute right-4 top-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={3}
              stroke='currentColor'
              className='size-6 cursor-pointer'
              onClick={() => removeToCart(item.id)}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </div>
          <div>
            <h3 className='font-bold text-lg'>{item.title}</h3>
            <p className='text-sm'>{item.description}</p>
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              type='button'
              className='mt-5 border-2 rounded-s-lg px-2 leading-[initial] border-gray-300 font-bold'
            >
              -
            </button>
            <span className='border-y-2 px-2 border-gray-300'>
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              type='button'
              className='border-2 rounded-e-lg px-2 leading-[initial] border-gray-300 font-bold'
            >
              +
            </button>
          </div>
          <p className='text-3xl'>{formatAmountMXN(item.price)}</p>
        </div>
      ))}
    </div>
  )
}
