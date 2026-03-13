import { useForm } from 'react-hook-form'
import { useRegisterForm } from '../../store/register-form'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { countries } from '../../data/list_countries'
import 'react-phone-number-input/style.css'
import './Form.css'
import { useEffect, useState } from 'react'

export function StepOne({ translates, currentLanguage }) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(true)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const {
    name,
    paternSurname,
    maternSurname,
    email,
    code_invitation,
    phone,
    typeRegister,
    genre,
    nacionality,
    setName,
    setPaternSurname,
    setMaternSurname,
    setEmail,
    setCodeInvitation,
    setPhone,
    setTypeRegister,
    setGenre,
    setNacionality,
    incrementStep,
  } = useRegisterForm()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (showPrivacyModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showPrivacyModal])

  const handleAcceptPrivacy = () => {
    setPrivacyAccepted(true)
    setShowPrivacyModal(false)
  }

  const handleRejectPrivacy = () => {
    // Opcional: redirigir a otra página o mostrar mensaje
    alert(
      currentLanguage === 'es'
        ? 'Es necesario aceptar el aviso de privacidad para continuar con el registro.'
        : 'It is necessary to accept the privacy notice to continue with the registration.'
    )
  }

  return (
    <>
      {showPrivacyModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
          <div className='relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden'>
            {/* Header del Modal */}
            <div className='sticky top-0 bg-gradient-to-r from-[#E42128] to-[#CF1363] text-white p-6 z-10'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-2xl font-bold mb-2'>
                    {currentLanguage === 'es'
                      ? 'Aviso de Privacidad'
                      : 'Privacy Notice'}
                  </h2>
                  <p className='text-white/90'>
                    {currentLanguage === 'es'
                      ? 'Por favor, lee y acepta nuestro aviso de privacidad para continuar'
                      : 'Please read and accept our privacy notice to continue'}
                  </p>
                </div>
                <div className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className='p-6 overflow-y-auto max-h-[60vh]'>
              <div className='prose max-w-none text-gray-700'>
                <iframe
                  src={
                    currentLanguage === 'es'
                      ? 'https://igeco.mx/aviso-de-privacidad/'
                      : 'https://igeco.mx/en/aviso-de-privacidad/'
                  }
                  className='w-full h-[400px] border-0 rounded-lg'
                  title='Aviso de Privacidad'
                />

                {/* Enlace directo como alternativa */}
                <div className='mt-4 p-4 bg-gray-50 rounded-lg'>
                  <p className='text-sm text-gray-600 mb-2'>
                    {currentLanguage === 'es'
                      ? 'Si no puedes ver el contenido, puedes acceder directamente:'
                      : 'If you cannot see the content, you can access it directly:'}
                  </p>
                  <a
                    href='https://igeco.mx/aviso-de-privacidad/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-[#E42128] hover:text-[#CF1363] font-medium'
                  >
                    {currentLanguage === 'es'
                      ? 'Ver Aviso de Privacidad'
                      : 'View Privacy Notice'}
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer con Botones */}
            <div className='sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6'>
              <div className='flex flex-col sm:flex-row gap-4 justify-end'>
                <button
                  onClick={handleRejectPrivacy}
                  className='px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 hover:border-gray-400 transition-all duration-200'
                >
                  {currentLanguage === 'es' ? 'No Acepto' : 'I Do Not Accept'}
                </button>
                <button
                  onClick={handleAcceptPrivacy}
                  className='px-8 py-3 bg-gradient-to-r from-[#E42128] to-[#CF1363] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  {currentLanguage === 'es'
                    ? 'Acepto el Aviso de Privacidad'
                    : 'I Accept the Privacy Notice'}
                </button>
              </div>
              <p className='text-xs text-gray-500 mt-3 text-center'>
                {currentLanguage === 'es'
                  ? 'Al hacer clic en "Acepto", confirmas que has leído y aceptas nuestro aviso de privacidad'
                  : 'By clicking "I Accept", you confirm that you have read and accept our privacy notice'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Overlay para deshabilitar el formulario si no se ha aceptado */}
      {!privacyAccepted && (
        <div className='absolute inset-0 bg-gray-900/50 z-10 flex items-center justify-center'>
          <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md mx-4'>
            <div className='w-16 h-16 bg-[#E42128]/10 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-[#E42128]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 15v2m0 0v2m0-2h2m-2 0h-2m7-6a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              {currentLanguage === 'es'
                ? 'Acepta el Aviso de Privacidad'
                : 'Accept the Privacy Notice'}
            </h3>
            <p className='text-gray-600 text-sm'>
              {currentLanguage === 'es'
                ? 'Al hacer clic en "Acepto", confirmas que has leído y aceptas nuestro aviso de privacidad'
                : 'By clicking "I Accept", you confirm that you have read and accept our privacy notice'}
            </p>
          </div>
        </div>
      )}
      {/* Contenido del formulario original */}
      <div
        className={`${
          !privacyAccepted ? 'pointer-events-none opacity-50' : ''
        } transition-all duration-300`}
      >
        <div className='grid md:grid-cols-2 gap-6 mt-10'>
          <div>
            <p className='mb-4 font-semibold text-white'>
              {translates.genre} <span className='text-red-600'>*</span>
            </p>
            <ul className='items-center w-full text-sm font-medium text-white bg-gray-700 border border-gray-600 rounded-lg sm:flex'>
              <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r 0'>
                <div className='flex items-center ps-3'>
                  <input
                    id='horizontal-list-radio-license'
                    type='radio'
                    value='Hombre'
                    checked={genre === 'Hombre'}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    {...register('radio', {
                      required: `${translates.requiered}`,
                      onChange: (e) => {
                        setGenre(e.target.value)
                      },
                    })}
                  />
                  <label
                    htmlFor='horizontal-list-radio-license'
                    className='w-full py-3 ms-2 text-sm font-medium text-white '
                  >
                    {translates.genre_1}
                  </label>
                </div>
              </li>
              <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
                <div className='flex items-center ps-3'>
                  <input
                    id='horizontal-list-radio-id'
                    type='radio'
                    value='Mujer'
                    checked={genre === 'Mujer'}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    {...register('radio', {
                      required: `${translates.requiered}`,
                      onChange: (e) => {
                        setGenre(e.target.value)
                      },
                    })}
                  />
                  <label
                    htmlFor='horizontal-list-radio-id'
                    className='w-full py-3 ms-2 text-sm font-medium text-white '
                  >
                    {translates.genre_2}
                  </label>
                </div>
              </li>
              <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
                <div className='flex items-center ps-3'>
                  <input
                    id='horizontal-list-radio-id2'
                    type='radio'
                    value='Prefiero no decirlo'
                    checked={genre === 'Prefiero no decirlo'}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
                    {...register('radio', {
                      required: `${translates.requiered}`,
                      onChange: (e) => {
                        setGenre(e.target.value)
                      },
                    })}
                  />
                  <label
                    htmlFor='horizontal-list-radio-id2'
                    className='w-full py-3 ms-2 text-sm font-medium text-white '
                  >
                    {translates.genre_3}
                  </label>
                </div>
              </li>
            </ul>
            {errors.radio && (
              <p className='text-[#ffe200] font-light'>
                {errors.radio.message}
              </p>
            )}
          </div>
          <div>
            <p className='mb-4 font-semibold text-white'>
              {translates.type_register} <span className='text-red-600'>*</span>
            </p>
            <select
              {...register('typeRegister', {
                required: `${translates.requiered}`,
                onChange: (e) => setTypeRegister(e.target.value),
              })}
              defaultValue={typeRegister}
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm uppercase'
            >
              <option value='' className='text-black'>
                {translates.select_option}
              </option>
              <option value='VISITANTE' className='text-black'>
                {translates.type_register_2}
              </option>
              <option value='MEDIO' className='text-black'>
                {translates.type_register_3}
              </option>
            </select>
            {errors.typeRegister && (
              <p className='text-[#ffe200] font-light'>
                {errors.typeRegister.message}
              </p>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <p className='mt-5 text-white'>
              {translates.name} <span className='text-red-600'>*</span>
            </p>
            <div className='relative mt-2'>
              <input
                type='text'
                {...register('name', {
                  required: `${translates.requiered}`,
                  minLength: {
                    value: 3,
                    message: `${translates.min_char}`,
                  },
                  maxLength: {
                    value: 15,
                    message: `${translates.max_char}`,
                  },
                  pattern: {
                    value:
                      /^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛãõÃÕçÇñÑ ]+$/,
                    message: `${translates.numbers_symbols}`,
                  },
                  onChange: (e) => setName(e.target.value),
                })}
                name='name'
                id='name'
                className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder={translates.placeholder_name}
                autoComplete='name'
                defaultValue={name}
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
                    d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              </span>
            </div>
            {errors.name && (
              <p className='text-[#ffe200] font-light'>{errors.name.message}</p>
            )}
          </div>
          <div>
            <p className='mt-5 text-white'>
              {translates.lastname} <span className='text-red-600'>*</span>
            </p>
            <div className='relative mt-2'>
              <input
                type='text'
                {...register('paternSurname', {
                  required: `${translates.requiered}`,
                  minLength: {
                    value: 3,
                    message: `${translates.min_char}`,
                  },
                  maxLength: {
                    value: 15,
                    message: `${translates.max_char}`,
                  },
                  pattern: {
                    value:
                      /^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛãõÃÕçÇñÑ ]+$/,
                    message: `${translates.numbers_symbols}`,
                  },
                  onChange: (e) => setPaternSurname(e.target.value),
                })}
                name='paternSurname'
                id='paternSurname'
                className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder={translates.placeholder_lastname}
                autoComplete='paternSurname'
                defaultValue={paternSurname}
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
                    d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              </span>
            </div>
            {errors.paternSurname && (
              <p className='text-[#ffe200] font-light'>
                {errors.paternSurname.message}
              </p>
            )}
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <p className='mt-5 text-white'>
              {translates.code_invitation}{' '}
              <span className='text-red-600 font-bold'>
                {translates.optional}
              </span>
            </p>
            <div className='relative mt-2 '>
              <input
                type='text'
                {...register('code_invitation', {
                  onChange: (e) => setCodeInvitation(e.target.value),
                })}
                name='code_invitation'
                id='code_invitation'
                className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder={translates.placeholder_code_invitation}
                autoComplete='code_invitation'
                defaultValue={code_invitation}
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
                    d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5'
                  />
                </svg>
              </span>
            </div>
          </div>

          {/*<div>
          <p className='mt-5 text-white'>{translates.surname}</p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('maternSurname', {
                minLength: {
                  value: 3,
                  message: `${translates.min_char}`,
                },
                maxLength: {
                  value: 15,
                  message: `${translates.max_char}`,
                },
                pattern: {
                  value:
                    /^[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäëïöüÄËÏÖÜâêîôûÂÊÎÔÛãõÃÕçÇñÑ ]+$/,
                  message: `${translates.numbers_symbols}`,
                },
                onChange: (e) => setMaternSurname(e.target.value),
              })}
              name='maternSurname'
              id='maternSurname'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder={translates.placeholder_surname}
              autoComplete='maternSurname'
              defaultValue={maternSurname}
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
                  d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            </span>
          </div>
          {errors.maternSurname && (
            <p className='text-[#ffe200] font-light'>
              {errors.maternSurname.message}
            </p>
          )}
        </div>*/}

          <div>
            <p className='mt-5 text-white lowercase'>
              {translates.email} <span className='text-red-600'>*</span>
            </p>
            <div className='relative mt-2 '>
              <input
                type='email'
                {...register('email', {
                  required: `${translates.requiered}`,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: `${translates.no_email_valid}`,
                  },
                  onChange: (e) => setEmail(e.target.value),
                })}
                name='email'
                id='email'
                className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder={translates.placeholder_email}
                autoComplete='email'
                defaultValue={email}
              />

              <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </span>
            </div>
            {errors.email && (
              <p className='text-[#ffe200] font-light'>
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <p className='mt-5 text-white'>
              {translates.phone} <span className='text-red-600'>*</span>
            </p>
            <div className='relative mt-2'>
              <PhoneInputWithCountry
                name='phone'
                control={control}
                rules={{
                  required: `${translates.requiered}`,
                  validate: (value) => {
                    if (!value) {
                      return `${translates.requiered}`
                    }
                    // Validación adicional para formato de teléfono
                    if (value.length < 10) {
                      return `${
                        translates.phone_invalid ||
                        'Número de teléfono inválido'
                      }`
                    }
                    return true
                  },
                }}
                defaultValue={phone}
                onChange={(e) => setPhone(e)}
                className='w-full rounded-lg border border-gray-200 ps-4 text-sm shadow-sm'
                placeholder={translates.placeholder_phone}
              />
            </div>
            {errors.phone && (
              <p className='text-[#ffe200] font-light'>
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <p className='mt-5 text-white'>
              {translates.nacionality} <span className='text-red-600'>*</span>
            </p>
            <select
              {...register('nacionality', {
                required: `${translates.requiered}`,
                onChange: (e) => setNacionality(e.target.value),
              })}
              defaultValue={nacionality}
              className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm *:text-black'
            >
              <option value=''>{translates.select_option}</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.nacionality && (
              <p className='text-[#ffe200] font-light'>
                {errors.nacionality.message}
              </p>
            )}
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <button
            className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl text-white font-bold mt-5'
            onClick={handleSubmit(incrementStep)}
          >
            {translates.continue}
          </button>
        </div>
      </div>
    </>
  )
}
