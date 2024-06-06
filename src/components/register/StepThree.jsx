import { useForm } from 'react-hook-form'
import { useRegisterForm } from '../../store/register-form'
import { useState } from 'react'

export function StepThree() {
  const {
    name,
    paternSurname,
    maternSurname,
    email,
    phone,
    typeRegister,
    genre,
    age,
    linkedin,
    company,
    industry,
    position,
    country,
    municipality,
    state,
    city,
    address,
    colonia,
    postalCode,
    webPage,
    phoneCompany,
    eventKnowledge,
    productInterest,
    levelInfluence,
    wannaBeExhibitor,
    alreadyVisited,
    nameFair,
    setEventKnowledge,
    setProductInterest,
    setLevelInfluence,
    setWannaBeExhibitor,
    setAlreadyVisited,
    setNameFair,
    setCompleteRegister,
    setInvoiceDownToLoad,

    decrementStep,
    clear,
  } = useRegisterForm()

  const [message, setMessage] = useState('')
  const [processing, setProcessing] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const urlbase = 'https://demo.industrialtransformation.mx/server/'
  //const urlbase = 'http://localhost:3010/'

  const handleRegister = async () => {
    setProcessing(true)
    const response = await fetch(urlbase + 'free-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        paternSurname,
        maternSurname,
        email,
        phone,
        typeRegister,
        genre,
        age,
        linkedin,
        company,
        industry,
        position,
        country,
        municipality,
        state,
        city,
        address,
        colonia,
        postalCode,
        webPage,
        phoneCompany,
        eventKnowledge,
        productInterest,
        levelInfluence,
        wannaBeExhibitor,
        alreadyVisited,
        nameFair,
      }),
    })
    const orderData = await response.json()
    if (orderData.status) {
      //clear()
      setCompleteRegister(true)
      setInvoiceDownToLoad(orderData?.invoice)
      window.location.href = '/gracias-por-registrarte'
    } else {
      setProcessing(false)
      setMessage(orderData?.message)
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }
  return (
    <>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            ¿Cómo se enteró del evento?
          </p>
          <select
            {...register('eventKnowledge', {
              required: 'este campo es requerido',
              onChange: (e) => setEventKnowledge(e.target.value),
            })}
            defaultValue={eventKnowledge}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='FACEBOOK'>FACEBOOK</option>
            <option value='TWITTER'>TWITTER</option>
            <option value='LINKEDIN'>LINKEDIN</option>
            <option value='INSTAGRAM'>INSTAGRAM</option>
            <option value='CORREO ELECTRÓNICO'>CORREO ELECTRÓNICO</option>
            <option value='INVITADO POR EXPOSITOR'>
              INVITADO POR EXPOSITOR
            </option>
            <option value='RADIO'>RADIO</option>
            <option value='TELEVISIÓN'>TELEVISIÓN</option>
            <option value='PRENSA'>PRENSA</option>
            <option value='ANUNCIO EN REVISTA'>ANUNCIO EN REVISTA</option>
            <option value='TELEMARKETING'>TELEMARKETING</option>
          </select>
          {errors.eventKnowledge && (
            <p className='text-[#ffe200] font-light'>
              {errors.eventKnowledge.message}
            </p>
          )}
        </div>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            Producto de interés
          </p>
          <select
            {...register('productInterest', {
              required: 'Este campo es requerido',
              onChange: (e) => setProductInterest(e.target.value),
            })}
            defaultValue={productInterest}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='AUTOMATIZACIÓN, ROBOTIZACIÓN Y TRANSMISIÓN DE PODER'>
              AUTOMATIZACIÓN, ROBOTIZACIÓN Y TRANSMISIÓN DE PODER
            </option>
            <option value='MÁQUINAS Y HERRAMIENTAS'>
              MÁQUINAS Y HERRAMIENTAS
            </option>
            <option value='AEROESPACIAL'>AEROESPACIAL</option>
            <option value='LOGÍSTICA INTELIGENTE'>LOGÍSTICA INTELIGENTE</option>
            <option value='MANUFACTURA DIGITAL'>MANUFACTURA DIGITAL</option>
            <option value='GOBIERNO'>GOBIERNO</option>
            <option value='SOLUCIONES DE ENERGÍA'>SOLUCIONES DE ENERGÍA</option>
            <option value='INSTITUCIONES DE INVESTIGACIÓN'>
              INSTITUCIONES DE INVESTIGACIÓN
            </option>
            <option value='MANUFACTURA ADITIVA'>MANUFACTURA ADITIVA</option>
            <option value='E-MOBILITY'>E-MOBILITY</option>
            <option value='DATA & SOFTWARE'>DATA & SOFTWARE</option>
          </select>
          {errors.productInterest && (
            <p className='text-[#ffe200] font-light'>
              {errors.productInterest.message}
            </p>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            Nivel de influencia
          </p>
          <select
            {...register('levelInfluence', {
              required: 'este campo es requerido',
              onChange: (e) => setLevelInfluence(e.target.value),
            })}
            defaultValue={levelInfluence}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='EVALUO O RECOMIENDO PROVEEDOR'>
              EVALÚO O RECOMIENDO PROVEEDOR
            </option>
            <option value='APRUEBO COMPRAS'>APRUEBO COMPRAS</option>
            <option value='NO TENGO DECISIÓN EN COMPRAS'>
              NO TENGO DECISIÓN EN COMPRAS
            </option>
          </select>
          {errors.levelInfluence && (
            <p className='text-[#ffe200] font-light'>
              {errors.levelInfluence.message}
            </p>
          )}
        </div>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            ¿Considerarías ser expositor en nuestra feria en próximas ediciones?
          </p>
          <select
            {...register('wannaBeExhibitor', {
              required: 'Este campo es requerido',
              onChange: (e) => setWannaBeExhibitor(e.target.value),
            })}
            defaultValue={wannaBeExhibitor}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='SI'>SI</option>
            <option value='NO'>NO</option>
          </select>
          {errors.wannaBeExhibitor && (
            <p className='text-[#ffe200] font-light'>
              {errors.wannaBeExhibitor.message}
            </p>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            ¿Haz visitado esta feria o alguna similar?
          </p>
          <ul className='mt-3 w-fit items-center text-sm font-medium text-white bg-gray-700 border border-gray-600 rounded-lg sm:flex'>
            <li className='border-b border-gray-200 sm:border-b-0 sm:border-r 0 px-2'>
              <div className='flex items-center ps-3'>
                <input
                  id='horizontal-list-radio-license'
                  type='radio'
                  value='si'
                  checked={alreadyVisited === 'si'}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  {...register('radio', {
                    required: 'Este campo es requerido',
                    onChange: (e) => {
                      setAlreadyVisited(e.target.value)
                    },
                  })}
                />
                <label
                  htmlFor='horizontal-list-radio-license'
                  className='w-full py-3 ms-2 text-sm font-medium text-white '
                >
                  si
                </label>
              </div>
            </li>
            <li className='border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 px-2'>
              <div className='flex items-center ps-3'>
                <input
                  id='horizontal-list-radio-id'
                  type='radio'
                  value='no'
                  checked={alreadyVisited === 'no'}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                  {...register('radio', {
                    required: 'Este campo es requerido',
                    onChange: (e) => {
                      setAlreadyVisited(e.target.value)
                    },
                  })}
                />
                <label
                  htmlFor='horizontal-list-radio-id'
                  className='w-full py-3 ms-2 text-sm font-medium text-white '
                >
                  no
                </label>
              </div>
            </li>
          </ul>
          {errors.radio && (
            <p className='text-[#ffe200] font-light'>{errors.radio.message}</p>
          )}
        </div>
        {alreadyVisited === 'si' && (
          <div>
            <p className='font-semibold text-gray-900 dark:text-white'>
              ¿Cuál es el nombre de la feria que visitaste?
            </p>
            <input
              {...register('nameFair', {
                required: 'Este campo es requerido',
                onChange: (e) => setNameFair(e.target.value),
              })}
              defaultValue={nameFair}
              className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
            />
            {errors.nameFair && (
              <p className='text-[#ffe200] font-light'>
                {errors.nameFair.message}
              </p>
            )}
          </div>
        )}
      </div>
      <div className='flex justify-between'>
        <button
          className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl font-bold text-white  mt-5 flex gap-2'
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
        <button
          className='px-3 py-2 bg-[#E42128] hover:bg-red-700 font-bold rounded-2xl text-white  mt-5 flex gap-2'
          onClick={handleSubmit(handleRegister)}
        >
          Finalizar
        </button>
      </div>
      {processing && (
        <div className='absolute top-0 left-0 bg-gray-400 bg-opacity-85 z-[999] w-full h-full px-4'>
          <div role='status' className='grid place-items-center w-full h-full'>
            <p className='text-center flex gap-2'>
              <svg
                aria-hidden='true'
                className='w-8 h-8 text-gray-200 animate-spin fill-blue-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
              <span className='font-bold text-white text-2xl'>
                Estamos procesando la información por favor espere...
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
