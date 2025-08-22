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
//Transformation Area
const stage_1_day_1: Program[] = [
    {

        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "13:00 hrs",
        "duration": "45 min",
        "speakers": [
        ]
    },
    {

        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "13:50 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {

        "title": "Telcel",
        "title_en": "Telcel",
        "description": "",
        "description_en": "",
        "time": "14:40 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Misumi",
        "title_en": "Misumi",
        "description": "",
        "description_en": "",
        "time": "15:20 hrs",
        "duration": "45 min",
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
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "17:20 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "16:10 hrs",
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
                "id": "1",
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
        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "12:00 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "12:50 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "13:30 hrs",
        "duration": "45 min",   
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
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "17:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Misumi",
         "title_en": "Misumi",
        "description": "",
         "description_en": "",
         "time": "17:40 hrs",
         "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "18:30 hrs",
        "duration": "30 min",
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
        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "12:00 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "Misumi",
        "title_en": "Misumi",
        "description": "",
        "description_en": "",
         "time": "12:50 hrs",
         "duration": "45 min",
         "speakers": []
    },
    {
        "title": "Schneider",
        "title_en": "Schneider",
        "description": "",
        "description_en": "",
        "time": "13:40 hrs",
        "duration": "45 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "14:30 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "15:10 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "15:50 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "16:30 hrs",
        "duration": "30 min",
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
    },*/
    {
        "title": "GIZ México",
        "title_en": "GIZ Mexico",
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
        "title": "Cumbre de Desarrollo Industrial Sostenible: Panel: Geopolítica y resiliencia de las cadenas de valor: diversificando los vínculos comerciales globales",
        "title_en": "Sustainable Industrial Development Summit: Panel: Geopolitics and Value Chain Resilience: Diversifying Global Trade Linkages",
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
                "bio": "Takaaki Kuga, actual Presidente de Toyota Motor México y de la Cámara Japonesa de Comercio en México, cuenta con más de 30 años de trayectoria internacional en la industria automotriz. Es licenciado en Economía Monetaria Internacional por la Universidad Sophia en Tokio y ha trabajado en Asia, América del Norte y América Latina. Inició su carrera en Mitsui & Co., destacándose en comercio exterior y logística, y más tarde en Bavaria S.A. en Colombia, donde también cursó un MBA.<br><br>En 2004 se integró a Toyota, liderando proyectos estratégicos en EE. UU., México y Japón, como la colaboración Toyota-Mazda en Salamanca. En México ha sido pieza clave en la consolidación operativa de Toyota, incluyendo el arranque de la planta en Guanajuato. Su visión global, liderazgo intercultural y profundo conocimiento del sector lo posicionan como una figura clave en el fortalecimiento de la industria automotriz y las relaciones bilaterales entre Japón y México.",
                "bio_en": "Takaaki Kuga, current President of Toyota Motor Mexico and the Japanese Chamber of Commerce in Mexico, has more than 30 years of international experience in the automotive industry. He holds a degree in International Monetary Economics from Sophia University in Tokyo and has worked in Asia, North America and Latin America. He began his career at Mitsui & Co., excelling in foreign trade and logistics, and later at Bavaria S.A. in Colombia, where he also completed an MBA.<br><br>In 2004 he joined Toyota, leading strategic projects in the USA. Mexico and Japan, such as the Toyota-Mazda collaboration in Salamanca. In Mexico it has been a key part of the operational consolidation of Toyota, including the start-up of the plant in Guanajuato. His global vision, intercultural leadership and deep knowledge of the sector position him as a key figure in strengthening the automotive industry and bilateral relations between Japan and Mexico.",
                "image": "/img/speakers/Taakaki_Kuga.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Hans Blomeier - Moderador",
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
        "title": "Cumbre de Desarrollo Industrial Sostenible: Sesión: IA y ecosistemas de innovación: Acelerando la competitividad industrial y las cadenas de valor sostenibles",
        "title_en": "Sustainable Industrial Development Summit: Session: AI and innovation ecosystems: Accelerating industrial competitiveness and sustainable value chains",
        "description": "La inteligencia artificial (IA) está redefiniendo la competitividad industrial y los modelos de negocio sostenibles. Este panel reunirá a líderes del sector académico, empresarial y de emprendimiento tecnológico para explorar cómo los ecosistemas de innovación pueden potenciar la adopción de IA en la industria, fortalecer cadenas de valor y generar impactos sostenibles. Desde el caso de Heilbronn (Alemania) como hub global de innovación, hasta experiencias mexicanas en liderazgo académico, transformación empresarial y políticas públicas, este diálogo busca inspirar nuevas alianzas para acelerar la transición hacia un futuro industrial más inteligente, inclusivo y resiliente.", 
        "description_en": "The AI revolution is redefining industrial competitiveness and sustainable business models. This panel will bring together leading academic, corporate and technology-driven leaders to explore how innovation ecosystems can accelerate the adoption of AI in the industry, strengthen value chains and generate sustainable impacts. From the case of Heilbronn (Germany) as a global hub for innovation, to Mexican experiences in academic leadership, transformational leadership and public policy, this dialogue seeks to inspire new alliances to accelerate the transition to a more intelligent, inclusive and resilient future.",
        "time": "16:00 hrs",
        "duration": "70 min",
        "speakers": [
            {
                "id": "1",
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
                "id": "2",
                "name": "Oliver Hanisch ",
                "position": "CEO",
                "position_en": "CEO",
                "company": "Campus Founders - Heilbronn",
                "bio": "Oliver Hanisch es una figura prominente en el ecosistema de startups alemán, reconocido principalmente por su papel como CEO de Campus Founders gGmbH.<br><br>Hanisch es cofundador y director ejecutivo de Campus Founders, una organización dedicada a apoyar y fomentar el espíritu empresarial. Su experiencia se centra en liderazgo, recaudación de fondos, estrategia, ventas y relaciones con inversores. <br><br>Antes de Campus Founders, fundó Bed|n|Build, lo que demuestra su historial como emprendedor. Participa activamente como mentor en German Accelerator, brindando orientación a nuevas empresas. Es considerado un experto en startups y ecosistemas de startups, y es un orador solicitado en eventos como Heilbronn Slush'D.<br><br>Oliver Hanisch es un líder experimentado y un defensor del espíritu empresarial, con un historial comprobado de apoyo a las nuevas empresas y el fomento de la innovación.",
                "bio_en": "Oliver Hanisch is a prominent figure in the German startup ecosystem, best known for his role as CEO of Campus Founders gGmbH. <br><br>Hanisch is co-founder and executive director of Campus Founders, an organization dedicated to supporting and fostering entrepreneurship. His expertise focuses on leadership, fundraising, strategy, sales and investor relations. <br><br>Prior to Campus Founders, he founded Bed|n|Build, proving his track record as an entrepreneur. Actively participates as a mentor in the German Accelerator, providing guidance to start-ups. He is considered an expert on startups and startup ecosystems, and is a sought-after speaker at events such as Heilbronn Slush’D.<br><br>Oliver Hanisch is an experienced leader and advocate of entrepreneurship, With a proven track record of supporting new businesses and fostering innovation.                ",
                "image": "/img/speakers/Oliver_Hanisch.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Nanghelly Silva Anzaldúa ",
                "position": "Presidenta de la Comisión de Innovación",
                "position_en": "President of the Innovation Committee",
                "company": "Consejo Coordinador Empresarial",
                "bio": "Ingeniera Industrial, egresada de la Universidad de Guadalajara. Maestra en Negocios por la Universidad de Offenburg, Alemania. Design Thinker certificada por el Centro de Estudios de Innovación de Monterrey y la World Design Organization. Es fundadora y directora de una Oficina de Transferencia Tecnológica y un espacio dedicado al impulso de la innovación, desarrollo tecnológico y emprendimiento en la ciudad de Uruapan.<br><br> Cuenta con más de quince años de experiencia profesional en la gestión de proyectos de innovación y desarrollo tecnológico con enfoque de triple hélice. Actualmente es presidenta de la Comisión de Innovación y Desarrollo del Consejo Cordinador Empresarial (CCE).",
                "bio_en": "Industrial Engineer, graduated from the University of Guadalajara. Master in Business at the University of Offenburg, Germany. Design Thinker certified by the Monterrey Center for Innovation Studies and the World Design Organization. She is the founder and director of an Office for Technology Transfer and a space dedicated to the promotion of innovation, Technological development and entrepreneurship in the city of Uruapan.<br><br> He has more than fifteen years of professional experience in managing innovation projects and technological development with a triple helix approach. Currently chair the Innovation and Development Commission of the Business Coordinating Council (CCE).",
                "image": "/img/speakers/Nanghelly_Silva_Anzaldúa_CCE.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "4",
                "name": "René Freudenberg ",
                "position": "CEO",
                "position_en": "CEO",
                "company": "Interlub Group Mexico",
                "bio": "René estudió Administración de Empresas en Alemania y obtuvo su MBA de la universidad<br><br>TiasNimbas Business School, Los Países Bajos. Luego ganó valiosa experiencia internacional trabajando para Continental AG en Alemania, Bélgica, Inglaterra y España.<br><br>En 2004 se incorporó a Interlub Group, el negocio familiar iniciado por su padre en 1984. En 2005 trabajó en la expansión de una de las unidades de negocio en Brasil y en 2006 asumió el cargo de Director General de la compañía. Desde haber tomado el liderazgo de la compañía en 2006, la compañía obtuvo en tres ocasiones honores presidenciales por sus contribuciones valiosas en las ciencias (Premio Nacional de Tecnología e Innovación 2019), por la particular forma de crear valor para sus clientes (Premio Nacional de Calidad 2017) y por las exportaciones de México (Premio Nacional de Exportación 2016).<br><br>René además es presidente del Consejo Directivo del Instituto para el Fomento a la Calidad y forma parte del Consejo del Colegio Alemán Guadalajara, del Consejo de Fundación Marisa y del Consejo de Mentores Endeavor, y también fue presidente del Capítulo de Guadalajara de Enlace+ (Tec de Monterrey).",
                "bio_en": "René studied Business Administration in Germany and earned his MBA from the university<br><br>TiasNimbas Business School, The Netherlands. He then gained valuable international experience working for Continental AG in Germany, Belgium, England and Spain.<br><br>In 2004 he joined Interlub Group, the family business started by his father in 1984. In 2005 he worked on the expansion of one of the business units in Brazil and in 2006 took over as CEO of the company. Since taking the company’s leadership in 2006, the company has won three presidential honors for its valuable contributions to science (National Technology and Innovation Award 2019), for particular way of creating value for its customers (National Quality Award 2017) and for the exports of Mexico (National Export Award 2016). <br><br>René is also Chairman of the Board of Directors of the Institute for the Promotion of Quality and is a member of the Board of the German College Guadalajara, the Board of the Marisa Foundation and the Board of Mentors Endeavor, and was also president of the Guadalajara Chapter of Link+  (Monterrey Technology).",
                "image": "/img/speakers/René_Freudenberg.jpg",
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
        "time": "17:10 hrs",
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
    /*{
        "title": "Siemens",
        "title_en": "Siemens",
        "description": "",
        "description_en": "",
        "time": "13:00 hrs",
        "duration": "45 min",
        "speakers": []
    },*/
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
        "speakers": [
            {
                "id": "1",
                "name": "Hugo Isaak - Moderador",
                "position": "Miembro del Grupo Global de Expertos en Smart Cities",
                "position_en": "Member of the Global Experts Group on Smart Cities",
                "company": "ONU-Hábitat",
                "bio": "El Dr. Hugo Isaak es un líder reconocido en ciudades inteligentes y desarrollo urbano sostenible. Su formación académica incluye un doctorado en Administración Pública por la Universidad Anáhuac y la Universidad de París-Sorbona, con especialización en Urbanismo, Medio Ambiente, Economía, Desarrollo Sostenible e Inteligencia Artificial.<br><br>Experiencia Profesional: El Dr. Isaak ha desempeñado roles clave en el sector público y privado, incluyendo su nombramiento en el Grupo Global de Expertos de Smart Cities de la ONU-Hábitat, donde lidera las Guías para el Desarrollo de Ciudades Inteligentes centradas en las personas. Es fundador y CEO de 'Neurabitat', un proyecto que utiliza inteligencia artificial y análisis de datos para mejorar la interacción entre las ciudades y sus habitantes.<br><br>En la Secretaría de Relaciones Exteriores (SRE), fue Coordinador Internacional General Urbano y autor del proyecto ICI (Interconectando Ciudades Inteligentes), contribuyendo a políticas públicas sostenibles. Destacan sus negociaciones para extender el mandato de México como Presidente de la Asamblea de la ONU-Hábitat hasta 2025 y la asignación y próxima celebración del Día Mundial del Hábitat en Querétaro. <br><br><br><br>Visión y Futuro: El Dr. Isaak está comprometido con la creación de ciudades más inteligentes y sostenibles. Su visión incluye Centros de Innovación de la Ciudad Inteligente y Agencias de Transformación Digital en México y LATAM, integrando tecnologías emergentes para beneficiar a todos los ciudadanos y promover la sostenibilidad. <br><br>En resumen, el Dr. Hugo Isaak es una figura influyente con una trayectoria ejemplar y una visión clara hacia un futuro más sostenible e inclusivo.",
                "bio_en": "Dr. Hugo Isaak is a recognized leader in smart cities and sustainable urban development. His academic background includes a PhD in Public Administration from the University of Anáhuac and the University of Paris-Sorbonne, with specialization in Urbanism, Environment, Economy, Sustainable Development and Artificial Intelligence.<br><br>Professional Experience: Dr. Isaak has played key roles in the public and private sectors, including his appointment to UN-Habitat’s Global Expert Group on Smart Cities, where he leads the people-centred Guides for the Development of Smart Cities. He is the founder and CEO of 'Neurabitat', a project that uses artificial intelligence and data analysis to improve interaction between cities and their inhabitants.<br><br>In the Foreign Relations Secretariat (SRE), he was the Urban General International Coordinator and author of the ICI project (Interconnecting Smart Cities), contributing to sustainable public policies. They highlight their negotiations to extend the mandate of Mexico as President of the UN AssemblyHabitat until 2025 and the allocation and upcoming celebration of World Habitat Day in Querétaro. <br><br>Vision and Future: Dr. Isaak is committed to creating smarter, more sustainable cities. His vision includes Smart City Innovation Centers and Digital Transformation Agencies in Mexico and LATAM, Integrating emerging technologies to benefit all citizens and promote sustainability. <br><br>In short, Dr. Hugo Isaak is an influential figure with an exemplary track record and a clear vision for a more sustainable and inclusive future.",
                "image": "/img/speakers/Hugo_Isaak.jpeg",
                "email": "",
                "phone": "",
                "moderador": true
            },
            {
                "id": "2",
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
                "id": "1",
                "name": "Andreas Müller - Moderador",
                "position": "Director Adjunto",
                "position_en": "Deputy Director",
                "company": "CAMEXA",
                "bio": "Estudió Idiomas, Economía y Cultura Hispanoamericana en las universidades de Passau (Alemania) y Concepción (Chile). Vive en México desde 2003, donde trabajó en la Embajada de Austria y luego en la Delegación de la UE, dando seguimiento al TLCUEM. Desde 2011 es Subdirector de CAMEXA. Ha asesorado al CCE, SEP, COPARMEX y CONOCER en la implementación y expansión de la educación dual. Fue presidente del Comité de Energías Renovables del CONOCER y ha impulsado estándares en fotovoltaica, electromovilidad y desarrollo sostenible. Es asesor estratégico de la DIHK para la formación dual y desde 2022 vicepresidente de la Comisión México 4.0 de CONCAMIN. Desde 2024 lidera el proyecto IntegralVET (BMBF) y en 2025 fue nombrado presidente del Consejo Consultivo de la Alliance for Integrity.",
                "bio_en": "Studied Languages, Economics and Hispanic American Culture at the universities of Passau (Germany) and Concepción (Chile). He has lived in Mexico since 2003, where he worked at the Austrian Embassy and then at the EU Delegation, following up on the TLCUEM. Since 2011 he has been Deputy Director of CAMEXA. He has advised the CCE, SEP, COPARMEX and CONOCER on the implementation and expansion of dual education. He was president of the Renewable Energies Committee of CONOCER and has promoted standards in photovoltaics, electromobility and sustainable development. He is a strategic advisor to the DIHK for dual training and since 2022 has been vice president of the Mexico 4.0 Commission of CONCAMIN. Since 2024 he has led the IntegralVET (BMBF) project and in 2025 was appointed president of the Advisory Council of the Alliance for Integrity.",
                "image": "/img/speakers/Andreas_Muller.jpg",
                "email": "",
                "phone": "",
                "moderador": true
            },
            {
                "id": "2",
                "name": "Denisse Navarro",
                "position": "Oficial Nacional y Representante Adjunta",
                "position_en": "National Officer and Deputy Representative",
                "company": "UNIDO",
                "bio": "Ingeniera ambiental, obtuvo su maestría en Ecología Industrial en la Universidad Tecnológica de Chalmers en Suecia y en la Universidad de Graz en Austria. Tiene experiencia como experta internacional en el campo del desarrollo industrial de la Organización de las Naciones Unidas para el Desarrollo Industrial (ONUDI); centrándose en la gestión y diseño de proyectos estratégicos para programas de cooperación internacional y desarrollo en América Latina y el Caribe. También ha trabajado para el sector privado en el desarrollo de capacidades para la formulación de políticas industriales basadas en la evidencia. En los últimos años ha apoyado la ejecución de proyectos de la ONUDI en la región de América del Sur para el desarrollo del sector privado. Actualmente la Sra. Navarro es Oficial Nacional de Programa y Representante Adjunta de la Oficina Regional de ONUDI en México.",
                "bio_en": "Environmental engineer, obtained her master's degree in Industrial Ecology from the Chalmers University of Technology in Sweden and the University of Graz in Austria. She has experience as an international expert in the field of industrial development of the United Nations Industrial Development Organization (UNIDO); focusing on the management and design of strategic projects for international cooperation and development programs in Latin America and the Caribbean. She has also worked for the private sector in capacity development for evidence-based industrial policy formulation. In recent years, she has supported the implementation of UNIDO projects in the South American region for private sector development. Currently, Ms. Navarro is National Program Officer and Deputy Representative of the UNIDO Regional Office in Mexico.",
                "image": "/img/speakers/Denisse_Navarro_UNIDO.jpeg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Alejandro Rodríguez",
                "position": "Líder de Portafolio de Sostenibilidad",
                "position_en": "Sustainability Portfolio Leader",
                "company": "SIEMENS",
                "bio": "Ing. Eléctrico Electrónico por la Facultad de Ingeniería de la Universidad Nacional Autónoma de México. Cuenta con más de 10 años de experiencia en Manejo de Energía y Sustentabilidad. Ha ocupado diversos roles en Latinoamerica con experiencia en proyectos de Eficiencia Energética, Generación Distribuida, Automatización y Digitaización. Hoy desempeña el rol de Líder de Portafolio de Sustentabilidad en la División de Digital Industries para Siemens Mexico y Centro América enfocado en soluciones de sostenibilidad a través de la digitalización.",
                "bio_en": "Electrical and Electronic Engineer from the Faculty of Engineering of the National Autonomous University of Mexico. He has more than 10 years of experience in Energy Management and Sustainability. He has held various roles in Latin America with experience in Energy Efficiency, Distributed Generation, Automation, and Digitization projects. Today he serves as the Sustainability Portfolio Leader in the Digital Industries Division for Siemens Mexico and Central America focused on sustainability solutions through digitalization.",
                "image": "/img/speakers/Alejandro_Rodriguez.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "4",
                "name": "Miriam Macías",
                "position": "Directora para México y América Latina",
                "position_en": "Director for Mexico and Latin America",
                "company": "CMEI",
                "bio": "Especialista senior con 20 años de experiencia en cambio climático, sostenibilidad corporativa, economía circular, transición energética y descarbonización. Ha trabajado en mitigación y cuantificación de Gases de Efecto Invernadero (GEI), sistemas MRV y M&E, energías renovables, eficiencia energética, estrategias LT-LEDS, bioseguridad, gestión de riesgos, residuos, género y producción agroalimentaria sostenible. Académica en la UNAM y el Tecnológico de Monterrey, ha colaborado con diversas instituciones nacionales e internacionales del sector público y privado, como SENER, SEMARNAT, SHCP, FIRA, INECC, EPA, GIZ, FAO, BID, Banco Mundial, CONCAMIN y COPARMEX. Su experiencia se centra en el desarrollo e implementación de políticas y proyectos que promueven un desarrollo sostenible y bajas emisiones de carbono, integrando enfoques técnicos, ambientales y sociales.",
                "bio_en": "Senior specialist with 20 years of experience in climate change, corporate sustainability, circular economy, energy transition and decarbonization. She has worked on mitigation and quantification of Greenhouse Gases (GHG), MRV and M&E systems, renewable energies, energy efficiency, LT-LEDS strategies, biosecurity, risk management",
                "image": "/img/speakers/Miriam_Macías.jpeg",
                "email": "",
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