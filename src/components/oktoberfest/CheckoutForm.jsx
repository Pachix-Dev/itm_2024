import { useForm } from 'react-hook-form'
import { useOktoberfest } from '../../store/oktoberfest-cart'
import { useState } from 'react'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js'

export function CheckoutForm({ currentLanguage, translate }) {
  const {
    items,
    name,
    email,
    phone,
    company,
    hour,
    comments,
    completed,
    setName,
    setEmail,
    setPhone,
    setCompany,
    setHour,
    setComments,
    setCompleted,
    setcomplete_purchase,
    setInvoiceDownToLoad,
    total,
    clearCart,
  } = useOktoberfest()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const onSubmit = () => setCompleted(true)
  const [processing, setProcessing] = useState(false)
  const [message, setMessage] = useState('')

  const initialOptions = {
    clientId:
      'AZFPcXoEcNQyoYLYV-jTqEi3_ufNa3cPvWkEg741EYryPSimjaBL45KMgWHjVWd90Qn_QHT1lFI0sZUn',
    //'ASXsJEVjLguO7vsn4IOGxaFeZp0FzEkMErWxv6Foin2-niMwBWX_0ryUceIDzdiD-WNQy-WvdMx-lIwf',
    currency: 'MXN',
    intent: 'capture',
  }
  const style = { layout: 'vertical' }

  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer()

    return (
      <>
        {showSpinner && isPending && <div className='spinner' />}
        <PayPalButtons
          className='py-5'
          style={style}
          disabled={false}
          forceReRender={[style]}
          fundingSource={undefined}
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </>
    )
  }

  if (items.length === 0) {
    return (
      <div className='flex-1 flex flex-col justify-center items-center h-screen'>
        <p className='text-2xl font-bold'>{translate.empty_cart}</p>
        <a
          href='/oktoberfest-reservaciones'
          className='bg-[#002C5B] hover:bg-[#941E81] text-white rounded-lg p-4 mt-5'
        >
          {translate.back_to_shop}
        </a>
      </div>
    )
  }

  //const urlbase = 'https://industrialtransformation.mx/server/'
  const urlbase = 'http://localhost:3010/'

  async function createOrder() {
    const response = await fetch(urlbase + 'create-order-oktoberfest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        hour,
        total: total.toFixed(2),
      }),
    })
    const order = await response.json()
    if (!order?.status) {
      setMessage(order.message)
      setTimeout(() => {
        setMessage('')
      }, 5000)
      return
    }
    return order.id
  }

  async function onApprove(data) {
    setProcessing(true)
    const response = await fetch(urlbase + 'complete-order-oktoberfest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: data.orderID,
        items,
        total: total.toFixed(2),
        name,
        email,
        hour,
        comments,
        phone,
        company,
        currentLanguage,
      }),
    })
    const orderData = await response.json()
    if (orderData.status) {
      clearCart()
      setcomplete_purchase(true)
      setInvoiceDownToLoad(orderData?.invoice)
      window.location.href = '/oktoberfest-gracias-por-tu-compra'
    } else {
      setProcessing(false)
      setMessage(orderData?.message)
    }
  }

  return (
    <>
      <div className='px-4 py-7 sm:px-6 lg:px-8 border rounded-2xl shadow-lg'>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>{translate.register_data}</p>
          <button
            onClick={() => setCompleted(false)}
            className='text-[#941E81] font-bold flex'
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
                d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
              />
            </svg>{' '}
            {translate.edit}
          </button>
        </div>
        {completed ? (
          <div className='mt-4 grid sm:grid-cols-2 gap-5'>
            <div className='flex gap-2'>
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
                  d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
              <div className='font-bold'>{name}</div>
            </div>

            <div className='flex gap-2'>
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
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>
              <div className='font-bold'>{email}</div>
            </div>

            <div className='flex gap-2'>
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
                  d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                />
              </svg>

              <div className='font-bold'>{phone}</div>
            </div>

            <div className='flex gap-2'>
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
                  d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
                />
              </svg>
              <div className='font-bold'>{company}</div>
            </div>
          </div>
        ) : (
          <>
            <p className='mt-4 text-gray-500 font-bold'>
              {translate.check_info}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='mx-auto mb-0 mt-8 '
            >
              <div className='relative'>
                <input
                  type='text'
                  {...register('name', {
                    required: translate.required,
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                      message: translate.spacesNotAllowed,
                    },
                    onChange: (e) => setName(e.target.value),
                  })}
                  name='name'
                  id='name'
                  defaultValue={name}
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder={translate.fullname}
                  autoComplete='name'
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

                {errors.name && (
                  <p style={{ color: 'red' }}>{errors.name.message}</p>
                )}
              </div>
              <div className='relative mt-5 '>
                <input
                  type='email'
                  {...register('email', {
                    required: translate.required,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: translate.novalidEmail,
                    },
                    onChange: (e) => setEmail(e.target.value),
                  })}
                  defaultValue={email}
                  name='email'
                  id='email'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder={translate.email}
                  autoComplete='email'
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

                {errors.email && (
                  <p style={{ color: 'red' }}>{errors.email.message}</p>
                )}
              </div>
              <div className='relative mt-5'>
                <input
                  type='number'
                  {...register('phone', {
                    required: translate.required,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: translate.novalidPhone,
                    },
                    onChange: (e) => setPhone(e.target.value),
                  })}
                  defaultValue={phone}
                  name='phone'
                  id='phone'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder={translate.phone}
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

                {errors.phone && (
                  <p style={{ color: 'red' }}>{errors.phone.message}</p>
                )}
              </div>
              <div className='relative mt-5'>
                <input
                  type='text'
                  {...register('company', {
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ]+(\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/,
                      message: translate.spacesNotAllowed,
                    },
                    onChange: (e) => setCompany(e.target.value),
                  })}
                  name='company'
                  id='company'
                  defaultValue={company}
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder={translate.company}
                  autoComplete='company'
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
              <div className='relative mt-5'>
                <p>{translate.select_hour}</p>
                <p>{translate.text_select}</p>
                <select
                  {...register('hour', {
                    required: translate.required,
                    onChange: (e) => setHour(e.target.value),
                  })}
                  defaultValue={hour}
                  className='mt-2  rounded-lg border border-gray-200 p-4 pe-12 text-sm uppercase '
                >
                  <option value='' className='text-black'>
                    {translate.select_default}
                  </option>
                  <option value={translate.option1} className='text-black'>
                    {translate.option1}
                  </option>
                  <option value={translate.option2} className='text-black'>
                    {translate.option2}
                  </option>
                  <option value={translate.option3} className='text-black'>
                    {translate.option3}
                  </option>
                  <option value={translate.option4} className='text-black'>
                    {translate.option4}
                  </option>
                  <option value={translate.option5} className='text-black'>
                    {translate.option5}
                  </option>
                  <option value={translate.option6} className='text-black'>
                    {translate.option6}
                  </option>
                </select>
                {errors.hour && (
                  <p style={{ color: 'red' }}>{errors.hour.message}</p>
                )}
              </div>
              <div className='relative mt-5'>
                <p>{translate.comments}: </p>
                <textarea
                  {...register('comments')}
                  defaultValue={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className='w-full mt-5 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='...'
                ></textarea>
              </div>
              <div className='flex gap-4 mt-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>{' '}
                {translate.disclamer_1}
              </div>
              <div className=' flex gap-4 mt-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z'
                  />
                </svg>{' '}
                {translate.disclamer_2}
              </div>
              <div className='flex gap-4 mt-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
                  />
                </svg>{' '}
                {translate.disclamer_3}
              </div>
              <div className='flex gap-4 mt-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                  />
                </svg>

                <p
                  dangerouslySetInnerHTML={{ __html: translate.disclamer_4 }}
                ></p>
              </div>
              <p className='mt-2'>* {translate.disclamer_5}</p>
              <p className='mt-2'>* {translate.disclamer_6}</p>
              <button
                type='submit'
                className='mt-10 w-full inline-block rounded-lg bg-black hover:bg-slate-700 px-5 py-3 text-2xl font-bold text-white'
              >
                {translate.continue}
              </button>
            </form>
          </>
        )}
      </div>
      <div className='mt-5 px-7 py-7 mx-auto border rounded-2xl shadow-lg'>
        <p className='font-bold text-2xl'>{translate.method_payment}</p>
        <PayPalScriptProvider options={initialOptions}>
          {completed && <ButtonWrapper showSpinner={false} />}
        </PayPalScriptProvider>
        <p className='text-red-600 font-bold text-center'>{message}</p>
      </div>
      {processing && (
        <div className='absolute top-0 left-0 bg-gray-400 bg-opacity-85 z-[999] w-full h-screen'>
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
