import { useForm } from 'react-hook-form'
import { useRegisterForm } from '../../store/register-form'

import { PostalCode } from './PostalCode.jsx'
export function StepTwo() {
  const {
    company,
    industry,
    position,
    address,
    webPage,
    phoneCompany,
    setCompany,
    setIndustry,
    setPosition,
    setAddress,
    setWebPage,
    setPhoneCompany,
    incrementStep,
    decrementStep,
  } = useRegisterForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  return (
    <>
      <div className='grid md:grid-cols-2 gap-6 mt-10'>
        <div>
          <p>
            Nombre de la empresa <span className='text-red-600'>*</span>
          </p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('company', {
                required: 'Nombre de la empresa  es requerido',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres',
                },
                maxLength: {
                  value: 50,
                  message: 'El nombre debe tener máximo 50 caracteres',
                },

                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                  message:
                    'No se aceptan espacios en blanco al inicio o final del nombre, ni simbolos ni números',
                },
                onChange: (e) => setCompany(e.target.value),
              })}
              name='company'
              id='company'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Ingresa el nombre de la empresa'
              autoComplete='company'
              defaultValue={company}
            />
            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4 text-gray-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
                />
              </svg>
            </span>
          </div>
          {errors.company && (
            <p className='text-[#D70205] font-light'>
              {errors.company.message}
            </p>
          )}
        </div>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            Industria <span className='text-red-600'>*</span>
          </p>
          <select
            {...register('industry', {
              required: 'Tipo de registro es requerido',
              onChange: (e) => setIndustry(e.target.value),
            })}
            defaultValue={industry}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='INGENIERIA'>INGENIERIA</option>
            <option value='SECTOR EDUCATIVO'>SECTOR EDUCATIVO</option>
            <option value='AUTOMOTRIZ'>AUTOMOTRIZ</option>
            <option value='ELECTRICIDAD Y ELECTRÓNICA'>
              ELECTRICIDAD Y ELECTRÓNICA
            </option>
            <option value='SISTEMAS INTEGRADORES'>SISTEMAS INTEGRADORES</option>
            <option value='INDUSTRIA DE MAQUINARIA DE HERRAMIENTA'>
              INDUSTRIA DE MAQUINARIA DE HERRAMIENTA
            </option>
            <option value='GOBIERNO'>GOBIERNO</option>
            <option value='LOGÍSTICA Y CADENA DE SUMINISTROS'>
              LOGÍSTICA Y CADENA DE SUMINISTROS
            </option>
            <option value='PROCESOS INDUSTRIALES (ACERO, PETRÓLEO Y QUÍMICO)'>
              PROCESOS INDUSTRIALES (ACERO, PETRÓLEO Y QUÍMICO)
            </option>
            <option value='ALIMENTOS Y BEBIDAS'>ALIMENTOS Y BEBIDAS</option>
            <option value='TELECOMUNICACIONES'>TELECOMUNICACIONES</option>
            <option value='INGENIERÍA DE PLANTAS Y MECÁNICA'>
              INGENIERÍA DE PLANTAS Y MECÁNICA
            </option>
            <option value='AEROESPACIAL'>AEROESPACIAL</option>
            <option value='CUIDADO DE LA SALUD'>CUIDADO DE LA SALUD</option>
            <option value='FACILIDADES E INFRAESTRUCTURA Y SOLUCIONES URBANAS'>
              FACILIDADES E INFRAESTRUCTURA Y SOLUCIONES URBANAS
            </option>
            <option value='CÁMARAS Y ASOCIACIONES'>
              CÁMARAS Y ASOCIACIONES
            </option>
            <option value='EMBALAJE'>EMBALAJE</option>
            <option value='BIOTECNOLOGÍA Y FARMACÉUTICA'>
              BIOTECNOLOGÍA Y FARMACÉUTICA
            </option>
          </select>
          {errors.industry && (
            <p className='text-[#D70205] font-light'>
              {errors.industry.message}
            </p>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            Cargo <span className='text-red-600'>*</span>
          </p>
          <select
            {...register('position', {
              required: 'Cargo es requerido',
              onChange: (e) => setPosition(e.target.value),
            })}
            defaultValue={position}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='CEO / PRESIDENTE'>CEO / PRESIDENTE</option>
            <option value='DIRECTOR / COORDINADOR DE AREA'>
              DIRECTOR / COORDINADOR DE AREA
            </option>
            <option value='JEFE / GERENTE DE AREA'>
              JEFE / GERENTE DE AREA
            </option>
            <option value='PERSONAL OPERATIVO'>PERSONAL OPERATIVO</option>
          </select>
          {errors.position && (
            <p className='text-[#D70205] font-light'>
              {errors.position.message}
            </p>
          )}
        </div>
        <div>
          <p>
            Calle y número <span className='text-red-600'>*</span>
          </p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('address', {
                required: 'Ciudad es requerido',
                onChange: (e) => setAddress(e.target.value),
              })}
              name='address'
              id='address'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Ingresa Calle y número'
              autoComplete='address'
              defaultValue={address}
            />
            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4 text-gray-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                />
              </svg>
            </span>
          </div>
          {errors.address && (
            <p className='text-[#D70205] font-light'>
              {errors.address.message}
            </p>
          )}
        </div>
      </div>

      <PostalCode />

      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p>Página web </p>
          <div className='relative mt-2'>
            <input
              type='text'
              onChange={(e) => setWebPage(e.target.value)}
              name='webPage'
              id='webPage'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Ingresa la página web de la empresa'
              autoComplete='webPage'
              defaultValue={webPage}
            />
            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4 text-gray-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
            </span>
          </div>
          {errors.webPage && (
            <p className='text-[#D70205] font-light'>
              {errors.webPage.message}
            </p>
          )}
        </div>
        <div>
          <p>Número de teléfono de la empresa </p>
          <div className='relative mt-2'>
            <input
              type='tel'
              {...register('phoneCompany', {
                pattern: {
                  value: /^[0-9+]+$/,
                  message:
                    'Teléfono inválido, no se aceptan espacios en blancon ni letras',
                },
                onChange: (e) => setPhoneCompany(e.target.value),
              })}
              name='phoneCompany'
              id='phoneCompany'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Ingresa número de teléfono de la empresa'
              autoComplete='phoneCompany'
              defaultValue={phoneCompany}
            />
            <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4 text-gray-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                />
              </svg>
            </span>
          </div>
          {errors.phoneCompany && (
            <p className='text-[#D70205] font-light'>
              {errors.phoneCompany.message}
            </p>
          )}
        </div>
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
          </svg>
          Regresar
        </button>
        <button
          className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl text-white font-bold mt-5 flex gap-2'
          onClick={handleSubmit(incrementStep)}
        >
          Continuar
        </button>
      </div>
    </>
  )
}
