interface Speaker {
    id?: number;
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
//Transformation Area
const stage_1_day_1: Program[] = [
    /*{

        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
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
    },*/
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
        "speakers": [
            {
                "id": 1,
                "name": "Giovanni Muciño",
                "position": "Especialista de producto",
                "position_en": " Product Specialist",
                "company": "Beckhoff",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "",
                "phone": "",
                "moderador": false
            }
        ]
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

//Leaders of Tomorrow Area
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
    /*{
        "title": " Siemens",
        "title_en": " Siemens",
        "description": "",
        "description_en": "",
        "time": "12:30 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": 1,
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
    },*/
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
                "id": 1,
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
                "id": 2,
                "name": "Hans Blomeier",
                "position": "Presidente en México",
                "position_en": "President in Mexico",
                "company": "Konrad Adenauer Foundation",
                "bio": "Hans Blomeier es ingeniero agrónomo de la Universidad de Kassel y ha sido el  representante de las oficinas de la Fundación Konrad Adenauer (KAS) en diversos países, entre ellos Perú, Argentina, Chile, Uruguay, además de Reino Unido y la República de Irlanda.<br><br> Ha sido jefe del departamento de América Latina en la oficina central de la KAS. El Ing. Blomeier es autor de numerosos artículos de análisis político, así como editor y co-autor de publicaciones (libros y revistas) de la KAS relacionados con la cooperación internacional, así como el desarrollo político y económico en los países a los que fue destinado. Actualmente es el representante de la KAS México desde mayo de 2018.",
                "bio_en": "Hans Blomeier is an agricultural engineer at the University of Kassel and has represented the offices of the Konrad Adenauer Foundation (KAS) in several countries, including Peru, Argentina, Chile, Uruguay, as well as the United Kingdom and the Republic of Ireland. <br><br>He has been head of the Latin America department at KAS headquarters. Ing. Blomeier is the author of numerous political analysis articles, as well as editor and co-author of KAS publications (books and magazines) related to international cooperation as well as political and economic development in the countries where he was posted. Currently he is the representative of KAS Mexico since May 2018.",
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
                "id": 1,
                "name": "Germán Bonilla Bermúdez",
                "position": "",
                "position_en": "",
                "company": "Asociación para el Desarrollo Industrial Sostenible Alianza Alemania-Pacífico (PAGSID)-un proyecto de cooperación de la Federación de Industrias Alemanas (BDI)",
                "bio": "Maestro en Ciencias en Ingeniería de Sistemas de Producción por la RWTH Aachen University (Alemania) e Ingeniero Mecánico Administrador por el Tecnológico de Monterrey. Ha sido profesor en el Tecnológico de Monterrey y consultor para empresas extranjeras en proyectos de inversión en México y para PyMEs en proyectos de planeación estratégica, innovación, gestión de la tecnología e industria 4.0.<br><br> Cuenta con más de 10 años de experiencia en proyectos de cooperación internacional con enfoque en desarrollo sostenible, innovación y educación, siendo su área de especialización la cooperación económica y desarrollo entre Alemania y la Alianza del Pacífico. Actualmente es Coordinador del proyecto Asociación para el Desarrollo Industrial Sostenible Alemania - Alianza del Pacífico (PAGSID) de la Confederación de la Industria Alemana (BDI).",
                "bio_en": "Master of Science in Production Systems Engineering from the RWTH Aachen University (Germany) and Managing Mechanical Engineer from the Tecnológico de Monterrey. He has been a professor at the Tecnológico de Monterrey and consultant for foreign companies in investment projects in Mexico and for SMEs in strategic planning, innovation, technology management and industry 4.0 projects. <br><br>He has more than 10 years of experience in international cooperation projects focusing on sustainable development, innovation and education, his area of expertise being economic and development cooperation between Germany and the Pacific Alliance. Currently project coordinator of the Association for Sustainable Industrial Development Germany - Pacific Alliance (PAGSID) of the Confederation of German Industry (BDI).", 
                "image": "/img/speakers/german_bonilla_bermudez.webp",
                "email": "",
                "phone": "",
                "moderador": true
            },
            {
                "id": 2,
                "name": "Oliver Hanisch ",
                "position": "CEO",
                "position_en": "CEO",
                "company": "Campus Founders - Heilbronn",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": 3,
                "name": "Nanghelly Silva Anzaldúa ",
                "position": "Presidenta de la Comisión de Innovación",
                "position_en": "President of the Innovation Committee",
                "company": "Consejo Coordinador Empresarial",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": 4,
                "name": "René Freudenberg ",
                "position": "CEO",
                "position_en": "CEO",
                "company": "Interlub Group Mexico",
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
    /*{
        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "15:00 hrs",
        "duration": "45 min",
        "speakers": []
    },*/
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
                "id": 1,
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
                "id": 2,
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
        "speakers": [
            {
                "id": 1,
                "name": "Hugo Isaak",
                "position": "CEO",
                "position_en": "CEO",
                "company": "Neurabitat",
                "bio": "El Dr. Hugo Isaak es un líder reconocido en ciudades inteligentes y desarrollo urbano sostenible. Su formación académica incluye un doctorado en Administración Pública por la Universidad Anáhuac y la Universidad de París-Sorbona, con especialización en Urbanismo, Medio Ambiente, Economía, Desarrollo Sostenible e Inteligencia Artificial.<br><br>Experiencia Profesional: El Dr. Isaak ha desempeñado roles clave en el sector público y privado, incluyendo su nombramiento en el Grupo Global de Expertos de Smart Cities de la ONU-Hábitat, donde lidera las Guías para el Desarrollo de Ciudades Inteligentes centradas en las personas. Es fundador y CEO de 'Neurabitat', un proyecto que utiliza inteligencia artificial y análisis de datos para mejorar la interacción entre las ciudades y sus habitantes.<br><br>En la Secretaría de Relaciones Exteriores (SRE), fue Coordinador Internacional General Urbano y autor del proyecto ICI (Interconectando Ciudades Inteligentes), contribuyendo a políticas públicas sostenibles. Destacan sus negociaciones para extender el mandato de México como Presidente de la Asamblea de la ONU-Hábitat hasta 2025 y la asignación y próxima celebración del Día Mundial del Hábitat en Querétaro. <br><br><br><br>Visión y Futuro: El Dr. Isaak está comprometido con la creación de ciudades más inteligentes y sostenibles. Su visión incluye Centros de Innovación de la Ciudad Inteligente y Agencias de Transformación Digital en México y LATAM, integrando tecnologías emergentes para beneficiar a todos los ciudadanos y promover la sostenibilidad. <br><br>En resumen, el Dr. Hugo Isaak es una figura influyente con una trayectoria ejemplar y una visión clara hacia un futuro más sostenible e inclusivo.",
                "bio_en": "Dr. Hugo Isaak is a recognized leader in smart cities and sustainable urban development. His academic background includes a PhD in Public Administration from the University of Anáhuac and the University of Paris-Sorbonne, with specialization in Urbanism, Environment, Economy, Sustainable Development and Artificial Intelligence.<br><br>Professional Experience: Dr. Isaak has played key roles in the public and private sectors, including his appointment to UN-Habitat’s Global Expert Group on Smart Cities, where he leads the people-centred Guides for the Development of Smart Cities. He is the founder and CEO of 'Neurabitat', a project that uses artificial intelligence and data analysis to improve interaction between cities and their inhabitants.<br><br>In the Foreign Relations Secretariat (SRE), he was the Urban General International Coordinator and author of the ICI project (Interconnecting Smart Cities), contributing to sustainable public policies. They highlight their negotiations to extend the mandate of Mexico as President of the UN AssemblyHabitat until 2025 and the allocation and upcoming celebration of World Habitat Day in Querétaro. <br><br>Vision and Future: Dr. Isaak is committed to creating smarter, more sustainable cities. His vision includes Smart City Innovation Centers and Digital Transformation Agencies in Mexico and LATAM, Integrating emerging technologies to benefit all citizens and promote sustainability. <br><br>In short, Dr. Hugo Isaak is an influential figure with an exemplary track record and a clear vision for a more sustainable and inclusive future.",
                "image": "/img/speakers/Hugo_Isaak.jpeg",
                "email": "",
                "phone": "",
                "moderador": true
            },
            {
                "id": 2,
                "name": "Rodrigo Salcedo",
                "position": "Presidente",
                "position_en": "President",
                "company": "Asociación Gremial de Vehículos Eléctricos de Chile (AVEC)",
                "bio": "Rodrigo Salcedo Campino es Ingeniero Comercial con una trayectoria en la industria logística y energética de Chile, especializándose en sistemas de transporte eléctrico y movilidad sostenible. <br><br>Es presidente de la Asociación Gremial de Vehículos Eléctricos de Chile (AVEC), donde impulsa políticas públicas y difusión del uso de vehículos eléctricos en el país. Es directivo en la Asociación Latinoamericana de Movilidad Sostenible (ALAMOS). <br><br>Ha sido expositor en foros y congresos internacionales - como Tomorrow\.Mobility Barcelona y Smart City Expo en Barcelona - sobre electromovilidad y conectividad eléctrica en América Latina. <br><br>Con participación activa en comisiones legislativas nacionales y mesas técnicas, ha colaborado en iniciativas clave como la Ley de Electromovilidad y la estrategia regulatoria vigente en Chile.",
                "bio_en": "Rodrigo Salcedo Campino is a Commercial Engineer with a background in the logistics and energy industry in Chile, specializing in electric transport systems and sustainable mobility. <br><br>He is president of the Association Gremial de Vehículos Eléctricos de Chile (AVEC), where he promotes public policies and dissemination of the use of electric vehicles in the country. Director of the Latin American Association for Sustainable Mobility (ALAMOS). <br><br>He has been an exhibitor in international forums and congresses - such as Tomorrow . Mobility Barcelona and Smart City Expo in Barcelona - on electromobility and electrical connectivity in Latin America. <br><br>With active participation in national legislative committees and technical tables, has collaborated on key initiatives such as the Electromobility Law and the current regulatory strategy in Chile.",
                "image": "/img/speakers/Rodrigo_Salcedo.png",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
        "description": "En un contexto global marcado por la escasez de recursos, el cambio climático y la presión regulatoria, la transición hacia una economía circular es inevitable. Expertos de diferentes sectores analizarán cómo innovación y tecnología están transformando las cadenas de valor. Discutiremos casos concretos donde la tecnología/conocimiento permite trazabilidad, optimización del uso de recursos, diseño circular, modelos de negocio basados en reutilización y servicios, así como nuevos enfoques colaborativos entre industrias. El panel también abordará los desafíos éticos, económicos y regulatorios que plantea esta transformación, y qué condiciones habilitantes son necesarias para escalar la circularidad digital a nivel global.",
        "description_en": "In a global context marked by scarce resources, climate change and regulatory pressure, the transition to a circular economy is inevitable. Experts from different sectors will discuss how innovation and technology are transforming value chains. We will discuss concrete cases where technology/knowledge allows traceability, optimization of the use of resources, circular design, business models based on reuse and services, as well as new collaborative approaches between industries. The panel will also address the ethical, economic and regulatory challenges posed by this transformation, and what enabling conditions are needed to scale digital circularity globally.",
        "time": "15:00 hrs",
        "duration": "60 min",
        "speakers": [
            {
                "id": 1,
                "name": "Andreas Müller",
                "position": "Director Adjunto",
                "position_en": "Director Adjunct",
                "company": "CAMEXA",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "a.mueller@ahkmexiko.com.mx",
                "phone": "",
                "moderador": true
            },
            {
                "id": 2,
                "name": "Denisse Carolina Navarro Rodriguez",
                "position": "Oficial Nacional y Representante Adjunta",
                "position_en": " National Official and Adjunct Representative",
                "company": "UNIDO",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "D.NAVARRO-RODRIGUEZ@UNIDO.ORG",
                "phone": "",
                "moderador": false
            },
            {
                "id": 3,
                "name": "Alejandro Rodriguez",
                "position": "Sustainability Portfolio Leader Siemens México, Centro America y el Caribe",
                "position_en": "Sustainability Portfolio Leader Siemens México, Centro America y el Caribe",
                "company": "SIEMENS",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "alejandro.rodriguez@siemens.com",
                "phone": "",
                "moderador": false
            },
            {
                "id": 4,
                "name": "Miriam Macías Solis ",
                "position": "Directora para México y América Latina del Centro Mexicano de Ecología Industrial CMEI",
                "position_en": "Director for Mexico and Latin America of the Mexican Center for Industrial Ecology CMEI",
                "company": "CMEI",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "m.macias@cmei.org.mx",
                "phone": "",
                "moderador": false
            },
        ]
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