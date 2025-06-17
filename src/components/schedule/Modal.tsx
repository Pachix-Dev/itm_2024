import { useState } from "react"

type Speaker = {
    id?: string;
    name?: string;
    position?: string;
    position_en?: string;
    company?: string;
    bio?: string;
    bio_en?: string;
    image?: string;
    email?: string;
    phone?: string;
    moderador?: boolean;
}

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    speaker: Speaker; 
    language: string; 
  };


const Modal = ({ isOpen, onClose, speaker, language }: ModalProps) => {
    const [vermas, setVermas] = useState(false)

    if (!isOpen) return null

    const bioLang = language === 'es' ? speaker.bio ?? '' : speaker.bio_en ?? '';

    const newBio = bioLang.length > 700 ? bioLang.slice(0, 700) + '...' : bioLang
    return (
        <div className='fixed inset-0 z-[200] flex items-center justify-center bg-gray-900 bg-opacity-60 p-4'>
            <div
                className='bg-gradient-to-t from-[#000014] to-[#0a3dff] p-6 md:p-8 lg:pt-4 rounded-3xl shadow-xl 
                        w-full max-w-full  lg:max-w-7xl 
                        overflow-y-auto max-h-screen'
            >
                <div className='flex justify-end mb-4'>
                    <button
                        onClick={onClose}
                        className='text-zinc-50 hover:text-custom-orange focus:outline-none transition-colors duration-300'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-7 h-7'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>

                <div className='grid lg:flex gap-8 relative items-center justify-items-center'>
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className='sm:object-cover lg:w-[400px] md:w-[300px]  rounded-xl shadow-md'
                    />
                    <div className='justify-center text-center sm:text-left overflow-scroll max-h-[600px] p-5'>
                        <div className="square_red_2 top-0 bg-gradient-to-t from-[#e10725] to-[#e40966] z-10 pl-3 mb-4 pb-3">
                            {speaker.company !== '' && (
                                <div className='bold w-fit bg-custom-orange text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-lg outline-white'>
                                    {speaker.company}
                                </div>
                            )}
                            <h3 className='uppercase mt-3 text-4xl font-bold text-custom-orange'>
                                {speaker.name}
                            </h3>
                            <p className=' text-zinc-50 mt-2 text-lg'>
                                {language === 'es' ? speaker.position : speaker.position_en}
                            </p>
                        </div>

                        <p className='text-text-zinc-50  text-base mt-3 text-justify'>
                            {vermas ? bioLang : newBio}

                        </p>
                        
                        {newBio.length > 700 &&
                            <button onClick={() => setVermas(!vermas)} className="mt-5 bg-[#e10725] text-white font-bold px-2 py-1 rounded-md text-sm hover:bg-sky-500 transition-colors duration-300">
                                {vermas ? 'ver menos...' : 'ver más...'}
                            </button>
                        }
                        <div className='mt-4 space-y-2'>
                            {speaker.email !== '' && (
                                <p className='text-zinc-200 text-sm flex items-center gap-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='w-5 h-5'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                                        />
                                    </svg>
                                    {speaker.email}
                                </p>
                            )}
                            {speaker.phone !== '' && (
                                <p className='text-zinc-200 text-sm flex items-center gap-2'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='w-5 h-5'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                                        />
                                    </svg>
                                    {speaker.phone}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Modal
