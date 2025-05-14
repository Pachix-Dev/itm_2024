import { useForm, useFieldArray } from 'react-hook-form'
import { useRegisterStudent } from '../../store/register-student'

export function StepTwo({ translates }) {
  const { limit_students, students, decrementStep, setStudents } =
    useRegisterStudent()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      students: Array.from(
        { length: limit_students },
        (_, i) => students[i] || { name: '', lastname: '' }
      ),
    },
  })

  const { fields } = useFieldArray({
    control,
    name: 'students',
  })

  const onSubmit = (data) => {
    setStudents(data.students)
    // Aquí puedes avanzar al siguiente paso si es necesario
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-2 gap-6'>
        {fields.map((field, idx) => (
          <div key={field.id} className='col-span-2 flex gap-6'>
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
                {translates.lastname_2} <span className='text-red-600'>*</span>
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
  )
}
