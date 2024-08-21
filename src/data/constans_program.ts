interface Speaker {
    id?: string;
    name: string;
    position: string;
    company: string;
    image?: string;
}

interface Program {
    title: string;
    title_en?: string;
    description: string;
    description_en?: string;
    time: string;
    duration: string;
    speakers: Speaker[];
}

const stage_1_day_1: Program[] = [
    {
        "title": "El futuro del end of arm tooling by Mitsubishi",
        "title_en": "The future of end of arm tooling by Mitsubishi",
        "description": "",
        "description_en": "",
        "time": "12:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Tu tiempo, nuestra prioridad",
        "title_en": "Your time, our priority",    
        "description": "Exploraremos como MISUMI puede contribuir al valor de tu tiempo. Destacaremos cómo nuestra amplia gama de productos y servicios simplifica la cadena de suministro y acelera los procesos de producción, permitiendo a nuestros clientes enfocarse en su core business. Únete para descubrir cómo MISUMI está transformando el concepto del tiempo en una ventaja competitiva.",
        "description_en": "We will explore how MISUMI can contribute to the value of your time. We will highlight how our wide range of products and services simplifies the supply chain and accelerates production processes, allowing our customers to focus on their core business. Join us to discover how MISUMI is transforming the concept of time into a competitive advantage.",
        "time": "12:45 hrs",
        "duration": "45 mins",
        "speakers": [
            {            
                "id": "1",    
                "name": "Carlos Orozco",
                "position": "Director de Ventas",
                "company": "MISUMI México",
                "image": "/img/speakers/carlos_orozco.webp"
            }
        ]
    },
    {
        "title": "Transformación digital sostenible en la industria automotriz",
        "title_en": "Sustainable digital transformation in the automotive industry",
        "description": "En esta sesión, exploraremos cómo la digitalización y el IoT están revolucionando la industria automotriz, impulsando la sostenibilidad y mejorando la eficiencia operativa. Roger Guerrero y Jair Mexía de Siemens México, compartirán sus experiencias y estrategias para implementar estas tecnologías avanzadas. Desde la gestión de la cadena de suministro hasta el mantenimiento predictivo, analizaremos cómo desde Siemens nos enfrentamos y adaptamos a los desafíos actuales y futuros para alcanzar nuestros objetivos globales de sostenibilidad y digitalización.",
        "description_en": "In this session, we will explore how digitalization and IoT are revolutionizing the automotive industry, driving sustainability and improving operational efficiency. Roger Guerrero and Jair Mexía from Siemens Mexico will share their experiences and strategies for implementing these advanced technologies. From supply chain management to predictive maintenance, we will discuss how Siemens is addressing and adapting to current and future challenges to achieve our global sustainability and digitalization goals.",
        "time": "13:30 hrs",
        "duration": "45 mins",
        "speakers": [
            {                               
                "name": "Roger Guerrero",
                "position": "Business Head para Factory Automation & Motion Control",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/profile.svg"
            },
            {
                "name": "Jair Mexía",
                "position": "Business Head para Electrical Products",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/profile.svg"
            },
            {
                "name": "Valeria Rivera",
                "position": "Directora de Comunicación y Desarrollo de Negocio",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/profile.svg"
            }
        ]
    }
]

