import { useForm, useFieldArray } from 'react-hook-form'
import { useRegisterStudent } from '../../store/register-student'
import { useState } from 'react'

export function StepTwo({ translates, currentLanguage }) {
  const [processing, setProcessing] = useState(false)
  const { message, setMessage } = useState()

  const {
    name,
    lastname,
    email,
    phone,
    company,
    limit_students,
    students,
    setCompleteRegister,
    decrementStep,
    setStudents,
  } = useRegisterStudent()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      students: Array.from(
        { length: limit_students },
        (_, i) =>
          students[i] || { name: '', lastname: '', level_study: '', career: '' }
      ),
    },
  })

  const { fields } = useFieldArray({
    control,
    name: 'students',
  })

  const urlbase = import.meta.env.DEV
    ? 'http://localhost:3010/'
    : 'https://industrialtransformation.mx/server/'

  const onSubmit = async (data) => {
    setStudents(data.students)
    setProcessing(true)
    const response = await fetch(urlbase + 'free-register-student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        lastname,
        email,
        phone,
        company,
        limit_students,
        students,
      }),
    })
    const json = await response.json()
    console.log(json)
    if (json.status) {
      setProcessing(false)
      setCompleteRegister(true)
      currentLanguage === 'es'
        ? (window.location.href = '/gracias-por-tu-registro-estudiante')
        : (window.location.href = '/en/gracias-por-tu-registro-estudiante')
    } else {
      setProcessing(false)
      setMessage(json?.message)
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div className='grid grid-cols-2 gap-6'>
          {fields.map((field, idx) => (
            <div key={field.id} className='col-span-2'>
              <p className='font-bold text-white text-2xl mt-5'>
                {translates.student} {idx + 1}
              </p>
              <div key={field.id} className='col-span-2 flex gap-6 flex-wrap'>
                <div>
                  <p className='mt-5 text-white'>
                    {translates.name} <span className='text-red-600'>*</span>
                  </p>
                  <div className='relative mt-2'>
                    <input
                      type='text'
                      {...register(`students.${idx}.name`, {
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
                      })}
                      className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder={translates.placeholder_name}
                      autoComplete='name'
                    />
                  </div>
                  {errors.students?.[idx]?.name && (
                    <p className='text-[#ffe200] font-light'>
                      {errors.students[idx].name.message}
                    </p>
                  )}
                </div>
                <div>
                  <p className='mt-5 text-white'>
                    {translates.lastname_2}{' '}
                    <span className='text-red-600'>*</span>
                  </p>
                  <div className='relative mt-2'>
                    <input
                      type='text'
                      {...register(`students.${idx}.lastname`, {
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
                      })}
                      className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder={translates.lastname_2}
                      autoComplete='lastname'
                    />
                  </div>
                  {errors.students?.[idx]?.lastname && (
                    <p className='text-[#ffe200] font-light'>
                      {errors.students[idx].lastname.message}
                    </p>
                  )}
                </div>
                <div>
                  <p className='mt-5 text-white'>
                    {translates.level_study}{' '}
                    <span className='text-red-600'>*</span>
                  </p>
                  <div className='relative mt-2'>
                    <select
                      {...register(`students.${idx}.level_study`, {
                        required: `${translates.requiered}`,
                      })}
                      className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm *:text-black'
                      defaultValue=''
                    >
                      <option value='' disabled>
                        Seleccione una opción
                      </option>
                      <option value='Bachillerato'>
                        {translates.baccalaureate}
                      </option>
                      <option value='Carrera técnica'>
                        {translates.technical_career}
                      </option>
                      <option value='Licenciatura'>
                        {translates.bachelor_s_Degree}
                      </option>
                      <option value='Ingenieria'>
                        {translates.engineering}
                      </option>
                    </select>
                  </div>
                  {errors.students?.[idx]?.level_study && (
                    <p className='text-[#ffe200] font-light'>
                      {errors.students[idx].level_study.message}
                    </p>
                  )}
                </div>
                <div>
                  <p className='mt-5 text-white'>
                    {translates.career} <span className='text-red-600'>*</span>
                  </p>
                  <div className='relative mt-2'>
                    <input
                      type='text'
                      {...register(`students.${idx}.career`, {
                        required: `${translates.requiered}`,
                        minLength: {
                          value: 2,
                          message: `${translates.min_char}`,
                        },
                        maxLength: {
                          value: 30,
                          message: `${translates.max_char}`,
                        },
                      })}
                      className='w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm shadow-sm'
                      placeholder={translates.placeholder_career || 'Carrera'}
                      autoComplete='off'
                    />
                  </div>
                  {errors.students?.[idx]?.career && (
                    <p className='text-[#ffe200] font-light'>
                      {errors.students[idx].career.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-between '>
          <button
            type='button'
            className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl text-white font-bold mt-5'
            onClick={decrementStep}
          >
            {translates.back}
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            type='submit'
            className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl text-white font-bold mt-5'
          >
            {translates.finish}
          </button>
        </div>
      </div>
      {message && (
        <p className='mt-5 text-red-600 font-bold text-center'>{message}</p>
      )}
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
