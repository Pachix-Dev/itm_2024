import { useRegisterForm } from '../../store/register-form'
import { Checkout } from './Checkout'

export function ProgramVip({ currentLanguage }) {
  const { addTocart, item } = useRegisterForm()

  const products = [
    {
      id: 1,
      name: 'Programa de Conferencias CCE - CONCAMIN - ITM - AMOF',
      price: 5800,
      included: [
        'Acceso 2 días al programa de Conferencias CCE - CONCAMIN - ITM - AMOF',
        'Coffee Break',
        'Entrada al piso de exposición',
      ],
    },
  ]

  const active = (id) => {
    return item.id === id ? 'border-2 border-[#475CA0]' : ''
  }

  return (
    <>
      <div className='grid place-content-center justify-center h-[650px] rounded-lg overflow-y-scroll w-full bg-white p-4'>
        <div className='mt-5 grid justify-center gap-6 w-full'>
          {products.map((product) => (
            <div
              key={product.id}
              className={`w-full max-w-sm h-fit  p-4 bg-white  rounded-lg shadow-xl  ${active(
                product.id
              )}`}
            >
              <div className='flex justify-between'>
                <h5 className='mb-4 text-xl font-medium text-black '>
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
              <div className='flex items-baseline text-black '>
                <span className='text-3xl font-semibold'>$</span>
                <span className='text-4xl font-extrabold tracking-tight'>
                  5,000 + IVA
                </span>
                <span className='font-bold'>MXN</span>
              </div>
              <ul role='list' className='space-y-5 my-7'>
                {product.included.map((list, index) => (
                  <li key={index} className='flex items-center'>
                    <svg
                      className='flex-shrink-0 w-4 h-4 text-blue-600 '
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                    </svg>
                    <span className='text-base font-normal leading-tight text-gray-500  ms-3'>
                      {list}
                    </span>
                  </li>
                ))}
                <li className='flex items-center'>
                  <svg
                    className='flex-shrink-0 w-4 h-4 text-blue-600 '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                  </svg>
                  <span className='text-base font-normal leading-tight text-gray-500  ms-3'>
                    Pase doble a noche de industriales, previo registro con:{' '}
                    <a
                      href='mailto:gabriela.aguirre@igeco.mx'
                      target='_blank'
                      className='font-bold text-blue-600'
                    >
                      gabriela.aguirre@igeco.mx
                    </a>
                  </span>
                </li>
              </ul>
              {Object.keys(item).length === 0 && (
                <button
                  type='button'
                  className='mt-5 text-white border border-white bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
                  onClick={() => addTocart(product)}
                >
                  Comprar
                </button>
              )}
            </div>
          ))}
          {Object.keys(item).length > 0 && (
            <Checkout currentLanguage={currentLanguage} />
          )}
        </div>
      </div>
    </>
  )
}