const stage_1_day_2: Program[] = [
    {
        "title": "Manufactura infinita",
        "title_en": "Infinite Manufacturing",
        "description": "Extreme Networks ofrece soluciones de red innovadoras que facilitan la transformación digital en la manufactura. Las empresas pueden aumentar la eficiencia operativa, reducir riesgos y adoptar modelos de negocio disruptivos. Presentaremos como nuestra infraestructura de red robusta y segura permite una conectividad fluida entre máquinas y sistemas de control, apoyando la Industria 4.0 con alta densidad de dispositivos conectados. Extreme Networks proporciona soluciones para garantizar operaciones resilientes de cadena de suministro y modernizar operaciones de manufactura avanzada.",
        "description_en": "Extreme Networks offers innovative networking solutions that facilitate digital transformation in manufacturing. Companies can increase operational efficiency, reduce risks, and adopt disruptive business models. We will present how our robust and secure network infrastructure enables seamless connectivity between machines and control systems, supporting Industry 4.0 with high density of connected devices. Extreme Networks provides solutions to ensure resilient supply chain operations and modernize advanced manufacturing operations.",
        "time": "11:00 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id":"2",
                "name": "José Armas Ramírez",
                "position": "Account Executive",
                "company": "Extreme Networks",
                "image": "/img/speakers/jose-armas.webp"
            }
        ]
    },
    {
        "title": "Nokia",
        "description": "",
        "time": "11:45 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Tu tiempo, nuestra prioridad",
        "title_en": "Your time, our priority",
        "description": "Exploraremos como MISUMI puede contribuir al valor de tu tiempo. Destacaremos cómo nuestra amplia gama de productos y servicios simplifica la cadena de suministro y acelera los procesos de producción, permitiendo a nuestros clientes enfocarse en su core business. Únete para descubrir cómo MISUMI está transformando el concepto del tiempo en una ventaja competitiva.",
        "description_en": "We will explore how MISUMI can contribute to the value of your time. We will highlight how our wide range of products and services simplifies the supply chain and accelerates production processes, allowing our customers to focus on their core business. Join us to discover how MISUMI is transforming the concept of time into a competitive advantage.",
        "time": "12:30 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id":"1",
                "name": "Carlos Orozco",
                "position": "Director de Ventas",
                "company": "MISUMI México",
                "image": "/img/speakers/carlos_orozco.webp"
            }
        ]
    },
    {
        "title": "Innovación sostenible en la industria de alimentos y bebidas",
        "title_en": "Sustainable innovation in the food and beverage industry",
        "description": "Esta ponencia te sumergirá en el mundo de la sustentabilidad, el mantenimiento predictivo y las tecnologías y soluciones que ofrece Siemens para hacer más sostenibles los procesos productivos en la industria de alimentos y bebidas. Desde el suministro en la cadena de producción hasta la transportación de los insumos, Siemens acompaña a las industrias en cada proceso para hacer más eficientes sus recursos y gocen de los beneficios para maximizar la disponibilidad y la eficiencia en las operaciones industriales. Proporcionaremos una visión integral de las estrategias, herramientas y mejores prácticas para implementar exitosamente nuestras soluciones sustentables en las organizaciones, logrando una mayor productividad y un menor impacto de los tiempos de inactividad no planificados.",
        "description_en": "This presentation will immerse you in the world of sustainability, predictive maintenance, and the technologies and solutions that Siemens offers to make production processes in the food and beverage industry more sustainable. From supply in the production chain to the transportation of inputs, Siemens accompanies industries in every process to make their resources more efficient and enjoy the benefits to maximize availability and efficiency in industrial operations. We will provide a comprehensive view of the strategies, tools, and best practices to successfully implement our sustainable solutions in organizations, achieving greater productivity and less impact from unplanned downtime.",
        "time": "13:15 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id":"6",
                "name": "Rodrigo Zavala",
                "position": "Business Head de Process Automation",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/img/speakers/rodrigo-zavala.webp"
            },
            {
                "id":"7",
                "name": "Gonzalo Matteoda",
                "position": "Business Head de Customer Services",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/img/speakers/gonzalo-matteoda.webp"
            },
            {
                "id":"8",
                "name": "Horacio Ramos",
                "position": "Business Head de Electromovilidad",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/img/speakers/horacio.webp"
            },
            {
                "id":"9",
                "name": "Valeria Rivera",
                "position": "Directora de Comunicación y Desarrollo de Negocio",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/img/speakers/valeriarivera.webp"
            }
        ]
    },
    {
        "title": "La transformación del diecasting by Mitsubishi",
        "description": "",
        "time": "16:15 hrs",
        "duration": "45 mins",
        "speakers": []
    }
]

