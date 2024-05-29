import { useRegisterForm } from '../../store/register-form'
import { Checkout } from './Checkout'

export function StepFour() {
  const { addTocart, item, decrementStep } = useRegisterForm()

  const products = [
    {
      id: 1,
      name: 'Standard',
      price: 0,
      include: ['Acceso a piso de expositor', 'Acceso Leaders of tomorrow'],
      notInclude: [
        'Acceso a la zona de networking',
        'Acceso Cocktel VIP',
        'Acceso conferencias VIP',
        'Paquete de bienvenida',
      ],
    },
    {
      id: 2,
      name: 'Premium',
      price: 7500,
      include: [
        'Acceso a piso de expositor',
        'Acceso Leaders of tomorrow',
        'Acceso a la zona de networking',
        'Acceso Cocktel VIP',
        'Acceso conferencias VIP',
        'Paquete de bienvenida',
      ],
    },
  ]

  const active = (id) => {
    return item.id === id ? 'border-2 border-[#475CA0]' : ''
  }

  return (
    <>
      <div className='mt-10 grid md:flex justify-center'>
        <div className='grid md:flex justify-center gap-6 p-5 w-full'>
          {products.map((product) => (
            <div
              key={product.id}
              className={`mt-5 w-full max-w-sm h-fit  p-4 bg-[#374151]  rounded-lg shadow sm:p-8 ${active(
                product.id
              )}`}
            >
              <div className='flex justify-between'>
                <h5 className='mb-4 text-xl font-medium text-white '>
                  {product.name}
                </h5>
                {product.id === item.id ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#475CA0'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                ) : (
                  <svg
                    height='24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      r='10'
                      cx='12'
                      cy='12'
                      stroke='#475CA0'
                      strokeWidth='1'
                      opacity='0.5'
                    />
                  </svg>
                )}
              </div>
              <div className='flex items-baseline text-white '>
                <span className='text-3xl font-semibold'>$</span>
                <span className='text-5xl font-extrabold tracking-tight'>
                  {product.price}
                </span>
                <span className='font-bold'>MXN</span>
                <span className='ms-1 text-xl font-normal '>/ persona</span>
              </div>
              <ul role='list' className='space-y-5 mt-7'>
                {product.include.map((list, index) => (
                  <li key={index} className='flex items-center'>
                    <svg
                      className='flex-shrink-0 w-4 h-4 text-[#16A1D9] '
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                    </svg>
                    <span className='text-base font-normal leading-tight  ms-3'>
                      {list}
                    </span>
                  </li>
                ))}
              </ul>
              {product.notInclude && (
                <ul role='list' className='space-y-5 mt-5'>
                  {product.notInclude.map((list, index) => (
                    <li
                      key={index}
                      className='flex  line-through decoration-gray-500'
                    >
                      <svg
                        className='flex-shrink-0 w-4 h-4 text-gray-400 '
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                      </svg>
                      <span className='text-base font-normal leading-tight text-gray-500 ms-3'>
                        {list}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <button
                type='button'
                className='mt-5 text-white border border-white hover:bg-[#475CA0] focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
                onClick={() => addTocart(product)}
              >
                Seleccionar
              </button>
            </div>
          ))}
        </div>
        <Checkout />
      </div>
      <div className='flex justify-between'>
        <button
          className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl text-white font-bold mt-5 flex gap-2'
          onClick={decrementStep}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
            />
          </svg>{' '}
          Regresar
        </button>
      </div>
    </>
  )
}
