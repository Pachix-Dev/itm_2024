import { useState } from 'react'
import { useRegisterForm } from '../../store/register-form'

export function Coupon({ currentLanguage }) {
  const [isValidCoupon, setIsValidCoupon] = useState(null)
  const [couponStatus, setCouponStatus] = useState(null)
  const {
    code_cortesia,
    setCode_cortesia,
    addDiscount,
    user_id,
    name,
    paternSurname,
    maternSurname,
    phone,
    email,
    position,
    company,
    total,
    typeRegister,
    items,
    setCompleteRegister,
    setInvoiceDownToLoad,
    clear,
  } = useRegisterForm()

  const urlbase = import.meta.env.DEV
    ? 'http://localhost:3010/'
    : 'https://industrialtransformation.mx/server/'

  const handleCouponChange = (e) => {
    setCode_cortesia(e.target.value)
    setIsValidCoupon(null)
  }

  const checkCoupon = async (e) => {
    e.preventDefault()
    setCode_cortesia('')
    setCouponStatus('Aplicando código de descuento...')
    const response = await fetch(urlbase + 'check-cortesia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code_cortesia,
        user_id,
        total,
        items,
        name,
        paternSurname,
        maternSurname,
        phone,
        email,
        position,
        company,
        typeRegister,
        currentLanguage,
      }),
    })

    const data = await response.json()
    console.log('Respuesta del servidor:', data)
    if (data.status) {
      if (data.next) {
        clear()
        setCompleteRegister(true)
        setInvoiceDownToLoad(data?.invoice)
        currentLanguage === 'es'
          ? (window.location.href = '/gracias-por-tu-compra')
          : (window.location.href = '/en/gracias-por-tu-compra')
      } else {

        if(items.find(item => item.isDiscount)) {
          setCouponStatus('Solo se puede usar un codigo de descuento a la vez...')
          setIsValidCoupon(true)
          return
        }

        addDiscount({
        id: data.result.id,
        name: data.result.code,
        price: total * (data.result.discount_percent / 100),
        isDiscount: true,
        })

        setCouponStatus('¡Código de descuento aplicado!')
        setIsValidCoupon(true)
      }
    } else {
      setCouponStatus('Código de descuento inválido o expirado.')
      setIsValidCoupon(false)
    }
  }

  // Determine button classes based on whether the input is empty
  const buttonClasses = code_cortesia.trim()
    ? 'bg-[#E42128] text-white font-bold p-2 rounded-xl'
    : 'bg-gray-400 text-white font-bold p-2 rounded-xl'

  // Determine status message class based on validation result
  const statusMessageClasses = isValidCoupon
    ? 'text-green-600 font-bold'
    : 'text-red-600 font-bold'

  return (
    <>
      <div className='flex gap-4 justify-between pt-5'>
        <input
          type='text'
          className='w-full border-2 border-gray-300 rounded-lg px-2 py-1 focus:border-[#941E81] focus: focus:ring-[#941E81] text-black'
          placeholder='Código de descuento'
          value={code_cortesia}
          onChange={handleCouponChange}
        />
        <button
          className={buttonClasses}
          onClick={checkCoupon}
          disabled={!code_cortesia.trim()}
        >
          Aplicar
        </button>
      </div>
      {couponStatus && (
        <p className={isValidCoupon !== null ? statusMessageClasses : ''}>
          {couponStatus}
        </p>
      )}
    </>
  )
}
