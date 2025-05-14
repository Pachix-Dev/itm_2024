import { useForm } from 'react-hook-form'
import { useRegisterStudent } from '../../store/register-student'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import 'react-phone-number-input/style.css'
import './Form.css'

export function StepOne({ translates }) {
  const {
    name,
    lastname,
    email,
    phone,
    company,
    limit_students,
    setLimitStudents,
    setCompany,
    setName,
    setLastname,
    setEmail,
    setPhone,
    incrementStep,
  } = useRegisterStudent()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  return (
    <>
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
            {translates.lastname_2} <span className='text-red-600'>*</span>
          </p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('lastname', {
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
                onChange: (e) => setLastname(e.target.value),
              })}
              name='lastname'
              id='lastname'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder={translates.placeholder_lastname}
              autoComplete='lastname'
              defaultValue={lastname}
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
          {errors.lastname && (
            <p className='text-[#ffe200] font-light'>
              {errors.lastname.message}
            </p>
          )}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <div>
          <p className='mt-5 text-white'>
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
            <p className='text-[#ffe200] font-light'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <p className='mt-5 text-white'>
            {translates.institute} <span className='text-red-600'>*</span>
          </p>
          <div className='relative mt-2'>
            <input
              type='text'
              {...register('company', {
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
                onChange: (e) => setCompany(e.target.value),
              })}
              name='company'
              id='company'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder={translates.placeholder_institute}
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
            <p className='text-[#ffe200] font-light'>
              {errors.company.message}
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
              rules={{ required: true }}
              defaultValue={phone}
              onChange={(e) => setPhone(e)}
              className='w-full rounded-lg border border-gray-200 ps-4 text-sm shadow-sm'
              placeholder={translates.placeholder_phone}
            />
          </div>
          {errors.phone && (
            <p className='text-[#ffe200] font-light'>{errors.phone.message}</p>
          )}
        </div>
        <div>
          <p className='mt-5 text-white'>
            {translates.number_student} <span className='text-red-600'>*</span>
          </p>
          <div className='relative mt-2'>
            <input
              type='number'
              {...register('limit_students', {
                required: `${translates.requiered}`,
                min: {
                  value: 1,
                  message: `${translates.min_student}`,
                },
                max: {
                  value: 40,
                  message: `${translates.max_student}`,
                },
                onChange: (e) => setLimitStudents(e.target.value),
              })}
              name='limit_students'
              id='limit_students'
              className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
              placeholder={translates.placeholder_number_student}
              autoComplete='limit_students'
              defaultValue={limit_students}
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
          {errors.limit_students && (
            <p className='text-[#ffe200] font-light'>
              {errors.limit_students.message}
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
    </>
  )
}
