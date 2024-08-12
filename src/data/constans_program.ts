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
        "title": "SIEMENS",
        "description": "",
        "time": "13:30 hrs",
        "duration": "45 mins",
        "speakers": []
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
                "name": "José Armas Ramírez",
                "position": "Account Executive",
                "company": "Extreme Networks",
                "image": "/profile.svg"
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
        "title": "SIEMENS",
        "description": "",
        "time": "13:15 hrs",
        "duration": "45 mins",
        "speakers": []
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
        "title": "SIEMENS",
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
        "title": "SIEMENS",
        "title_en": "SIEMENS",
        "description": "",
        "time": "12:30 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Hacia una nueva era Industrial 4.0: Impulsando la sustentabilidad y  la Transición Justa ",
        "title_en": "Towards a new Industrial 4.0 era: Driving sustainability and Just Transition",
        "description": "Panel de alto nivel. En un mundo de Industria 4.0, redefinir objetivos más allá de la productividad es crucial. Este panel explorará cómo avanzar hacia una industria sustentable y centrada en el bienestar humano, en una Transición Justa. Se abordará la alineación con los ODS de la ONU, promoviendo una cultura organizacional ética e inclusiva. También se examina la colaboración empresa-gobierno para un futuro industrial equitativo y resiliente.",
        "description_en": "High-level panel. In a world of Industry 4.0, redefining goals beyond productivity is crucial. This panel will explore how to move towards a sustainable industry focused on human well-being, in a Just Transition. Alignment with the UN SDGs will be addressed, promoting an ethical and inclusive organizational culture. It also examines business-government collaboration for an equitable and resilient industrial future.",
        "time": "13:15 hrs",
        "duration": "60 mins",
        "speakers": [
            {
                "name": "Dra. Ute Böttcher",
                "position": "Directora residente de la Cooperación Técnica Alemana (GIZ) en México",
                "company": "",
                "image": "/profile.svg"
            }
        ]
    },
    {
        "title": "Mitsubishi",
        "title_en": "Mitsubishi",
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
                "name": "Akitake Kato",
                "position": "Presidente de MISUMI México",
                "company": "",
                "image": "/profile.svg"
            }
        ]
    }
]

const stage_2_day_2: Program[] = [
    {
        "title": "SIEMENS",
        "title_en": "SIEMENS",
        "description": "",
        "time": "12:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Inauguración Cumbre",
        "title_en": "Summit Inauguration",
        "description": "",
        "time": "12:45 hrs",
        "duration": "30 mins",
        "speakers": []
    },
    {
        "title": "Panel de la Cumbre",
        "title_en": "Summit Panel",
        "description": "",
        "time": "13:15 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Panel de la Cumbre",
        "title_en": "Summit Panel",
        "description": "",
        "time": "14:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Panel de la Cumbre",
        "title_en": "Summit Panel",
        "description": "",
        "time": "15:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
    {
        "title": "Liderazgo femenino en la innovación Industrial",
        "title_en": "Women's leadership in industrial innovation",
        "description": "",
        "time": "17:00 hrs",
        "duration": "30 mins",
        "speakers": [
            {
                "name": "Misumi",
                "position": "",
                "company": "",
                "image": "/profile.svg"
            }
        ]
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
        "title": "Mitsubishi",
        "title_en": "Mitsubishi",
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