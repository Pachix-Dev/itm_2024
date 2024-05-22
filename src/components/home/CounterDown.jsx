import { useCountdown } from '../../hooks/useCounterDown.js'

export function CounterDown({ dias, horas, minutos, segundos }) {
  const { days, hours, minutes, seconds } = useCountdown('9 oct 2024 09:00:00')
  return (
    <div className='text-white bg-transparent bg-opacity-50 backdrop-blur-md flex text-center md:grid md:text-left lg:flex lg:text-center justify-center gap-6 text-md md:text-3xl font-semibold py-5 px-5 md:px-8 border rounded-lg'>
      <div>
        <span className='font-extrabold  text-4xl md:text-6xl'>{days}</span>{' '}
        {dias}
      </div>
      <div>
        <span className='font-extrabold text-4xl md:text-6xl'>{hours}</span>{' '}
        {horas}
      </div>
      <div>
        <span className='font-extrabold text-4xl md:text-6xl'>{minutes}</span>{' '}
        {minutos}
      </div>
      <div>
        <span className='font-extrabold text-4xl md:text-6xl'>{seconds}</span>{' '}
        {segundos}
      </div>
    </div>
  )
}
