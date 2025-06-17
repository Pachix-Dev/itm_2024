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

        "title": "",
        "title_en": "",
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
        "title": "Mitsubishi",
        "title_en": "Mitsubishi",
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

        "title": "Beckhoff",
        "title_en": "Beckhoff",
        "description": "",
        "description_en": "",
        "time": "11:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "12:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "AMOF",
        "title_en": "AMOF",
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
        "title": "Mitsubishi",
        "title_en": "Mitsubishi",
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

        "title": "AMOF",
        "title_en": "AMOF",
        "description": "",
        "description_en": "",
        "time": "11:20 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Siemens",
        "title_en": "Siemens",
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
        "title": "Mitsubishi",
        "title_en": "Mitsubishi",
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
        "title": "Keynote Siemens",
        "title_en": "Keynote Siemens",
        "description": "",
        "description_en": "",
        "time": "12:30 hrs",
        "duration": "30 min",
        "speakers": []
    },
    {
        "title": "GIZ",
        "title_en": "GIZ",
        "description": "",
        "description_en": "",
        "time": "13:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "Cumbre de Desarrollo Industrial Sostenible: Inauguración",
        "title_en": "Sustainable Industrial Development Summit: Opening",
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
        "speakers": []
    },
    {
        "title": "Cumbre de Desarrollo Industrial Sostenible: Sesión: IA y ecosistemas de innovación: Acelerar la competitividad industrial y las cadenas de valor",
        "title_en": "Sustainable Industrial Development Summit: Session: AI and innovation ecosystems: Accelerating industrial competitiveness and sustainable value chains",
        "description": "",
        "description_en": "",
        "time": "16:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "Cumbre de Desarrollo Industrial Sostenible: Sesión: Clausura y Firma del MoU para la implementación de la Estrategia de Desarrollo Industrial Sostenible 2030 de la Región Centro-Bajío-Oeste",
        "title_en": "Summit on Sustainable Industrial Development: Session: Closing and Signing of the MoU for the implementation of the 2030 Strategy for Sustainable Industrial Development in the Central-Bajío-Oeste Region",
        "description": "",
        "description_en": "",
        "time": "17:00 hrs",
        "duration": "15 min",
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
        "title": "Mitsubishi",
        "title_en": "Mitsubishi",
        "description": "",
        "description_en": "",
        "time": "13:00 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "Panel AMOF",
        "title_en": "Panel AMOF",
        "description": "",
        "description_en": "",
        "time": "13:50 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
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
        "title": "ITMujeres",
        "title_en": "ITMujeres",
        "description": "",
        "description_en": "",
        "time": "18:00 hrs",
        "duration": "60 min",
        "speakers": []
    },
]

const stage_2_day_3: Program[] = [
    {
        "title": "Beckhoff",
        "title_en": "Beckhoff",
        "description": "",
        "description_en": "",
        "time": "11:20 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "AMOF",
        "title_en": "AMOF",
        "description": "",
        "description_en": "",
        "time": "12:15 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "13:20 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "14:30 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "15:20 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "AMOF",
        "title_en": "AMOF",
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