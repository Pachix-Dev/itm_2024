interface Speaker {
    name: string;
    position: string;
    company: string;
    image?: string;
}

interface Program {
    title: string;
    description: string;
    time: string;
    duration: string;
    speakers: Speaker[];
}

const stage_1_day_1: Program[] = [
    {
        "title": "Mitsubishi",
        "description": "",
        "time": "12:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Tu tiempo, nuestra prioridad",
        "description": "Exploraremos como MISUMI puede contribuir al valor de tu tiempo. Destacaremos cómo nuestra amplia gama de productos y servicios simplifica la cadena de suministro y acelera los procesos de producción, permitiendo a nuestros clientes enfocarse en su core business. Únete para descubrir cómo MISUMI está transformando el concepto del tiempo en una ventaja competitiva.",
        "time": "12:45 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "name": "Akitake Kato",
                "position": "Presidente de Misumi México",
                "company": "",
                "image": "/profile.svg"
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
        "title": "Mitsubishi",
        "description": "",
        "time": "11:45 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Tu tiempo, nuestra prioridad",
        "description": "Exploraremos como MISUMI puede contribuir al valor de tu tiempo. Destacaremos cómo nuestra amplia gama de productos y servicios simplifica la cadena de suministro y acelera los procesos de producción, permitiendo a nuestros clientes enfocarse en su core business. Únete para descubrir cómo MISUMI está transformando el concepto del tiempo en una ventaja competitiva.",
        "time": "12:30 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "name": "Akitake Kato",
                "position": "Presidente de Misumi México",
                "company": "",
                "image": "/profile.svg"
            }
        ]
    },
    {
        "title": "SIEMENS",
        "description": "",
        "time": "13:15 hrs",
        "duration": "45 mins",
        "speakers": []
    }
]

const stage_1_day_3: Program[] = [
    {
        "title": "SIEMENS",
        "description": "",
        "time": "11:45 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Tu tiempo, nuestra prioridad",
        "description": "Exploraremos como MISUMI puede contribuir al valor de tu tiempo. Destacaremos cómo nuestra amplia gama de productos y servicios simplifica la cadena de suministro y acelera los procesos de producción, permitiendo a nuestros clientes enfocarse en su core business. Únete para descubrir cómo MISUMI está transformando el concepto del tiempo en una ventaja competitiva.",
        "time": "12:30 hrs",
        "duration": "45 mins",
        "speakers": [
            {
                "name": "Akitake Kato",
                "position": "Presidente de Misumi México",
                "company": "",
                "image": "/profile.svg"
            }
        ]
    },
    {
        "title": "Mitsubishi",
        "description": "",
        "time": "13:15 hrs",
        "duration": "45 mins",
        "speakers": []
    }
]

const stage_2_day_1: Program[] = [
    {
        "title": "SIEMENS",
        "description": "",
        "time": "12:30 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Hacia una nueva era Industrial 4.0: Impulsando la sustentabilidad y  la Transición Justa ",
        "description": "Panel de alto nivel. En un mundo de Industria 4.0, redefinir objetivos más allá de la productividad es crucial. Este panel explorará cómo avanzar hacia una industria sustentable y centrada en el bienestar humano, en una Transición Justa. Se abordará la alineación con los ODS de la ONU, promoviendo una cultura organizacional ética e inclusiva. También se examina la colaboración empresa-gobierno para un futuro industrial equitativo y resiliente.",
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
        "description": "",
        "time": "16:15 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Cómo la tecnología está redefiniendo la manufactura y transformando a la industria",
        "description": "",
        "time": "18:00 hrs",
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
        "description": "",
        "time": "12:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Inauguración Cumbre",
        "description": "",
        "time": "12:45 hrs",
        "duration": "30 mins",
        "speakers": []
    },
    {
        "title": "Cumbre",
        "description": "",
        "time": "13:15 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Cumbre",
        "description": "",
        "time": "14:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Cumbre",
        "description": "",
        "time": "15:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
    {
        "title": "Liderazgo femenino en la innovación Industrial",
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
        "title": "Cierre ITMujeres y premiación MTech",
        "description": "",
        "time": "18:30 hrs",
        "duration": "30 mins",
        "speakers": []
    }
]

const stage_2_day_3: Program[] = [
    {
        "title": "Desafíos y oportunidades sobre la implementación de la tecnología 5G en el sector industrial",
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
        "description": "",
        "time": "12:00 hrs",
        "duration": "45 mins",
        "speakers": []
    },
    {
        "title": "Startup Pitch y clausura ITM 2024",
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