import React, { useState } from "react";
import Modal from "../schedule/Modal";

interface Speaker {
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

interface Program {
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  img?: string;
  time: string;
  duration: string;
  speakers: Speaker[];
}

interface Props {
  item: Program;
  translate: Record<string, string>;
  language: string;
}

const ProgramItem: React.FC<Props> = ({ item, translate, language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const handleOpenModal = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  if (!item.title) return null;

  return (
    <>
      <article className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-[#E42128]/30 transition-all duration-300">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {item.img && (
              <div className="flex-shrink-0">
                <img
                  src={item.img}
                  alt="Conference logo"
                  className="w-24 h-24 rounded-full bg-white object-cover shadow-lg border-2 border-gray-600"
                />
              </div>
            )}
            
            <div className="flex-1 space-y-4">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E42128] to-[#CF1363]">
                {language === "en" ? item.title_en : item.title}
              </h2>
              
              {/* Time and Duration */}
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#E42128]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">{item.time}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#CF1363]"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  <span className="font-medium">{item.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          {item.description && (
            <div className="prose prose-invert max-w-none hidden md:block">
              <p className="text-gray-300 text-justify leading-relaxed">
                {language === "es" ? item.description : item.description_en}
              </p>
            </div>
          )}

          {/* Speakers Section */}
          {item.speakers.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#E42128]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-white">Speakers</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.speakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    onClick={() => handleOpenModal(speaker)}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 cursor-pointer transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-[#E42128]/50"
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        className="w-16 h-16 rounded-full object-cover object-top ring-2 ring-gray-600 group-hover:ring-[#E42128] transition-all duration-300"
                        src={speaker.image}
                        alt={speaker.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/img/placeholder-speaker.jpg';
                        }}
                      />
                      
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm group-hover:text-[#E42128] transition-colors duration-300 truncate">
                        {speaker.name}
                      </p>
                      <p className="text-gray-400 text-xs leading-tight">
                        {language === "es" ? speaker.position : speaker.position_en}
                      </p>
                      {speaker.company && (
                        <p className="text-gray-500 text-xs italic truncate">
                          {speaker.company}
                        </p>
                      )}
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-[#E42128]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Modal */}
      {selectedSpeaker && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          speaker={selectedSpeaker}
          language={language}
        />
      )}
    </>
  );
};

export default ProgramItem;