const stage_1_day_3: Program[] = [
    {
        "title": "Eficiencia energética como una oportunidad de ahorro y crecimiento para las PYMEs",
        "title_en": "Energy efficiency as a savings and growth opportunity for SMEs",
        "description": "",
        "time": "11:00 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "name": "GIZ",
                "position": "",
                "company": "",
                "image": "/profile.svg"
            }
        ]
    },
    {
        "title": "La descarbonización a partir del big data",
        "title_en": "Decarbonization through big data",
        "description": "La descarbonización en el sector industrial es crucial para reducir las emisiones de gases de efecto invernadero (GEI) y mitigar el cambio climático. El Big Data y su análisis avanzado juega un papel esencial en este proceso al proporcionar herramientas avanzadas a las empresas para identificar patrones y áreas de mejora en sus procesos, optimizando el uso de recursos y reduciendo las emisiones de gases de efecto invernadero. En esta plática compartiremos cómo a través del portafolio de tecnologías y soluciones Siemens, podemos ayudar a las industrias a reducir su huella de carbono y generar eficiencias a partir del análisis de datos.",
        "description_en": "Decarbonization in the industrial sector is crucial to reduce greenhouse gas emissions (GHG) and mitigate climate change. Big Data and its advanced analysis play an essential role in this process by providing advanced tools to companies to identify patterns and areas for improvement in their processes, optimizing resource use and reducing greenhouse gas emissions. In this talk we will share how through the Siemens portfolio of technologies and solutions, we can help industries reduce their carbon footprint and generate efficiencies through data analysis.",
        "time": "11:45 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id":"10",
                "name": "Gerardo Pérez",
                "position": "Head of Digital Enterprise",
                "company": "Siemens",
                "image": "/img/speakers/gerardo-perez.webp"
            },
            {
                "id":"11",
                "name": "Horacio Cerón",
                "position": "Portfolio Sales Manager of Electrical Products",
                "company": "Siemens",
                "image": "/img/speakers/horacio-ceron.webp"
            }
        ]
    },
    {
        "title": "Tu tiempo, nuestra prioridad",
        "title_en": "Your time, our priority",
        "description": "Exploraremos como MISUMI puede contribuir al valor de tu tiempo. Destacaremos cómo nuestra amplia gama de productos y servicios simplifica la cadena de suministro y acelera los procesos de producción, permitiendo a nuestros clientes enfocarse en su core business. Únete para descubrir cómo MISUMI está transformando el concepto del tiempo en una ventaja competitiva.",
        "description_en": "We will explore how MISUMI can contribute to the value of your time. We will highlight how our wide range of products and services simplifies the supply chain and accelerates production processes, allowing our customers to focus on their core business. Join us to discover how MISUMI is transforming the concept of time into a competitive advantage.",
        "time": "12:30 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id" :"1",
                "name": "Carlos Orozco",
                "position": "Director de Ventas",
                "company": "MISUMI México",
                "image": "/img/speakers/carlos_orozco.webp"
            }
        ]
    },
    {
        "title": "Procesos de inspección a la medida by Mitsubishi",
        "description": "",
        "time": "13:15 hrs",
        "duration": "45 mins",
        "speakers": []
    }
]

