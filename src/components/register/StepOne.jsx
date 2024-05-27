import { useForm } from 'react-hook-form'
import { useRegisterForm } from '../../store/register-form'

export function StepOne() {
  const {
    name,
    paternSurname,
    maternSurname,
    email,
    phone,
    typeRegister,
    genre,
    age,
    setName,
    setPaternSurname,
    setMaternSurname,
    setEmail,
    setPhone,
    setTypeRegister,
    setGenre,
    setAge,
    incrementStep,
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
          <p className='mb-4 font-semibold text-white'>Género</p>
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
                    required: 'Género es requerido',
                    onChange: (e) => {
                      setGenre(e.target.value)
                    },
                  })}
                />
                <label
                  htmlFor='horizontal-list-radio-license'
                  className='w-full py-3 ms-2 text-sm font-medium text-white '
                >
                  Hombre
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
                    required: 'Género es requerido',
                    onChange: (e) => {
                      setGenre(e.target.value)
                    },
                  })}
                />
                <label
                  htmlFor='horizontal-list-radio-id'
                  className='w-full py-3 ms-2 text-sm font-medium text-white '
                >
                  Mujer
                </label>
              </div>
            </li>
          </ul>
          {errors.radio && (
            <p className='text-[#D70205] font-light'>{errors.radio.message}</p>
          )}
        </div>
        <div>
          <p className='mb-4 font-semibold text-gray-900 dark:text-white'>
            Tipo de Registro
          </p>
          <select
            {...register('typeRegister', {
              required: 'Tipo de registro es requerido',
              onChange: (e) => setTypeRegister(e.target.value),
            })}
            defaultValue={typeRegister}
            className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm'
          >
            <option value='' className='text-black'>
              Selecciona un tipo de registro
            </option>
            <option value='VISITANTE' className='text-black'>
              VISITANTE
            </option>
            <option value='MEDIO' className='text-black'>
              MEDIO
            </option>
            {/*<option value='ESTUDIANTE' className='text-black'>
              ESTUDIANTE
            </option>*/}
          </select>
          {errors.typeRegister && (
            <p className='text-[#D70205] font-light'>
              {errors.typeRegister.message}
            </p>
          )}
        </div>
      </div>

      <div className='grid grid-cols-3 gap-6'>
        <div>
          <p className='mt-5'>Nombre</p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('name', {
                required: 'Nombre completo  es requerido',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres',
                },
                maxLength: {
                  value: 20,
                  message: 'El nombre debe tener máximo 20 caracteres',
                },

                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                  message:
                    'No se aceptan espacios en blanco al inicio o final del nombre, ni simbolos ni números',
                },
                onChange: (e) => setName(e.target.value),
              })}
              name='name'
              id='name'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Ingresa tu nombre'
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
            <p className='text-[#D70205] font-light'>{errors.name.message}</p>
          )}
        </div>
        <div>
          <p className='mt-5'>Apellido Paterno </p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('paternSurname', {
                required: 'Nombre es requerido',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres',
                },
                maxLength: {
                  value: 15,
                  message: 'El nombre debe tener máximo 15 caracteres',
                },

                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                  message:
                    'No se aceptan espacios en blanco al inicio o final del nombre, ni simbolos ni números',
                },
                onChange: (e) => setPaternSurname(e.target.value),
              })}
              name='paternSurname'
              id='paternSurname'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Apellido paterno'
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
            <p className='text-[#D70205] font-light'>
              {errors.paternSurname.message}
            </p>
          )}
        </div>
        <div>
          <p className='mt-5'>Apellido Materno </p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('maternSurname', {
                required: 'Apellido materno  es requerido',
                minLength: {
                  value: 3,
                  message: 'El apellido debe tener al menos 3 caracteres',
                },
                maxLength: {
                  value: 15,
                  message: 'El apellido debe tener máximo 15 caracteres',
                },

                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                  message:
                    'No se aceptan espacios en blanco al inicio o final del nombre, ni simbolos ni números',
                },
                onChange: (e) => setMaternSurname(e.target.value),
              })}
              name='maternSurname'
              id='maternSurname'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder='Apellido Materno'
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
            <p className='text-[#D70205] font-light'>
              {errors.maternSurname.message}
            </p>
          )}
        </div>
      </div>

      <p className='mt-5'>Email </p>
      <div className='relative mt-2 '>
        <input
          type='email'
          {...register('email', {
            required: 'Email es requerido',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email no válido',
            },
            onChange: (e) => setEmail(e.target.value),
          })}
          name='email'
          id='email'
          className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
          placeholder='Ingresa tu email'
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
        <p className='text-[#D70205] font-light'>{errors.email.message}</p>
      )}

      <p className='mt-5'>Teléfono </p>
      <div className='relative mt-2'>
        <input
          type='tel'
          {...register('phone', {
            required: 'El teléfono es requerido',
            pattern: {
              value: /^[0-9+]+$/,
              message:
                'Teléfono inválido, no se aceptan espacios en blancon ni letras',
            },
            onChange: (e) => setPhone(e.target.value),
          })}
          defaultValue={phone}
          name='phone'
          id='phone'
          className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
          placeholder='Ingresa tu numero de teléfono'
          autoComplete='phone'
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
      {errors.phone && (
        <p className='text-[#D70205] font-light'>{errors.phone.message}</p>
      )}

      <p className='mt-5'>Rango de edad </p>
      <select
        {...register('age', {
          required: 'Tipo de registro es requerido',
          onChange: (e) => setAge(e.target.value),
        })}
        defaultValue={age}
        className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm *:text-black'
      >
        <option value=''>Selecciona un rango de edad</option>
        <option value='menor a 25 años'>menor a 25 años</option>
        <option value='entre 25 y 40 años'>entre 25 y 40 años</option>
        <option value='entre 40 y 60 años'>entre 40 y 60 años</option>
        <option value='más de 60 años'>más de 60 años</option>
      </select>
      {errors.age && (
        <p className='text-[#D70205] font-light'>{errors.age.message}</p>
      )}

      <button
        className='p-5 bg-[#D70105] rounded-lg text-white  mt-5'
        onClick={handleSubmit(incrementStep)}
      >
        Continuar
      </button>
    </>
  )
}
