import React, { useState } from "react";
import Modal from "../schedule/Modal.jsx";

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

  return (
    <article>
      {item.title ? (
        <>
          <div className="flex sm:flex-row flex-col border-b-2 border-b-red-500 from-[#E42128] to-[#CF1363] mt-1">
            <div className="sm:w-full w-full my-4">
              <div className="flex flex-row space-x-5 my-4 items-center">
                {item.img ? (
                  <div className="w-24 h-24 shrink-0">
                    <img
                      src={item.img}
                      alt="logo"
                      className="w-24 h-24 rounded-full bg-white object-cover"
                    />
                  </div>
                ) : null}
                <div className="gap-2 ">
                  <p className="lg:text-3xl md:text-3xl text-xl font-bold text-primary-500">
                    {language === "en" ? item.title_en : item.title}
                  </p>
                  {/* Svg del horario y la duración */}
                  <div className="text-lg text-white flex flex-row space-x-5 my-4">
                    <div className="flex flex-row items-center gap-2">
                      {/* Reloj */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </g>
                      </svg>
                      {item.time}
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      {/* Duración */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#ffffff"
                          d="M11.39 8C13.542 6.635 15 4.012 15 1c0-.339-.019-.672-.054-1H1.055a9.155 9.155 0 0 0-.054 1c0 3.012 1.457 5.635 3.609 7c-2.152 1.365-3.609 3.988-3.609 7c0 .339.019.672.054 1h13.891c.036-.328.054-.661.054-1c0-3.012-1.457-5.635-3.609-7zM2.5 15c0-2.921 1.253-5.397 3.5-6.214V7.214C3.753 6.397 2.5 3.92 2.5 1h11c0 2.921-1.253 5.397-3.5 6.214v1.572c2.247.817 3.5 3.294 3.5 6.214zm7.182-4.538C8.562 9.827 8.501 9.003 8.5 8.503V7.499c0-.5.059-1.327 1.184-1.963c.602-.349 1.122-.88 1.516-1.537H4.8c.395.657.916 1.188 1.518 1.538c1.12.635 1.181 1.459 1.182 1.959V8.5c0 .5-.059 1.327-1.184 1.963c-1.135.659-1.98 1.964-2.236 3.537h7.839c-.256-1.574-1.102-2.879-2.238-3.538z"
                        />
                      </svg>
                      {item.duration}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-white text-justify">
                {item.description ? (
                  language === "es" ? (
                    item.description
                  ) : (
                    item.description_en
                  )
                ) : language === "es" ? (
                  <p>
                    La descripción aún no está disponible. ¡Mantente al tanto,
                    pronto la publicaremos!
                  </p>
                ) : (
                  <p>
                    The description is not available yet. Stay tuned, it will be
                    published soon!
                  </p>
                )}
              </p>

              {item.speakers.length > 0 && (
                <>
                  <p className="mt-2 font-extrabold">{translate.panelists}</p>
                  <ul className="mt-2 ms-2 gap-2 grid lg:grid-cols-3 md:grid-cols-2">
                    {item.speakers.map((speaker) => (
                      <li key={speaker.id} className="mt-2">
                        <div className="flex items-center gap-2">
                          <img
                            className="w-16 h-16 rounded-full object-cover"
                            onClick={() => handleOpenModal(speaker)}
                            src={speaker.image}
                            alt={speaker.name}
                          />
                          <p>
                            {speaker.name}
                            <br />
                            {language === "es"
                              ? speaker.position
                              : speaker.position_en}
                            <br />
                            {speaker.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {selectedSpeaker && (
                    <Modal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      speaker={selectedSpeaker}
                      language={language}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : null}
    </article>
  );
};

export default ProgramItem;