const stage_2_day_1: Program[] = [
    {
        "title": "Metaverso Industrial: Revolucionando la Manufactura del Futuro",
        "title_en": "Metaverso Industrial: Revolucionando la Manufactura del Futuro",
        "description": "El Metaverso Industrial no se trata de crear mundos de fantasía virtuales (o universos paralelos) con poca o ninguna relevancia en el mundo físico. Más bien, se trata de conectar el mundo real con el mundo digital para resolver problemas del mundo real. Se trata de impacto en el mundo real, de mejorar la manera en que hacemos las cosas, de proporcionar beneficios tangibles para los consumidores, las empresas y la sociedad. El Metaverso Industrial está muy vivo. A través de nuestra tecnología Siemens atiende a decenas de miles de clientes industriales en todo el mundo, y podemos confirmar que las compañías están adoptando el metaverso industrial para transformar tecnológicamente sus industrias en los próximos años.",
        "description_en": "The Industrial Metaverse is not about creating virtual fantasy worlds (or parallel universes) with little or no relevance to the physical world. Rather, it is about connecting the real world with the digital world to solve real-world problems. It is about impact in the real world, improving the way we do things, providing tangible benefits for consumers, businesses, and society. The Industrial Metaverse is very much alive. Through our technology Siemens serves tens of thousands of industrial customers worldwide, and we can confirm that companies are adopting the industrial metaverse to technologically transform their industries in the coming years.",
        "time": "12:30 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id": "3",
                "name": "Alejandro Preinfalk",
                "position": "Director de Digital Industries",
                "company": "CEO Siemens México, Centroamérica y el Caribe",
                "image": "/img/speakers/alejandro_preinfalk.webp"
            }
        ]
    },
    {
        "title": "Hacia una nueva era Industrial 4.0: Impulsando la sustentabilidad y  la Transición Justa",
        "title_en": "Towards a new Industrial 4.0 era: Driving sustainability and Just Transition",
        "description": "En un mundo donde la Industria 4.0 está transformando rápidamente los paradigmas industriales, surge la necesidad de redefinir nuestros objetivos más allá de la productividad. En este panel de discusión, exploraremos cómo podemos impulsar a la industria hacia una nueva era, priorizando la sustentabilidad ambiental y el bienestar humano, en el marco de una Transición Justa. Discutiremos estrategias prácticas para alinear los objetivos empresariales con los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas, así como la importancia de fomentar una cultura organizacional centrada en la ética, la inclusión y el cuidado de las personas, garantizando simultáneamente una Transición Justa para los trabajadores y las comunidades impactadas por los cambios industriales. Además, examinaremos el papel crucial de la colaboración entre empresas y gobiernos para construir un futuro industrial más equitativo, resiliente y orientado hacia el bien común.",
        "description_en": "In a world where Industry 4.0 is rapidly transforming industrial paradigms, there is a need to redefine our goals beyond productivity. In this panel discussion, we will explore how we can drive industry towards a new era, prioritizing environmental sustainability and human well-being, within the framework of a Just Transition. We will discuss practical strategies to align business objectives with the United Nations Sustainable Development Goals (SDGs), as well as the importance of fostering an organizational culture centered on ethics, inclusion, and care for people, while simultaneously ensuring a Just Transition for workers and communities impacted by industrial changes. In addition, we will examine the crucial role of collaboration between companies and governments to build a more equitable, resilient, and common good-oriented industrial future.",
        "time": "13:15 hrs",
        "duration": "60 mins",
        "speakers": [
            {
                "name": "Dra. Ute Böttcher",
                "position": "Directora residente de la Cooperación Técnica Alemana (GIZ) en México",
                "company": "",
                "image": "/profile.svg"
            },
            {
                "id": "12",
                "name": "Johannes Dobinger",
                "position": "Representante",
                "company": "ONUDI para México y América Central",
                "image": "/img/speakers/johannes_dobinger.webp"
            },
            {
                
                "name": "Claudia Esteves Cano",
                "position": "Directora General",
                "company": "Asociación Mexicana de Parques Industriales Privados (AMPIP)",
                "image": "/profile.svg"
            },
            {
                
                "name": "Liliana Campos",
                "position": "",
                "company": "GIZ México",
                "image": "/profile.svg"
            }
        ]
    },
    {
        "title": "Japón como generador de inversiones",
        "title_en": "Japan as an investment generator",
        "description": "",
        "time": "16:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Panel Nokia ",
        "title_en": "Nokia Panel",
        "description": "",
        "time": "16:45 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Industrial Transformation",
        "title_en": "Industrial Transformation",
        "description": "Esta conferencia explora como la tecnología esta redefiniendo los procesos de fabricación y gestión empresarial. Descubre como estas innovaciones impulsan la productividad, competitividad y colaboración internacional a través de la automatización y digitalización de servicios. Además, ejemplifica cómo estas acciones están transformando el futuro de la industria y catapultando a México hacia una era de crecimiento económico para el sector nacional.",
        "description_en": "This conference explores how technology is redefining manufacturing processes and business management. Discover how these innovations drive productivity, competitiveness, and international collaboration through the automation and digitalization of services. It also exemplifies how these actions are transforming the future of the industry and propelling Mexico towards an era of economic growth for the national sector.",
        "time": "17:30 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id": "4",
                "name": "Akitake Kato",
                "position": "Presidente de MISUMI México",
                "company": "",
                "image": "/img/speakers/kato.webp"
            }
        ]
    }
]

