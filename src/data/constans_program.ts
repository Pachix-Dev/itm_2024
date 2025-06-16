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
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
        "description_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat varius ex vel fermentum. Cras eu ex odio. Maecenas imperdiet dignissim magna quis sollicitudin. Etiam porttitor ligula ac neque egestas, nec blandit massa ullamcorper. Nam faucibus, felis at cursus gravida, leo tellus mollis sapien, at fringilla neque nibh a metus. Curabitur rhoncus orci ac ante efficitur facilisis. Etiam porttitor eros a malesuada pellentesque. Aenean nec semper ipsum. Donec pulvinar dapibus urna. Maecenas dignissim sollicitudin metus, quis convallis justo bibendum id.",
        "time": "13:00 hrs",
        "duration": "35 min",
        "speakers": [
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
            }
        ]
    },
    
]

const stage_1_day_2: Program[] = [
    {

        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "11:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
]

const stage_1_day_3: Program[] = [
    {

        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "11:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
]

const stage_2_day_1: Program[] = [
    {

        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "11:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
]

const stage_2_day_2: Program[] = [
    {

        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "11:00 hrs",
        "duration": "60 mins",
        "speakers": []
    },
]

const stage_2_day_3: Program[] = [
    {

        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "11:00 hrs",
        "duration": "60 mins",
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