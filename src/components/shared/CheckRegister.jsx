import { useState} from 'react';
import { useRegisterForm } from '../../store/register-form'

export const CheckRegister = ({translations}) => {

    const {description, btn, emailExample, registerNow, freeRegister, programUrl} = translations;

    const [message, setMessage] = useState('')
    const { email, setEmail } = useRegisterForm()

    //const urlbase = 'https://demo.industrialtransformation.mx/server/'
    const urlbase = 'http://localhost:3010/';

    const verifyUser = async () => {
        const response = await fetch(urlbase + 'get-user-by-email?email=' + email + '&requireNonVip=false')
        const json = await response.json()
        if (response.status === 200) {
            sessionStorage.setItem('validate-register', 'true')
            window.location.href = programUrl
        } else {
            setMessage(json.message)
        }
    }

    return (
        <div className='flex flex-col gap-1 md:block md:relative lg:mx-auto lg:w-2/3 xl:w-1/2 mt-5 md:mt-20'>
            <label
                htmlFor='email'
                className='md:text-left w-fit md:absolute bg-[#111827] md:-top-6 md:left-2 md:px-3 py-2'
            >
                {description}
            </label>
            <input
                className={`bg-transparent w-full ring-1 rounded-lg ring-[#E42128] ring-offset-2 ring-offset-transparent px-4 py-3 md:py-5 md:text-xl focus:outline-none`}
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailExample}
                onKeyDown={(e) => { if (e.key === 'Enter') verifyUser() }}
            />
            <button
                className={`md:absolute md:right-3 bg-[#E42128] px-4 py-2 mt-3 md:mb-3 rounded-md disabled:cursor-not-allowed w-full md:w-auto`}
                onClick={verifyUser}
            >
                {btn}
            </button>
            {message && (
                <p className='text-red-600 font-bold text-center pt-5 text-xl'>
                    {message}
                </p>
            )}
            <p className='mt-10 text-center'>
                {registerNow}{' -> '}
                <a
                    href='/registro'
                    className='px-3 py-2 bg-[#E42128] hover:bg-red-700 font-bold rounded-2xl text-white  mt-5  gap-2'
                >
                    {freeRegister}
                </a>
            </p>
        </div>
    )
}