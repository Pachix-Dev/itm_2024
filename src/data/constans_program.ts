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

const stage_1_day_1: Program[] = [
    {

        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "13:00 hrs",
        "duration": "35 min",
        "speakers": [/*
            {
                "id": "1",
                "name": "Carlos Hernandez",
                "position": "Director de Relaciones Públicas",
                "position_en": "Director of Public Relations",
                "company": "IGECO",
                "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
                "bio_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
                "image": "/img/speakers/benjamin_najar_jr.webp",
                "email": "ejemplo@gmail.com",
                "phone": "123456789",
                "moderador": true
            },
            {
                "id": "2",
                "name": "Valentina González",
                "position": "Directora de Asociaciones",
                "position_en": "Association Director",
                "company": "Telmex",
                "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
                "bio_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
                "image": "/img/speakers/abigail_carrillo.webp",
                "email": "ejemplo@gmail.com",
                "phone": "123456789",
                "moderador": true
            },
            {
                "id": "3",
                "name": "Alexander Murphy",
                "position": "CEO",
                "position_en": "CEO",
                "company": "AeroVironment",
                "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
                "bio_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
                "image": "/img/speakers/raul_sanchez.webp",
                "email": "ejemplo@gmail.com",
                "phone": "123456789",
                "moderador": true
            }*/
        ]
    },
    {

        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "13:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {

        "title": "Telcel",
        "title_en": "Telcel",
        "description": "",
        "description_en": "",
        "time": "14:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "15:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "15:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "16:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Misumi",
        "title_en": "Misumi",
        "description": "",
        "description_en": "",
        "time": "17:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "17:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
]

const stage_1_day_2: Program[] = [
    {

        "title": "The MX-System: Control cabinet-free automation",
        "title_en": "The MX-System: Control cabinet-free automation",
        "description": "",
        "description_en": "",
        "img": "/img/program/beckhoff.png",
        "time": "11:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "12:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "12:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "13:20 hrs",
        "duration": "35 min",   
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "14:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "14:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "15:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "16:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "16:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Misumi",
        "title_en": "Misumi",
        "description": "",
        "description_en": "",
        "time": "17:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "18:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
]

const stage_1_day_3: Program[] = [
    {

        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "11:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "12:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Misumi",
        "title_en": "Misumi",
        "description": "",
        "description_en": "",
        "time": "12:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "13:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "14:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "14:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "15:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "16:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
]

const stage_2_day_1: Program[] = [
    {
        "title": "Inauguración ITM 2025",
        "title_en": "ITM 2025 Opening",
        "description": "",
        "description_en": "",
        "time": "11:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": " Siemens",
        "title_en": " Siemens",
        "description": "",
        "description_en": "",
        "time": "12:30 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Alejandro Preinfalk",
                "position": "",
                "position_en": "",
                "company": "",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/alejandro_preinfalk.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "Panel de Alto Nivel de GIZ",
        "title_en": "High Level Panel GIZ",
        "description": "",
        "description_en": "",
        "time": "13:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "Inauguración Cumbre de Desarrollo Industrial Sostenible",
        "title_en": "Opening of the Sustainable Industrial Development Summit",
        "description": "",
        "description_en": "",
        "time": "14:15 hrs",
        "duration": "30 min",
        "speakers": []
    },
    {
        "title": "Cumbre de Desarrollo Industrial Sostenible: Sesión Geopolítica y resistencia de las cadenas de valor: Diversificación de los vínculos comerciales mundiales",
        "title_en": "Sustainable Industrial Development Summit: Session Geopolitics and Value Chain Resilience: Diversifying Global Trade Linkages",
        "description": "",
        "description_en": "",
        "time": "14:45 hrs",
        "duration": "75 min",
        "speakers": [
            {
                "id": "1",
                "name": "Takaaki Kuga",
                "position": "Presidente",
                "position_en": "President",
                "company": "Cámara de Comercio e Industria Japonesa de México",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/takaaki-kuga.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Hans Blomeier",
                "position": "Presidente en México",
                "position_en": "President in Mexico",
                "company": "Konrad Adenauer Foundation",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/hans_blomeier.webp",
                "email": "",
                "phone": "",
                "moderador": true
            },
        ]
    },
    {
        "title": "Cumbre de Desarrollo Industrial Sostenible: Sesión: IA y ecosistemas de innovación: Acelerar la competitividad industrial y las cadenas de valor sostenibles",
        "title_en": "Sustainable Industrial Development Summit: Session: AI and innovation ecosystems: Accelerating industrial competitiveness and sustainable value chains",
        "description": "",
        "description_en": "",
        "time": "16:00 hrs",
        "duration": "70 min",
        "speakers": [
            {
                "id": "1",
                "name": "Germán Bonilla Bermúdez",
                "position": "",
                "position_en": "",
                "company": "Asociación para el Desarrollo Industrial Sostenible Alianza Alemania-Pacífico (PAGSID)-un proyecto de cooperación de la Federación de Industrias Alemanas (BDI)",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/german_bonilla_bermudez.webp",
                "email": "",
                "phone": "",
                "moderador": true
            },
        ]
    },
    {
        "title": "Clausura Cumbre de Desarrollo Industrial Sostenible",
        "title_en": "Closing of the Sustainable Industrial Development Summit",
        "description": "",
        "description_en": "",
        "time": "17:00 hrs",
        "duration": "5 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "17:30 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "Misumi",
        "title_en": "Misumi",
        "description": "",
        "description_en": "",
        "time": "18:15 hrs",
        "duration": "45 min",
        "speakers": []
    },
]

const stage_2_day_2: Program[] = [
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "11:20 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "12:10 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "13:00 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "13:50 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "15:00 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "ITMujeres",
        "title_en": "ITMujeres",
        "description": "",
        "description_en": "",
        "time": "16:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "ITMujeres",
        "title_en": "ITMujeres",
        "description": "",
        "description_en": "",
        "time": "17:00 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "ITMujeres - A3",
        "title_en": "A3 - ITMujeres",
        "description": "",
        "description_en": "",
        "time": "18:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
]

const stage_2_day_3: Program[] = [
    {
        "title": "Visión de Beckhoff en la industria",
        "title_en": "Beckhoff Industry Vision",
        "description": "",
        "description_en": "",
        "img": "/img/program/beckhoff.png",
        "time": "11:20 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Pablo Fernandes ",
                "position": "Especialista de producto",
                "position_en": " Product Specialist",
                "company": "Beckhoff",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "",
                "phone": "",
                "moderador": false
            }, {
                "id": "2",
                "name": "Adrián Beas ",
                "position": "Especialista de producto",
                "position_en": " Product Specialist",
                "company": "Beckhoff",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "Panorama Internacional de la Movilidad Eléctrica: Caminos hacia la Descarbonización",
        "title_en": "International Electric Mobility Panorama: Paths to Carbon Neutralization",
        "description": "El panel reunirá a especialistas internacionales para reflexionar sobre enfoques, retos y avances en la implementación de la movilidad eléctrica. La conversación abordará temas estratégicos como políticas públicas, esquemas de colaboración público-privada, incentivos, infraestructura de carga y experiencias prácticas.",
        "description_en": "The panel will bring together international specialists to reflect on approaches, challenges and advances in the implementation of electric mobility. The conversation will address strategic issues such as public policies, public-private collaboration schemes, incentives, charging infrastructure and practical experiences.",
        "img": "/img/program/amof.png",
        "time": "12:15 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "13:20 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "14:10 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "Inteligente, sostenible, circular: la tecnología como facilitadora de la economía circular",
        "title_en": " Intelligent, sustainable, circular: technology as facilitator of the circular economy",
        "description": "",
        "description_en": "",
        "img": "/img/program/sellocamexa.webp",
        "time": "15:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "Misumi",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "16:10 hrs",
        "duration": "45 min",
        "speakers": []
    },
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