const stage_2_day_2: Program[] = [
    {
        "title": "Descarbonización y Electromovilidad: claves para las ciudades inteligentes",
        "title_en": "Decarbonization and Electromobility: keys to smart cities",
        "description": "",
        "time": "12:00 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "id": "5",
                "name": "Marco Cosío",
                "position": "Vicepresidente de Smart Infrastructure ",
                "company": "Siemens México, Centroamérica y el Caribe",
                "image": "/img/speakers/marco-cosio.webp"
            }
        ]
    },
    {
        "title": "Inauguración de la Cumbre de Desarrollo Industrial Sostenible",
        "title_en": "Inauguration of the Sustainable Industrial Development Summit",
        "description": "",
        "time": "12:45 hrs",
        "duration": "15 mins",
        "speakers": []
    },
    {
        "title": "Panel CDIS: El Modelo de Desarrollo Inclusivo",
        "title_en": "CDIS Panel: The Inclusive Development Model",
        "description": "",
        "time": "13:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
    {
        "title": "Panel CDIS: Liderazgo Empresarial en la Transformación Digital Sostenible",
        "title_en": "CDIS Panel: Business Leadership in Sustainable Digital Transformation",
        "description": "",
        "time": "14:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
    {
        "title": "Panel CDIS: Nearshoring y cadenas globales de valor sostenibles",
        "title_en": "CDIS Panel: Nearshoring and sustainable global value chains",
        "description": "",
        "time": "15:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
    {
        "title": "Palabras de cierre de la Cumbre de Desarrollo Industrial Sostenible",
        "title_en": "Closing Remarks at the Sustainable Industrial Development Summit",
        "description": "",
        "time": "16:00 hrs",
        "duration": "15 mins",
        "speakers": []
    },    
    {
        "title": "MUJERES QUE TRANSFORMAN: Marketing y Automatización",
        "title_en": "WOMEN WHO TRANSFORM: Marketing and Automation",
        "description": "",
        "time": "17:30 hrs",
        "duration": "60 mins",
        "speakers": [
            {
                "name": "Siemens ",
                "position": "",
                "company": "",
                "image": "/profile.svg"
            },
            {
                "name": "Mitsubishi ",
                "position": "",
                "company": "",
                "image": "/profile.svg"
            },
            {
                "name": "Festo ",
                "position": "",
                "company": "",
                "image": "/profile.svg"
            },
            {
                "name": "Hitachi ",
                "position": "",
                "company": "",
                "image": "/profile.svg"
            },  
            {
                "name": "Claudia Rodrigez ",
                "position": "Marketing Manager",
                "company": "A3 Mexico",
                "image": "/profile.svg"
            },       

        ]
    },
    {
        "title": "Cierre ITMujeres y premiación MTech",
        "title_en": "Closing ITMujeres and MTech award",
        "description": "",
        "time": "18:30 hrs",
        "duration": "30 mins",
        "speakers": []
    }
]

const stage_2_day_3: Program[] = [
    {
        "title": "Desafíos y oportunidades sobre la implementación de la tecnología 5G en el sector industrial",
        "title_en": "Challenges and opportunities on the implementation of 5G technology in the industrial sector",
        "description": "",
        "time": "11:00 hrs",
        "duration": "60 mins",
        "speakers": [
            {
                "name": "Panelistas TBD",
                "position": "",
                "company": "",
                "image": "/profile.svg"
            }
        ]
    },
    {
        "title": "Automation for anything",
        "title_en": "Automation for anything",
        "description": "",
        "time": "12:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Startup Pitch y clausura ITM 2024",
        "title_en": "Startup Pitch and closing ITM 2024",
        "description": "",
        "time": "15:45 hrs",
        "duration": "75 mins",
        "speakers": []
    }
]

export default [
    {
        day: 1,
        stage: 1,
        conferences: stage_1_day_1,
    },
    {
        day: 2,
        stage: 1,
        conferences: stage_1_day_2,
    },
    {
        day: 3,
        stage: 1,
        conferences: stage_1_day_3,
    },
    {
        day: 1,
        stage: 2,
        conferences: stage_2_day_1,
    },
    {
        day: 2,
        stage: 2,
        conferences: stage_2_day_2,
    },
    {
        day: 3,
        stage: 2,
        conferences: stage_2_day_3,
    },
];