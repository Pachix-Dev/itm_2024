import { useForm } from 'react-hook-form'
import { useRegisterForm } from '../../store/register-form'

export function StepThree() {
  const {
    eventKnowledge,
    productInterest,
    levelInfluence,
    wannaBeExhibitor,
    setEventKnowledge,
    setProductInterest,
    setLevelInfluence,
    setWannaBeExhibitor,
    setCompleteRegister,
    incrementStep,
    decrementStep,
    clear,
  } = useRegisterForm()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  return (
    <>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            ¿Cómo se enteró del evento?
          </p>
          <select
            {...register('eventKnowledge', {
              required: 'este campo es requerido',
              onChange: (e) => setEventKnowledge(e.target.value),
            })}
            defaultValue={eventKnowledge}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='FACEBOOK'>FACEBOOK</option>
            <option value='TWITTER'>TWITTER</option>
            <option value='LINKEDIN'>LINKEDIN</option>
            <option value='INSTAGRAM'>INSTAGRAM</option>
            <option value='CORREO ELECTRÓNICO'>CORREO ELECTRÓNICO</option>
            <option value='INVITADO POR EXPOSITOR'>
              INVITADO POR EXPOSITOR
            </option>
            <option value='RADIO'>RADIO</option>
            <option value='TELEVISIÓN'>TELEVISIÓN</option>
            <option value='PRENSA'>PRENSA</option>
            <option value='ANUNCIO EN REVISTA'>ANUNCIO EN REVISTA</option>
            <option value='TELEMARKETING'>TELEMARKETING</option>
          </select>
          {errors.eventKnowledge && (
            <p className='text-[#D70205] font-light'>
              {errors.eventKnowledge.message}
            </p>
          )}
        </div>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            Producto de interés
          </p>
          <select
            {...register('productInterest', {
              required: 'Este campo es requerido',
              onChange: (e) => setProductInterest(e.target.value),
            })}
            defaultValue={productInterest}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='AUTOMATIZACIÓN'>AUTOMATIZACIÓN</option>
            <option value='ROBOTIZACIÓN Y TRANSMISIÓN DE PODER'>
              ROBOTIZACIÓN Y TRANSMISIÓN DE PODER
            </option>
            <option value='MÁQUINAS Y HERRAMIENTAS'>
              MÁQUINAS Y HERRAMIENTAS
            </option>
            <option value='AEROESPACIAL'>AEROESPACIAL</option>
            <option value='LOGÍSTICA INTELIGENTE'>LOGÍSTICA INTELIGENTE</option>
            <option value='MANUFACTURA DIGITAL'>MANUFACTURA DIGITAL</option>
            <option value='GOBIERNO'>GOBIERNO</option>
            <option value='SOLUCIONES DE ENERGÍA'>SOLUCIONES DE ENERGÍA</option>
            <option value='INSTITUCIONES DE INVESTIGACIÓN'>
              INSTITUCIONES DE INVESTIGACIÓN
            </option>
            <option value='MANUFACTURA ADITIVA'>MANUFACTURA ADITIVA</option>
            <option value='E-MOBILITY'>E-MOBILITY</option>
            <option value='DATA & SOFTWARE'>DATA & SOFTWARE</option>
          </select>
          {errors.productInterest && (
            <p className='text-[#D70205] font-light'>
              {errors.productInterest.message}
            </p>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-6 mt-5'>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            Nivel de influencia
          </p>
          <select
            {...register('levelInfluence', {
              required: 'este campo es requerido',
              onChange: (e) => setLevelInfluence(e.target.value),
            })}
            defaultValue={levelInfluence}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='EVALUO O RECOMIENDO PROVEEDOR'>
              EVALÚO O RECOMIENDO PROVEEDOR
            </option>
            <option value='APRUEBO COMPRAS'>APRUEBO COMPRAS</option>
            <option value='NO TENGO DECISIÓN EN COMPRAS'>
              NO TENGO DECISIÓN EN COMPRAS
            </option>
          </select>
          {errors.levelInfluence && (
            <p className='text-[#D70205] font-light'>
              {errors.levelInfluence.message}
            </p>
          )}
        </div>
        <div>
          <p className='font-semibold text-gray-900 dark:text-white'>
            ¿Considerarías ser expositor en nuestra feria en próximas ediciones?
          </p>
          <select
            {...register('wannaBeExhibitor', {
              required: 'Este campo es requerido',
              onChange: (e) => setWannaBeExhibitor(e.target.value),
            })}
            defaultValue={wannaBeExhibitor}
            className='mt-2 w-full rounded-lg bg-transparent border border-gray-200 p-4 pe-12 text-sm text-white *:text-black'
          >
            <option value=''>Selecciona una opción</option>
            <option value='SI'>SI</option>
            <option value='NO'>NO</option>
          </select>
          {errors.wannaBeExhibitor && (
            <p className='text-[#D70205] font-light'>
              {errors.wannaBeExhibitor.message}
            </p>
          )}
        </div>
      </div>
      <div className='flex justify-between'>
        <button
          className='p-5 bg-[#D70105] rounded-lg text-white  mt-5'
          onClick={decrementStep}
        >
          Regresar
        </button>
        <button
          className='p-5 bg-[#D70105] rounded-lg text-white  mt-5'
          onClick={handleSubmit(incrementStep)}
        >
          Continuar
        </button>
      </div>
    </>
  )
}
