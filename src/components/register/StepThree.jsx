import { useForm } from 'react-hook-form'
import { useRegisterForm } from '../../store/register-form'
import { MultiSelect } from 'react-multi-select-component'

export function StepThree({ translates }) {
  const {
    eventKnowledge,
    productInterest,
    levelInfluence,
    wannaBeExhibitor,
    alreadyVisited,
    setEventKnowledge,
    setProductInterest,
    setLevelInfluence,
    setWannaBeExhibitor,
    setAlreadyVisited,
    incrementStep,
    decrementStep,
  } = useRegisterForm()

  const options = [
    { label: 'Expo Manufactura', value: 'Expo Manufactura' },
    { label: 'Expomaq', value: 'Expomaq' },
    { label: 'Fabtech', value: 'Fabtech' },
    { label: 'Tecma', value: 'Tecma' },
    { label: 'The Logistics World', value: 'The Logistics World' },
    { label: 'Automate', value: 'Automate' },
    {
      label: 'Expo Logística y Transporte',
      value: 'Expo Logística y Transporte',
    },
    { label: 'Expo Pack', value: 'Expo Pack' },
    { label: 'Expo Eléctrica', value: 'Expo Eléctrica' },
    { label: 'Meximold', value: 'Meximold' },
    { label: 'Fitma', value: 'Fitma' },
    { label: 'ITMS', value: 'ITMS' },
    { label: 'Hannover Messe (Alemania)', value: 'Hannover Messe (Alemania)' },
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  return (
    <>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-white'>
            {translates.how_find} <span className='text-red-600'>*</span>
          </p>
          <select
            {...register('eventKnowledge', {
              required: `${translates.requiered}`,
              onChange: (e) => setEventKnowledge(e.target.value),
            })}
            defaultValue={eventKnowledge}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black uppercase'
          >
            <option value=''>{translates.select_option}</option>
            <option value='ESPECTACULAR'>{translates.spectacular}</option>
            <option value='PAGINA WEB'>{translates.website}</option>
            <option value='CORREO ELÉCTRONICO/MAILING'>MAILING</option>
            <option value='FACEBOOK'>FACEBOOK</option>
            <option value='TWITTER'>TWITTER</option>
            <option value='LINKEDIN'>LINKEDIN</option>
            <option value='INSTAGRAM'>INSTAGRAM</option>
            <option value='CORREO ELECTRÓNICO'>{translates.email}</option>
            <option value='INVITADO POR EXPOSITOR'>
              {translates.guest_by_exhibitor}
            </option>
            <option value='RADIO'>RADIO</option>
            <option value='TELEVISIÓN'>{translates.television}</option>
            <option value='PRENSA'>{translates.press}</option>
            <option value='ANUNCIO EN REVISTA'>{translates.magazine_ad}</option>
            <option value='TELEMARKETING'>TELEMARKETING</option>
          </select>
          {errors.eventKnowledge && (
            <p className='text-[#ffe200] font-light'>
              {errors.eventKnowledge.message}
            </p>
          )}
        </div>
        <div>
          <p className='font-semibold text-white'>
            {translates.product_interest}{' '}
            <span className='text-red-600'>*</span>
          </p>
          <select
            {...register('productInterest', {
              required: `${translates.requiered}`,
              onChange: (e) => setProductInterest(e.target.value),
            })}
            defaultValue={productInterest}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black uppercase'
          >
            <option value=''>{translates.select_option}</option>
            {translates.list_interest_product.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.productInterest && (
            <p className='text-[#ffe200] font-light'>
              {errors.productInterest.message}
            </p>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-white'>
            {translates.level_influence} <span className='text-red-600'>*</span>
          </p>
          <select
            {...register('levelInfluence', {
              required: `${translates.requiered}`,
              onChange: (e) => setLevelInfluence(e.target.value),
            })}
            defaultValue={levelInfluence}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black uppercase'
          >
            <option value=''>{translates.select_option}</option>
            <option value='APRUEBO COMPRAS'>
              {translates.approve_purchases}
            </option>
            <option value='EVALUO O RECOMIENDO PROVEEDOR'>
              {translates.test_recomend}
            </option>
            <option value='NO TENGO DECISIÓN EN COMPRAS'>
              {translates.not_decide}
            </option>
          </select>
          {errors.levelInfluence && (
            <p className='text-[#ffe200] font-light'>
              {errors.levelInfluence.message}
            </p>
          )}
        </div>
        <div>
          <p className='font-semibold text-white'>
            {translates.wanna_be_exhibitor}{' '}
            <span className='text-red-600'>*</span>
          </p>
          <select
            {...register('wannaBeExhibitor', {
              required: `${translates.requiered}`,
              onChange: (e) => setWannaBeExhibitor(e.target.value),
            })}
            defaultValue={wannaBeExhibitor}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black uppercase'
          >
            <option value=''>{translates.select_option}</option>
            <option value='SI'>{translates.yes}</option>
            <option value='NO'>{translates.no}</option>
          </select>
          {errors.wannaBeExhibitor && (
            <p className='text-[#ffe200] font-light'>
              {errors.wannaBeExhibitor.message}
            </p>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-white'>
            {translates.already_visited}
          </p>
          <MultiSelect
            options={options}
            value={alreadyVisited}
            onChange={setAlreadyVisited}
            labelledBy='Select'
            className='mt-2 w-full text-sm text-white *:text-black uppercase'
            hasSelectAll={false}
          />
          {/*<select
            {...register('alreadyVisited', {
              onChange: (e) => setAlreadyVisited(e.target.value),
            })}
            defaultValue={alreadyVisited}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>{translates.select_option}</option>
            <option value='Expo Manufactura'>Expo Manufactura</option>
            <option value='Expomaq'>Expomaq</option>
            <option value='Fabtech'>Fabtech</option>
            <option value='Tecma'>Tecma</option>
            <option value='The Logistics World'>The Logistics World</option>
            <option value='Automate'>Automate</option>
            <option value='Expo Logística y Transporte'>
              Expo Logística y Transporte
            </option>
            <option value='Expo Pack'>Expo Pack</option>
            <option value='Expo Eléctrica'>Expo Eléctrica</option>
            <option value='Meximold'>Meximold</option>
            <option value='Fitma'>Fitma</option>
            <option value='Fitma'>ITMS </option>
            <option value='Fitma'>Hannover Messe (Alemania)</option>
          </select>
          {errors.alreadyVisited && (
            <p className='text-[#ffe200] font-light'>
              {errors.alreadyVisited.message}
            </p>
          )}*/}
        </div>
      </div>
      <div className='flex justify-between'>
        <button
          className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl font-bold text-white  mt-5 flex gap-2'
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
          </svg>{' '}
          {translates.back}
        </button>
        <button
          className='px-3 py-2 bg-[#E42128] hover:bg-red-700 rounded-2xl text-white font-bold mt-5 flex gap-2'
          onClick={handleSubmit(incrementStep)}
        >
          {translates.continue}
        </button>
      </div>
    </>
  )
}
