import { useRegisterForm } from '@/store/register-form'
import { useState } from 'react'
import { SearchExihibitor } from '../shared/SearchExihibitor'

export function CheckoutEmail({ currentLanguage, translates }) {
  const {
    email,
    verify_directory,
    setEmail,
    setName,
    setPaternSurname,
    setMaternSurname,
    setPhone,
    setCompany,
    setPosition,
    setIdUser,
    setUuid,
    setVerify_directory,
    clear,
  } = useRegisterForm()

  const [message, setMessage] = useState('')

  const urlbase = import.meta.env.DEV
    ? 'http://localhost:3010/'
    : 'https://industrialtransformation.mx/server/'

  const verifyUser = async () => {
    clear()
    const response = await fetch(
      urlbase + 'verify-user-register?email=' + email
    )
    const data = await response.json()
    console.log(data)
    if (data.status) {
      setVerify_directory(true)
    } else {
      clear()
      setMessage(data.error)
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }

  return (
    <>
      {!verify_directory && (
        <section className='bg-[#ffffffda] text-black container mx-auto px-4 py-10 border rounded-2xl'>
          <div className='flex justify-center'>
            <p className='font-bold text-2xl text-black'>
              {translates.validar_txt1}
            </p>
          </div>
          <div className='flex justify-center'>
            <div className='flex-col gap-1 md:block md:relative lg:w-2/3 xl:w-1/2 mt-10 mb-5'>
              <label className='md:text-left w-fit md:absolute bg-slate-300 md:-top-6 md:left-2 md:px-3 p-1 text-black rounded-lg'>
                {translates.validar_txt2}
              </label>
              <input
                className='bg-white w-full ring-1 rounded-lg ring-slate-500 ring-offset-1 ring-offset-transparent px-4 py-3 md:py-3 md:text-xl focus:outline-none'
                type='email'
                name='email'
                placeholder='tucorreo@example.com'
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className='md:absolute md:right-2 bg-red-600 px-2 py-1 mt-3 md:mb-3 rounded-md disabled:cursor-not-allowed w-full md:w-auto text-white'
                onClick={verifyUser}
              >
                {translates.validar_btn1}
              </button>
              {message && (
                <p className='text-red-600 font-bold text-center pt-5 text-xl'>
                  {message}
                </p>
              )}
            </div>
          </div>
          <p className='flex justify-center text-black'>
            {translates.validar_txt3}
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
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>

            <a
              href={`${currentLanguage == 'en' ? '/en' : ''}/registro`}
              className='px-3 py-2 bg-red-600 hover:bg-red-500 font-bold rounded-2xl text-white gap-2'
            >
              {translates.validar_btn2}
            </a>
          </p>
        </section>
      )}
    </>
  )
}
