import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  speaker: Speaker;
  language: string;
};

const Modal = ({ isOpen, onClose, speaker, language }: ModalProps) => {
  const [vermas, setVermas] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Asegurar que el componente está montado (para SSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Compensar scrollbar
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Reset vermas cuando cambia el speaker
  useEffect(() => {
    setVermas(false);
  }, [speaker.id]);

  if (!isOpen || !mounted) return null;

  const bioLang = language === "es" ? speaker.bio ?? "" : speaker.bio_en ?? "";
  const hasLongBio = bioLang.length > 700;
  const truncatedBio = hasLongBio ? bioLang.slice(0, 700) + "..." : bioLang;
  const displayBio = vermas ? bioLang : truncatedBio;

  const modalContent = (
    <div 
      className="modal-overlay fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <div 
        className="modal-content relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-[#E42128]/30 p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
        style={{ 
          zIndex: 1000000,
          transform: 'scale(1)',
          animation: 'modalFadeIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con botón de cerrar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#E42128] rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">{language === "es" ? "Perfil del Ponente" : "Speaker Profile"}</span>
          </div>
          <button
            onClick={onClose}
            className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-[#E42128]/20 transition-all duration-300 group"
            style={{ zIndex: 1000001 }}
            aria-label="Cerrar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Imagen del speaker */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E42128] to-[#CF1363] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src={speaker.image}
                alt={speaker.name}
                className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-xl border-2 border-gray-700 group-hover:border-[#E42128]/50 transition-all duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/img/placeholder-speaker.jpg';
                }}
              />
              {speaker.moderador && (
                <div className="absolute top-4 left-4 bg-[#E42128] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                  Moderador
                </div>
              )}
            </div>
          </div>

          {/* Información del speaker */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header con nombre y empresa */}
            <div className="space-y-4">
              {speaker.company && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E42128] to-[#CF1363] text-white text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2 0h.01M17 9h.01M13 9h.01M9 9h.01m4 4h.01m-4 0h.01m4 4h.01m-4 0h.01" />
                  </svg>
                  {speaker.company}
                </div>
              )}
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <span className="bg-gradient-to-r from-[#E42128] to-[#CF1363] bg-clip-text text-transparent">
                    {speaker.name}
                  </span>
                </h2>
                <p className="text-xl text-gray-300 font-medium">
                  {language === "es" ? speaker.position : speaker.position_en}
                </p>
              </div>
            </div>

            {/* Biografía */}
            {bioLang && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E42128]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {language === "es" ? "Biografía" : "Biography"  }
                </h3>
                <div 
                  className="text-gray-300 leading-relaxed text-justify prose prose-invert max-w-none prose-p:text-gray-300 prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: displayBio }}
                />
                
                {hasLongBio && (
                  <button
                    onClick={() => setVermas(!vermas)}
                    className="inline-flex items-center gap-2 text-[#E42128] hover:text-white font-medium text-sm transition-colors duration-300 hover:bg-[#E42128]/10 px-3 py-1 rounded-full"
                  >
                    {vermas ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                        {language === "es" ? "Ver menos" : "Show less"}
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        {language === "es" ? "Ver más" : "Show more"}
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

            {/* Información de contacto */}
            {(speaker.email || speaker.phone) && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#E42128]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contacto
                </h3>
                <div className="space-y-3">
                  {speaker.email && (
                    <a 
                      href={`mailto:${speaker.email}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#E42128] transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#E42128]/20 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="break-all">{speaker.email}</span>
                    </a>
                  )}
                  
                  {speaker.phone && (
                    <a 
                      href={`tel:${speaker.phone}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-[#E42128] transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-[#E42128]/20 transition-colors duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span>{speaker.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Usar createPortal para renderizar en document.body
  return createPortal(modalContent, document.body);
};

export default Modal;