import { useState, useRef, useEffect } from 'react';
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer,
} from '@paypal/react-paypal-js'
import { useRegisterForm } from '../../store/register-form'

export function Upgrade() {

	const {
		email,
		setCompleteRegister,
		setInvoiceDownToLoad,
	} = useRegisterForm()

	const [user, setUser] = useState();
	const [message, setMessage] = useState('')
	const [processing, setProcessing] = useState(false)

	const emailRef = useRef();

	const style = { layout: 'vertical' }
	const initialOptions = {
		clientId:
			'ASXsJEVjLguO7vsn4IOGxaFeZp0FzEkMErWxv6Foin2-niMwBWX_0ryUceIDzdiD-WNQy-WvdMx-lIwf',
		currency: 'MXN',
		intent: 'capture',
	}

	const total = 7500.00;
	const item = {
		id: 2,
		name: 'Premium',
		price: 7500,
		include: [
			'Acceso a piso de expositor',
			'Acceso Leaders of tomorrow',
			'Acceso a la zona de networking',
			'Acceso Cocktel VIP',
			'Acceso conferencias VIP',
			'Paquete de bienvenida',
		],
	}

	//const urlbase = 'https://demo.industrialtransformation.mx/server/'
	const urlbase = 'http://localhost:3010/';

	useEffect(() => {
		if (email) {
			emailRef.current.value = email
			verifyUser()
		}
	}, [])

	const verifyUser = async () => {
		const response = await fetch(urlbase + 'get-user-by-email?email=' + emailRef.current.value);
		const json = await response.json();
		console.log(json)
		if (response.status === 200) {
			setUser(json);
			setMessage('');
		} else {
			setUser(null);
			setMessage(json.message);
		}
	}

	async function createOrder() {
		const response = await fetch(
			urlbase + 'create-order',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					total: total
				}),
			}
		)
		const order = await response.json()
		return order.id
	}

	async function onApprove(data) {
		setProcessing(true)
		const response = await fetch(
			urlbase + 'upgrade-user',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					orderID: data.orderID,
					total,
					item,
					...user
				}),
			}
		)
		const orderData = await response.json()
		if (orderData.status) {
			//clear()
			setCompleteRegister(true)
			setInvoiceDownToLoad(orderData?.invoice)
			window.location.href = '/gracias-por-registrarte'
		} else {
			setProcessing(false)
			setMessage(orderData?.message)
			setTimeout(() => {
				setMessage('')
			}, 5000)
		}
	}

	const ButtonWrapper = ({ showSpinner }) => {
		const [{ isPending }] = usePayPalScriptReducer()

		return (
			<>
				{showSpinner && isPending && <div className='spinner' />}
				<PayPalButtons
					className='py-5 text-white w-full 2xl:w-10/12 mx-auto 2xl:pt-10'
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

	return (
		<>
			<div className="flex flex-col gap-1 md:block md:relative lg:mx-auto lg:w-2/3 xl:w-1/2 mt-5 md:mt-20">
				<label
					htmlFor="email"
					className="md:text-left w-fit md:absolute bg-[#111827] md:-top-6 md:left-2 md:px-3 py-2">
					Ingresa el correo con el que te registraste
				</label>
				<input
					className={`bg-transparent w-full ring-1 rounded-lg ${user ? 'ring-emerald-700' : 'ring-[#E42128]'} ring-offset-2 ring-offset-transparent px-4 py-3 md:py-5 md:text-xl focus:outline-none`}
					type="email"
					name="email"
					ref={emailRef}
					placeholder="tucorreo@hola.com"
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							verifyUser();
						}
						if (user) {
							setUser(null);
						}
					}}
				/>
				<button
					className={`md:absolute md:right-3 ${user ? 'bg-emerald-700' : 'bg-[#E42128]'} px-4 py-2 mt-3 md:mb-3 rounded-md disabled:cursor-not-allowed w-full md:w-auto`}
					onClick={verifyUser}
					disabled={user}>
					Verificar
				</button >
				{user && (
					<PayPalScriptProvider options={initialOptions}>
						<ButtonWrapper showSpinner={false} />
					</PayPalScriptProvider>
				)}
				{message && (
					<p className='text-red-600 font-bold text-center pt-5 text-xl'>{message}</p>
				)}
			</div>
			{processing && (
				<div className='fixed top-0 left-0 bg-gray-400 bg-opacity-85 z-[999] w-full h-screen'>
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
	);
}