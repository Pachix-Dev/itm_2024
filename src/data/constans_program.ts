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

        "title": "El viaje de la energía hacia la era digital",
        "title_en": "The energy journey to the digital age",
        "description": "La transformación energética está redefiniendo el futuro industrial. Hoy, la transición digital nos invita a repensar cómo generamos, distribuimos y utilizamos la energía, colocando la eficiencia energética y la gestión de datos en el centro de la estrategia. En esta charla exploraremos cómo Siemens ha apostado por integrar electrificación y digitalización para habilitar operaciones más sostenibles, resilientes y competitivas. Más que un cambio tecnológico, se trata de un cambio de visión: construir un modelo integral de energía inteligente que permita a la industria mexicana liderar la transición hacia un futuro más eficiente y sostenible.",
        "description_en": "The energy transformation is redefining the industrial future. Today, the digital transition invites us to rethink how we generate, distribute and use energy, placing energy efficiency and data management at the center of the strategy. In this talk we will explore how Siemens has bet on integrating electrification and digitalization to enable more sustainable, resilient and competitive operations. More than a technological change, it is a change of vision: building a comprehensive smart energy model that allows the Mexican industry to lead the transition to a more efficient and sustainable future.",
        "time": "13:00 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Alejandra Paola Matus",
                "position": "Power Utilities Manager",
                "position_en": "President & CEO",
                "company": "Siemens",
                "bio": "La Ingeniera Alejandra Paola Matus Sánchez es egresada de la Universidad Autónoma de Baja California Sur, especializada en Ciencias Ambientales, energías renovables y sustentabilidad. Con más de ocho años de experiencia en el sector energético, actualmente se desempeña como Gerente de Proyectos de Generación en Siemens, liderando iniciativas clave para la transición energética en México. Ha colaborado en proyectos estatales, federales y privados, y ha participado activamente en foros nacionales e internacionales enfocados en innovación tecnológica y energías limpias. En este panel, compartirá su visión sobre el papel estratégico de proyectos de generación renovable, destacando su importancia para fortalecer una matriz energética más sostenible y resiliente.",
                "bio_en": "Engineer Alejandra Paola Matus Sánchez graduated from the Autonomous University of Baja California Sur, specializing in Environmental Sciences, renewable energies and sustainability. With more than eight years of experience in the energy sector, she currently serves as Project Manager for Generation at Siemens, leading key initiatives for the energy transition in Mexico. She has collaborated on state, federal and private projects, and has actively participated in national and international forums focused on technological innovation and clean energies. In this panel, she will share her vision on the strategic role of renewable generation projects, highlighting their importance in strengthening a more sustainable and resilient energy matrix.",
                "image": "/img/speakers/alejandrapaolamaturs.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]

    },
    {

        "title": "Soluciones que Impulsan Resultados: Digitalización y Eficiencia en la Industria 4.0",
        "title_en": "Solutions that Drive Results: Digitalization and Efficiency in Industry 4.0",
        "description": "",
        "description_en": "",
        "time": "13:50 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Juan José Rodríguez ",
                "position": "Sales Distribution Engineer Team Leader",
                "position_en": "Sales Distribution Engineer Team Leader",
                "company": "Schneider Electric",
                "bio": "Juan José Rodríguez cuenta con más de 14 años de experiencia en el sector eléctrico, desarrollando su carrera en diversas áreas estratégicas dentro de Schneider Electric. Ha desempeñado funciones como ingeniero de aplicaciones en media y baja tensión, y ha liderado exitosamente posiciones comerciales clave. Su enfoque se centra en el desarrollo de negocios, planificación, marketing y ventas, con una clara orientación a fortalecer canales de distribución y sectores estratégicos.",
                "bio_en": "Juan José Rodríguez has over 14 years of experience in the electrical sector, developing his career in various strategic areas within Schneider Electric. He has served as an applications engineer in medium and low voltage, and has successfully led key commercial positions. His focus is on business development, planning, marketing and sales, with a clear orientation to strengthen distribution channels and strategic sectors.",
                "image": "/img/juanjoseRodriguez.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Juan José Rodríguez ",
                "position": "Future Offer Manager ",
                "position_en": "Future Offer Manager",
                "company": "Schneider Electric",
                "bio": "Leonardo Fernandez, Cuenta con una sólida formación en ingeniería y experiencia en gestión de productos, desarrollo de negocios y transformación digital. Trabaja en estrecha colaboración con equipos globales, clientes y socios estratégicos para acelerar la adopción de tecnologías disruptivas. Lidera el desarrollo de nuevas soluciones en Schneider Electric, anticipando tendencias del mercado y alineando la innovación con las necesidades del cliente. Consejero de la sección de Electromobilidad en CANAME",
                "bio_en": "Leonardo Fernandez has a solid engineering background and experience in product management, business development and digital transformation. He works closely with global teams, customers and strategic partners to accelerate the adoption of disruptive technologies. He leads the development of new solutions at Schneider Electric, anticipating market trends and aligning innovation with customer needs. Advisor to the Electromobility section at CANAME",
                "image": "/img/speakers/LeonardoFernandez.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Oliver Castellanos ",
                "position": "System & Architecture Engineer Senior",
                "position_en": "System & Architecture Engineer Senior",
                "company": "Schneider Electric",
                "bio": "Oliver Castellanos Ingeniero Mecatrónico egresado de la Universidad Marista. Ha trabajado en diseño, ejecución y supervisión de proyectos automatización y aire acondicionado con DCI, y Hubard y Bourlon, esta última ahora CICSA de Grupo Carso. Actualmente, se desempeña como Solution Architect de Automatización de Edificios Control de acceso, Medición y Scadas Eléctricos  se encarga de impartir las certificaciones de estas soluciones. Es miembro asociado de la ASHRAE Capítulo Monterrey.",
                "bio_en": "Oliver Castellanos is a Mechatronics Engineer graduated from Universidad Marista. He has worked in the design, execution and supervision of automation and air conditioning projects with DCI, and Hubard y Bourlon, the latter now CICSA of Grupo Carso. Currently, he serves as Building Automation Solution Architect Access Control, Measurement and Electrical Scadas he is responsible for imparting the certifications of these solutions. He is an associate member of ASHRAE Monterrey Chapter.",
                "image": "/img/speakers/Oliver_Castellanos.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {

        "title": "Telcel",
        "title_en": "Telcel",
        "description": "",
        "description_en": "",
        "time": "14:40 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Alejandro Gutiérrez Olvera",
                "position": "Subdirector de MKT CX Empresarial y Medios",
                "position_en": "Deputy Director of MKT CX Business and Media",
                "company": "Telcel",
                "bio": "Alejandro ha construido una sólida trayectoria en América Latina y el Caribe angloparlante, ocupando cargos directivos en marketing, ventas, operaciones y desarrollo de negocios, con un historial comprobado de resultados. Actualmente impulsa la transformación de Telcel hacia una empresa digital, integrando su experiencia en productos de consumo y tecnología para ofrecer un enfoque holístico al cliente. Es Ingeniero Mecánico y Eléctrico con especialidad en Ingeniería Industrial por la Universidad Panamericana, y cuenta con dos maestrías en Administración de Empresas: Finanzas en la Universidad Anáhuac y Negociaciones Internacionales en Thunderbird School of Global Management. Es socio fundador y consejero en Prestigos, reconocida por Wayra de Telefónica. Ha participado en paneles sobre marketing digital como IMS Immersion Day, Twitter for Leaders y Headways Leaders Lectures.",
                "bio_en": "Alejandro has built a solid career in Latin America and English-speaking Caribbean, holding leadership positions in marketing, sales, operations and business development, with a proven track record of results. He is currently driving Telcel's transformation into a digital company, integrating his experience in consumer products and technology to offer a holistic approach to the customer. He is a Mechanical and Electrical Engineer with a specialty in Industrial Engineering from Universidad Panamericana, and has two master's degrees in Business Administration: Finance from Universidad Anáhuac and International Negotiations from Thunderbird School of Global Management. He is a founding partner and advisor at Prestigos, recognized by Wayra from Telefónica. He has participated in panels on digital marketing such as IMS Immersion Day, Twitter for Leaders and Headways Leaders Lectures.",
                "image": "/img/speakers/AlejandroGutiérrezOlvera.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
        "title": "Mitsubishi",
        "title_en": "Mitsubishi",
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
        "title": "De la idea a la máquina: cómo acelerar proyectos industriales con MISUMI",
        "title_en": "From idea to machine: how to accelerate industrial projects with MISUMI",
        "description": "Antonio Briseño, presentará cómo la plataforma digital de MISUMI, junto con innovaciones como MISUMI Complete, que utiliza inteligencia artificial para encontrar rápidamente los componentes adecuados, y Chatsumi, el chatbot que agiliza pedidos y consultas, está transformando la manera en que la industria diseña, fabrica y mantiene sus equipos. Una charla con enfoque práctico y comercial que mostrará cómo acceder a millones de componentes con mayor velocidad, precisión y confiabilidad en cada proyecto.",
        "description_en": "Antonio Briseño will present how MISUMI's digital platform, along with innovations like MISUMI Complete, which uses artificial intelligence to quickly find the right components, and Chatsumi, the chatbot that streamlines orders and inquiries, is transforming the way industry designs, manufactures and maintains its equipment. A talk with a practical and commercial focus that will show how to access millions of components with greater speed, accuracy and reliability in each project.",
        "time": "17:20 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Antonio Briseño",
                "position": "Lider de Soporte Técnico",
                "position_en": "Technical Support Leader",
                "company": "MISUMI MEXICO",
                "bio": "Con sólida experiencia en atención a clientes industriales, Antonio Briseño se especializa en conectar a ingenieros e integradores con soluciones que impulsan sus proyectos. Su liderazgo está orientado a mostrar el valor de las plataformas digitales y el soporte local que distingue a la compañía. Convencido de que la velocidad, la precisión y la confiabilidad son factores decisivos para transformar ideas en resultados, su visión está enfocada en la eficiencia y la experiencia del usuario, su trabajo conecta la tecnología con las necesidades reales de la industria.",
                "bio_en": "With solid experience in serving industrial clients, Antonio Briseño specializes in connecting engineers and integrators with solutions that drive their projects. His leadership is focused on showcasing the value of digital platforms and the local support that distinguishes the company. Convinced that speed, accuracy, and reliability are decisive factors in transforming ideas into results, his vision is focused on efficiency and user experience, his work connects technology with the real needs of the industry.",
                "image": "/img/speakers/Antonio_Briseño.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "Presentación de la guía de aplicación – Potenciando la innovación 5G: Casos de uso y recomendaciones de aplicación industrial en México Transformation",
        "title_en": "Presentation of the application guide - Empowering 5G innovation: Use cases and recommendations for industrial application in Mexico Transformation",
        "description": "Presentar recomendaciones y buenas prácticas identificadas en la nueva guía 5G sobre aplicación industrial y generar un diálogo abierto entre representantes del sector público, privado, académico y sociedad civil sobre la aplicación de 5G en sectores industriales. Para hacer un llamado a la acción a distintos sectores del ecosistema digital y fomentar una implementación efectiva y colaborativa de esta tecnología. ",
        "description_en": "Present recommendations and best practices identified in the new 5G guide on industrial application and generate an open dialogue between representatives of the public, private, academic and civil society sectors on the application of 5G in industrial sectors. To call for action to different sectors of the digital ecosystem and promote effective and collaborative implementation of this technology.",
        "time": "18:10 hrs",
        "duration": "35 min",
        "speakers": []
    },
]

const stage_1_day_2: Program[] = [
    {

        "title": "Sistemas de Visión Industrial para una Automatización Mejorada",
        "title_en": "Industrial Vision Systems for Enhanced Automation",
        "description": "Descubre cómo Beckhoff Vision revoluciona la automatización industrial integrando visión, control, movimiento y PLC en una sola plataforma - Sin hardware ni software adicional: todo se sincroniza en tiempo real con los procesos de máquina - Soluciones escalables y de alto rendimiento: cámaras, óptica e iluminación industrial listas para cualquier entorno. - Integración total - elimina barreras entre visión y automatización, simplificando la ingeniería y operación - Procesos más precisos y ágiles: optimiza producción, calidad y eficiencia industrial - Innovación aplicada: habilita nuevas posibilidades para sistemas industriales avanzados - Con Beckhoff, la visión industrial se vuelve inteligente, unificada y potente.",
        "description_en": "Discover how Beckhoff Vision revolutionizes industrial automation by integrating vision, control, motion, and PLC into a single platform - No additional hardware or software: everything synchronizes in real time with machine processes - Scalable and high-performance solutions: cameras, optics, and industrial lighting ready for any environment. - Total integration - eliminates barriers between vision and automation, simplifying engineering and operation - More precise and agile processes: optimizes production, quality, and industrial efficiency - Applied innovation: enables new possibilities for advanced industrial systems - With Beckhoff, industrial vision becomes intelligent, unified, and powerful.",
        "img": "/img/program/beckhoff.png",
        "time": "11:20 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Adrián Ismael Beas Mora ",
                "position": "Ingeniero Especialista de Producto – I/O",
                "position_en": "Engineer Product Specialist – I/O",
                "company": "Beckhoff Automation SA de CV",
                "bio": "Egresado del Centro de Enseñanza Técnica Industrial (CETI), consolidó su formación en control, automatización e integración de sistemas. Ingeniero en Mecatrónica y Especialista de Producto en I/O en Beckhoff Automation, apasionado por llevar la automatización al siguiente nivel. Ha complementado su trayectoria con capacitaciones internacionales en España y Estados Unidos, especializándose en el amplio campo de los módulos I/O y los buses de campo. Su enfoque combina innovación tecnológica con experiencia práctica en entornos productivos. Ha participado en proyectos innovadores con importantes empresas del sector automotriz, implementando soluciones que integran procesamiento de imágenes, programación de algoritmos y tecnologías de control avanzado para lograr una producción más ágil y precisa.",
                "bio_en": "A graduate of the Centro de Enseñanza Técnica Industrial (CETI), he consolidated his training in control, automation and systems integration. Engineer in Mechatronics and Product Specialist in I/O at Beckhoff Automation, passionate about taking automation to the next level. He has complemented his career with international training in Spain and the United States, specializing in the broad field of I/O modules and field buses. His approach combines technological innovation with practical experience in production environments. He has participated in innovative projects with major companies in the automotive sector, implementing solutions that integrate image processing, algorithm programming and advanced control technologies to achieve more agile and precise production.",
                "image": "/img/speakers/Adrián_Beas.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Pablo Fernandez Olvera ",
                "position": "Ingeniero Especialista de Producto – Visión",
                "position_en": "Engineer Product Specialist – Vision",
                "company": "Beckhoff Automation SA de CV",
                "bio": "Egresado de la ESIME Zacatenco del IPN como Ingeniero en Comunicaciones y Electrónica. Ha fortalecido su formación en tecnologías de visión industrial con capacitaciones internacionales en Alemania y España, especializándose en TwinCAT Vision, sistemas XTS y soluciones de automatización Beckhoff. Actualmente se desempeña como Especialista de Producto en Visión Industrial en Beckhoff Automation. Su enfoque combina innovación tecnológica con un sólido dominio en procesamiento de imágenes, control de movimiento y automatización avanzada. Impulsa en México la adopción de TwinCAT Vision y las soluciones de automatización de Beckhoff como un pilar estratégico en la transformación digital de la industria, ofreciendo a las empresas herramientas que marcan la diferencia en su camino hacia la fábrica inteligente.",
                "bio_en": "A graduate of ESIME Zacatenco of the IPN as an Engineer in Communications and Electronics. He has strengthened his training in industrial vision technologies with international training in Germany and Spain, specializing in TwinCAT Vision, XTS systems and Beckhoff automation solutions. He currently serves as Product Specialist in Industrial Vision at Beckhoff Automation. His approach combines technological innovation with a solid mastery in image processing, motion control and advanced automation. He promotes in Mexico the adoption of TwinCAT Vision and Beckhoff's automation solutions as a strategic pillar in the digital transformation of the industry, offering companies tools that make a difference on their way to the smart factory.",
                "image": "/img/speakers/Pablo_Fernández.webp",
                "email": "",
                "phone": "",
                "moderador": false
            }
        ]
    },
    {
        "title": "El camino hacia la planta autónoma",
        "title_en": "The Road to the Autonomous Plant",
        "description": "Explora cómo la digitalización, la automatización y la inteligencia artificial transforman la producción industrial. A través de casos y experiencias reales, se aborda la evolución de las plantas hacia modelos más flexibles, conectados y autosuficientes, donde humanos y máquinas colaboran en un ecosistema inteligente y sostenible.",
        "description_en": "Explore how digitalization, automation, and artificial intelligence are transforming industrial production. Through real cases and experiences, the evolution of plants towards more flexible, connected, and self-sufficient models is addressed, where humans and machines collaborate in an intelligent and sustainable ecosystem.",
        "time": "12:00 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Gilberto Coxa",
                "position": "Sales Specialists Manager en Siemens Digital Industries",
                "position_en": "Sales Specialists Manager en Siemens Digital Industries",
                "company": "Siemens México, Centroamérica y el Caribe",
                "bio": "Gilberto Coxca es Sales Specialists Manager en Siemens Digital Industries, responsable de liderar un equipo nacional enfocado en el portafolio de Automatización Discreta (DI AUT). Su misión combina liderazgo de alto impacto con expertise técnico, impulsando el crecimiento de negocio mediante estrategias de ventas consultivas, desarrollo de talento y posicionamiento tecnológico en mercados clave. Con trayectoria en automatización, robótica y transformación digital, ha consolidado alianzas estratégicas y liderado proyectos que integran IT/OT para acercar a la industria hacia modelos más flexibles, eficientes y sostenibles.",
                "bio_en": "Gilberto Coxca is Sales Specialists Manager at Siemens Digital Industries, responsible for leading a national team focused on the Discrete Automation (DI AUT) portfolio. His mission combines high-impact leadership with technical expertise, driving business growth through consultative sales strategies, talent development, and technological positioning in key markets. With a background in automation, robotics, and digital transformation, he has consolidated strategic alliances and led projects that integrate IT/OT to bring the industry closer to more flexible, efficient, and sustainable models.",
                "image": "/img/speakers/Gilberto_Coxa.webp",
                "email": "",
                "phone": "",
                "moderador": false
            }
        ]
    },
    {
        "title": "Roue",
        "title_en": "Roue",
        "description": "",
        "description_en": "",
        "time": "12:50 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "Del Reto a la Solución: Cómo la Automatización Revoluciona el Negocio ",
        "title_en": "From Challenge to Solution: How Automation is Revolutionizing Business",
        "description": "¿Cómo enfrentas los desafíos más grandes de tu sector? En esta sesión, te llevaremos en un viaje desde el problema hasta la solución, mostrando cómo la automatización y la tecnología de colaboración se han convertido en la clave para una productividad sin precedentes y un futuro más sostenible.",
        "description_en": "How do you face the biggest challenges in your sector? In this session, we will take you on a journey from problem to solution, showing how automation and collaborative technology have become the key to unprecedented productivity and a more sustainable future.",
        "time": "13:30 hrs",
        "duration": "45 min",   
        "speakers": [
            {
                "id": "1",
                "name": "Mayra Gaxiola",
                "position": "Business Developer Manager",
                "position_en": "Sales Specialists Manager en Siemens Digital Industries",
                "company": "Schneider Electric",
                "bio": "Mayra Gaxiola Ingeniero Industrial y de Sistemas por parte del Tecnológico de Monterrey cuenta con una sólida experiencia en desarrollo de negocios, transformación digital y soluciones inteligentes para la industria. En su rol como Industrial Automation Business Developer Manager en Schneider Electric México, lidera la identificación de oportunidades estratégicas, la creación de propuestas de valor y la implementación de soluciones tecnológicas que optimizan la eficiencia operativa de sus clientes",
                "bio_en": "Mayra Gaxiola, Industrial and Systems Engineer from Tecnológico de Monterrey, has solid experience in business development, digital transformation, and smart solutions for the industry. In her role as Industrial Automation Business Developer Manager at Schneider Electric Mexico, she leads the identification of strategic opportunities, the creation of value propositions, and the implementation of technological solutions that optimize the operational efficiency of her clients.",
                "image": "/img/speakers/Mayra_Gaxiola.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Irving Salgado",
                "position": "Business Depeloper",
                "position_en": "Sales Specialists Manager en Siemens Digital Industries",
                "company": "Schneider Electric",
                "bio": "Irving Salgado Ingeniero en Control y Automatización con amplia experiencia en BMS, enfocado en el ahorro energético y la optimización de sistemas HVAC, iluminación e hidráulicos. Actualmente es Building Automation Business Developer para Schneider Electric, promoviendo la automatización y eficiencia energética. Tiene experiencia en control de acceso, CCTV, detección de incendios y monitoreo de energía, y ha supervisado equipos y proyectos.",
                "bio_en": "Irving Salgado, Control and Automation Engineer with extensive experience in BMS, focused on energy savings and optimization of HVAC, lighting and hydraulic systems. He is currently Building Automation Business Developer for Schneider Electric, promoting automation and energy efficiency. He has experience in access control, CCTV, fire detection and energy monitoring, and has supervised teams and projects.",
                "image": "/img/speakers/Irving_Salgado.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Abigail Carrillo",
                "position": "Business Depeloper",
                "position_en": "Sales Specialists Manager en Siemens Digital Industries",
                "company": "Schneider Electric",
                "bio": "Abigail Carrillo Ingeniera mecánica por la Escuela Superior de Ingeniería Mecánica y Eléctrica del Instituto Politécnico Nacional, con estudios en automatización industrial en la Universidad Tecnológica de Troyes, Francia. Actualmente es desarrolladora de negocios de equipos de medición de potencia, software de control, monitoreo y eficiencia energética para Schneider Electric México.",
                "bio_en": "Abigail Carrillo is a mechanical engineer from the Escuela Superior de Ingeniería Mecánica y Eléctrica of the Instituto Politécnico Nacional, with studies in industrial automation at the University of Technology of Troyes, France. She is currently a business developer for power measurement equipment, control software, monitoring and energy efficiency for Schneider Electric Mexico.",
                "image": "/img/speakers/abigail_carrillo.webp",
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
        "title": "El Lenguaje Global de Producción como motor de la transformación industrial en México",
        "title_en": "The Global Production Language as a driver of industrial transformation in Mexico",
        "description": "Explorar el potencial de OPC UA (Open Platform Communications Unified Architecture) como estándar clave para la interoperabilidad en la Industria 4.0, analizando cómo su adopción puede mejorar la competitividad de las empresas mexicanas, optimizar el uso de recursos y facilitar la transición hacia procesos industriales más sostenibles. ",
        "description_en": "Explore the potential of OPC UA (Open Platform Communications Unified Architecture) as a key standard for interoperability in Industry 4.0, analyzing how its adoption can improve the competitiveness of Mexican companies, optimize resource use and facilitate the transition to more sustainable industrial processes.",
        "time": "16:00 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Lilia de Diego Correa - Moderador",
                "position": "Asesora Técnica",
                "position_en": "Technical Advisor",
                "company": "Cooperación Técnica Alemana",
                "bio": "Lilia de Diego es asesora del Proyecto Global de Infraestructura de la Calidad (GPQI), iniciativa del Ministerio Federal de Economía y Energía de Alemania (BMWE), donde desde 2019 facilita el Diálogo Mexicano-Alemán en Infraestructura de la Calidad. Con más de seis años de experiencia en este ámbito, ha trabajado de cerca con representantes del sector industrial y autoridades mexicanas para promover la adopción de estándares internacionales, mejorar la competitividad y facilitar el comercio a través de una infraestructura de la calidad sólida. Desde 2017 colabora con la Cooperación Técnica Alemana (GIZ), impulsando temas clave como la ciberseguridad industrial y la transformación digital bajo el enfoque de Industria 4.0, con un fuerte compromiso con la innovación, la sostenibilidad y la colaboración público-privada. Es licenciada en Relaciones Internacionales por la UNAM, maestra en Estudios Regionales por el Instituto Mora y especialista en Gobernanza Global por el Instituto Alemán para el Desarrollo y la Sustentabilidad (IDOS) en Bonn, Alemania.",
                "bio_en": "Lilia de Diego is an advisor to the Global Quality Infrastructure Project (GPQI), an initiative of the German Federal Ministry for Economic Affairs and Energy (BMWE), where since 2019 she has facilitated the Mexican-German Dialogue on Quality Infrastructure. With more than six years of experience in this field, she has worked closely with representatives of the industrial sector and Mexican authorities to promote the adoption of international standards, improve competitiveness and facilitate trade through a solid quality infrastructure. Since 2017 she has collaborated with the German Technical Cooperation (GIZ), promoting key issues such as industrial cybersecurity and digital transformation under the Industry 4.0 approach, with a strong commitment to innovation, sustainability and public-private collaboration. She holds a degree in International Relations from UNAM, a master's degree in Regional Studies from Instituto Mora and is a specialist in Global Governance from the German Institute for Development and Sustainability (IDOS) in Bonn, Germany.",
                "image": "/img/speakers/liliade_diego.webp",
                "email": "",
                "phone": "",
                "moderador": true
            },
            {
                "id": "2",
                "name": "Eric Schmidt",
                "position": "Referente del Ecosistema de Interoperabilidad",
                "position_en": "Interoperability Ecosystem Reference",
                "company": "VDMA",
                "bio": "Es responsable de las actividades de armonización de la interoperabilidad del ecosistema en VDMA en las áreas de OPC UA, Asset Administration Shell (AAS) y Data Spaces. Este ámbito también incluye el desarrollo del denominado “Lenguaje Global de Producción”, en el que colaboran más de 600 empresas a nivel mundial. Gracias a su estrecha colaboración con numerosas compañías del sector internacional de la maquinaria y la ingeniería de plantas, es un valioso punto de contacto en temas de estandarización de OPC UA, AAS y producción inteligente, representando sus intereses y requerimientos dentro del ecosistema de la Industria 4.0. Antes de incorporarse a VDMA, el Sr. Schmidt estudió ingeniería mecánica y fue investigador asociado en la Universidad Técnica de Darmstadt, donde se especializó en producción en red y en el monitoreo de condiciones de herramientas basado en inteligencia artificial",
                "bio_en": "He is responsible for interoperability harmonization activities of the ecosystem at VDMA in the areas of OPC UA, Asset Administration Shell (AAS) and Data Spaces. This scope also includes the development of the so-called “Global Production Language”, in which more than 600 companies worldwide collaborate. Thanks to his close collaboration with numerous companies in the international machinery and plant engineering sector, he is a valuable point of contact on issues of OPC UA standardization, AAS and smart production, representing their interests and requirements within the Industry 4.0 ecosystem. Before joining VDMA, Mr. Schmidt studied mechanical engineering and was an associate researcher at the Technical University of Darmstadt, where he specialized in networked production and AI-based tool condition monitoring.",
                "image": "/img/speakers/Eric_Schmidt.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Adrián Rossano",
                "position": "CEO, Geckko Telekom Vicepresidente de Innovación, CANACINTRA Puebla",
                "position_en": "CEO, Geckko Telekom Vice President of Innovation, CANACINTRA Puebla",
                "company": "",
                "bio": "Adrián Rossano Camacho es Licenciado en Administración de Empresas por la Benemérita Universidad Autónoma de Puebla (BUAP) y ha complementado su formación con estudios en innovación, tecnología y transformación digital en instituciones de prestigio internacional como el IESDE, el MIT Media Lab, la Harvard Business School, la UPAEP y Google. Actualmente se desempeña como CEO de Geckko Telekom y Vicepresidente de Innovación de CANACINTRA Puebla, organismo en el que ha ocupado distintos cargos de liderazgo, entre ellos Presidente del Sector TI, Consejero Nacional, Vicepresidente de Sectores, Presidente del Comité de Innovación en Puebla, miembro del Comité Nacional de Innovación y Presidente de la Comisión de Industria 4.0 de CANACINTRA Nacional. Su trayectoria ha sido reconocida por organismos como el Smart City Expo World Congress, FIRA Barcelona Internacional, la Secretaría de Economía, Unincube Empresas UPAEP y el Gobierno del Estado de Puebla.",
                "bio_en": "Adrián Rossano Camacho holds a degree in Business Administration from the Benemérita Universidad Autónoma de Puebla (BUAP) and has complemented his education with studies in innovation, technology, and digital transformation at prestigious international institutions such as IESDE, MIT Media Lab, Harvard Business School, UPAEP, and Google. He currently serves as CEO of Geckko Telekom and Vice President of Innovation at CANACINTRA Puebla, an organization where he has held various leadership positions, including President of the IT Sector, National Advisor, Vice President of Sectors, President of the Innovation Committee in Puebla, member of the National Innovation Committee, and President of the Industry 4.0 Commission of CANACINTRA Nacional. His career has been recognized by organizations such as the Smart City Expo World Congress, FIRA Barcelona International, the Ministry of Economy, Unincube Empresas UPAEP, and the Government of the State of Puebla.",
                "image": "/img/speakers/Adrián_Rossano.webp",
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
        "time": "17:00 hrs",
        "duration": "35 min",
        "speakers": []
    },
    {
        "title": "De la idea a la máquina: cómo acelerar proyectos industriales con MISUMI",
         "title_en": "From idea to machine: how to accelerate industrial projects with MISUMI",
        "description": "Antonio Briseño, presentará cómo la plataforma digital de MISUMI, junto con innovaciones como MISUMI Complete, que utiliza inteligencia artificial para encontrar rápidamente los componentes adecuados, y Chatsumi, el chatbot que agiliza pedidos y consultas, está transformando la manera en que la industria diseña, fabrica y mantiene sus equipos. Una charla con enfoque práctico y comercial que mostrará cómo acceder a millones de componentes con mayor velocidad, precisión y confiabilidad en cada proyecto.",
         "description_en": "Antonio Briseño will present how MISUMI's digital platform, along with innovations like MISUMI Complete, which uses artificial intelligence to quickly find the right components, and Chatsumi, the chatbot that streamlines orders and inquiries, is transforming the way industry designs, manufactures and maintains its equipment. A talk with a practical and commercial focus that will show how to access millions of components with greater speed, accuracy and reliability in each project.",
         "time": "17:30 hrs",
         "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Antonio Briseño",
                "position": "Lider de Soporte Técnico",
                "position_en": "Technical Support Leader",
                "company": "MISUMI MEXICO",
                "bio": "Con sólida experiencia en atención a clientes industriales, Antonio Briseño se especializa en conectar a ingenieros e integradores con soluciones que impulsan sus proyectos. Su liderazgo está orientado a mostrar el valor de las plataformas digitales y el soporte local que distingue a la compañía. Convencido de que la velocidad, la precisión y la confiabilidad son factores decisivos para transformar ideas en resultados, su visión está enfocada en la eficiencia y la experiencia del usuario, su trabajo conecta la tecnología con las necesidades reales de la industria.",
                "bio_en": "With solid experience in serving industrial clients, Antonio Briseño specializes in connecting engineers and integrators with solutions that drive their projects. His leadership is focused on showcasing the value of digital platforms and the local support that distinguishes the company. Convinced that speed, accuracy, and reliability are decisive factors in transforming ideas into results, his vision is focused on efficiency and user experience, his work connects technology with the real needs of the industry.",
                "image": "/img/speakers/Antonio_Briseño.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
        "title": "Blindaje digital para la industria 4.0: el enfoque de Siemens en ciberseguridad",
        "title_en": "Digital Shielding for Industry 4.0: Siemens' Approach to Cybersecurity",
        "description": "En esta conferencia descubrirás cómo Siemens está liderando la protección de la industria 4.0 a través de un enfoque integral de ciberseguridad industrial. Conocerás su mapa de ruta estratégico, las soluciones tecnológicas que están transformando la seguridad operativa y casos de éxito reales que demuestran cómo se puede blindar la infraestructura crítica sin comprometer la productividad. Si trabajas en sectores industriales, tecnología o gestión de riesgos, esta sesión te dará una visión clara de cómo anticiparse a las amenazas digitales en entornos cada vez más conectados.",
        "description_en": "In this conference, you will discover how Siemens is leading the protection of Industry 4.0 through a comprehensive approach to industrial cybersecurity. You will learn about its strategic roadmap, the technological solutions that are transforming operational security, and real success stories that demonstrate how critical infrastructure can be shielded without compromising productivity. If you work in industrial sectors, technology, or risk management, this session will provide you with a clear view of how to anticipate digital threats in increasingly connected environments.",
        "time": "12:00 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Melisa Cuevas",
                "position": "Manager de Negocio",
                "position_en": "Business Manager",
                "company": "Siemens México, Centroamérica y el Caribe",
                "bio": "Con sólida experiencia en atención a clientes industriales, Antonio Briseño se especializa en conectar a ingenieros e integradores con soluciones que impulsan sus proyectos. Su liderazgo está orientado a mostrar el valor de las plataformas digitales y el soporte local que distingue a la compañía. Convencido de que la velocidad, la precisión y la confiabilidad son factores decisivos para transformar ideas en resultados, su visión está enfocada en la eficiencia y la experiencia del usuario, su trabajo conecta la tecnología con las necesidades reales de la industria.",
                "bio_en": "With solid experience in serving industrial clients, Antonio Briseño specializes in connecting engineers and integrators with solutions that drive their projects. His leadership is focused on showcasing the value of digital platforms and the local support that distinguishes the company. Convinced that speed, accuracy, and reliability are decisive factors in transforming ideas into results, his vision is focused on efficiency and user experience, his work connects technology with the real needs of the industry.",
                "image": "/img/speakers/Melisa_Cuevas.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "De la idea a la máquina: cómo acelerar proyectos industriales con MISUMI",
        "title_en": "From Idea to Machine: How to Accelerate Industrial Projects with MISUMI",
        "description": "Antonio Briseño, presentará cómo la plataforma digital de MISUMI, junto con innovaciones como MISUMI Complete, que utiliza inteligencia artificial para encontrar rápidamente los componentes adecuados, y Chatsumi, el chatbot que agiliza pedidos y consultas, está transformando la manera en que la industria diseña, fabrica y mantiene sus equipos. Una charla con enfoque práctico y comercial que mostrará cómo acceder a millones de componentes con mayor velocidad, precisión y confiabilidad en cada proyecto.",
        "description_en": "Antonio Briseño will present how MISUMI's digital platform, along with innovations like MISUMI Complete, which uses artificial intelligence to quickly find the right components, and Chatsumi, the chatbot that streamlines orders and inquiries, is transforming the way industry designs, manufactures and maintains its equipment. A talk with a practical and commercial focus that will show how to access millions of components with greater speed, accuracy and reliability in each project.",
         "time": "12:50 hrs",
         "duration": "45 min",
         "speakers": [
            {
                "id": "1",
                "name": "Antonio Briseño",
                "position": "Lider de Soporte Técnico",
                "position_en": "Technical Support Leader",
                "company": "MISUMI MEXICO",
                "bio": "Con sólida experiencia en atención a clientes industriales, Antonio Briseño se especializa en conectar a ingenieros e integradores con soluciones que impulsan sus proyectos. Su liderazgo está orientado a mostrar el valor de las plataformas digitales y el soporte local que distingue a la compañía. Convencido de que la velocidad, la precisión y la confiabilidad son factores decisivos para transformar ideas en resultados, su visión está enfocada en la eficiencia y la experiencia del usuario, su trabajo conecta la tecnología con las necesidades reales de la industria.",
                "bio_en": "With solid experience in serving industrial clients, Antonio Briseño specializes in connecting engineers and integrators with solutions that drive their projects. His leadership is focused on showcasing the value of digital platforms and the local support that distinguishes the company. Convinced that speed, accuracy, and reliability are decisive factors in transforming ideas into results, his vision is focused on efficiency and user experience, his work connects technology with the real needs of the industry.",
                "image": "/img/speakers/Antonio_Briseño.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
         ]
    },
    {
        "title": "Digitalizando con Impacto: Eficiencia, Conectividad y Ciberseguridad ",
        "title_en": "Digitizing with Impact: Efficiency, Connectivity and Cybersecurity",
        "description": "En un mundo cada vez más conectado, la digitalización es la clave del éxito. Pero, ¿cómo garantizar la seguridad? Este panel revelará cómo las soluciones digitales de Schneider Electric no solo optimizan la eficiencia operativa, sino que también protegen tu negocio de los desafíos de la ciberseguridad, asegurando un crecimiento confiable y escalable.",
        "description_en": "In an increasingly connected world, digitization is the key to success. But how to ensure security? This panel will reveal how Schneider Electric's digital solutions not only optimize operational efficiency but also protect your business from cybersecurity challenges, ensuring reliable and scalable growth.",
        "time": "13:40 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Roger Roa",
                "position": "Cybersecurity Business Consultant Lead",
                "position_en": "Cybersecurity Business Consultant Lead",
                "company": "Schneider Electric",
                "bio": "Roger Roa Ingeniero Eléctrico por parte de la Universidad de loa Andes, lidera la consultoría de ciberseguridad en Schneider Electric, guiando a clientes en la protección de sus infraestructuras críticas mediante soluciones digitales seguras y alineadas con estándares internacionales. Su enfoque estratégico y técnico permite identificar riesgos, diseñar arquitecturas seguras y fortalecer la resiliencia operativa en entornos industriales.",
                "bio_en": "Roger Roa, Electrical Engineer from the University of the Andes, leads cybersecurity consulting at Schneider Electric, guiding clients in protecting their critical infrastructures through secure digital solutions aligned with international standards. His strategic and technical approach allows him to identify risks, design secure architectures, and strengthen operational resilience in industrial environments.",
                "image": "/img/speakers/Roger_Roa.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Belem Castañeda",
                "position": "Ofter Category Manager Services",
                "position_en": "Ofter Category Manager Services",
                "company": "Schneider Electric",
                "bio": "Belem Castañeda Egresada de la carrera de Ingeniería Industrial del Instituto Politécnico Nacional, es responsable de gestionar y desarrollar el portafolio de servicios dentro de Schneider Electric, alineando las ofertas con las necesidades del mercado y la estrategia de negocio. Su enfoque combina análisis de mercado, innovación y colaboración con equipos comerciales para impulsar soluciones de alto valor para los clientes.",
                "bio_en": "Belem Castañeda, a graduate of Industrial Engineering from the Instituto Politécnico Nacional, is responsible for managing and developing the service portfolio within Schneider Electric, aligning offerings with market needs and business strategy. Her approach combines market analysis, innovation, and collaboration with commercial teams to drive high-value solutions for clients.",
                "image": "/img/speakers/Belem_Castañeda.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Sharon Álvarez",
                "position": "Business Developer",
                "position_en": "Business Developer",
                "company": "Schneider Electric",
                "bio": "Sharon Álvarez Ingeniera en Robótica Industrial por el Instituto Politécnico Nacional, con más de 11 años de experiencia dedicada a Infraestructura para Datacenter, con especialidad en sistemas de Aire Acondicionado de Precisión. Certificada en instalaciones de Sistemas de Aire Acondicionado Industrial por TECA y en Diseño de Centros de Datos por UPTIME y por ICREA ",
                "bio_en": "Sharon Álvarez, Industrial Robotics Engineer from the Instituto Politécnico Nacional, with over 11 years of experience dedicated to Data Center Infrastructure, specializing in Precision Air Conditioning systems. Certified in Industrial Air Conditioning Systems installations by TECA and in Data Center Design by UPTIME and ICREA.",
                "image": "/img/speakers/Sharon_Álvarez.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
        "title": "Manufactura inteligente: Tecnología, estrategia y talento para lograr una operación superproductiva",
        "title_en": "Smart Manufacturing: Technology, Strategy, and Talent for Achieving a Superproductive Operation    ",
        "description": "En esta sesión revelaremos los principios que distinguen a las empresas altamente productivas, basándonos en hallazgos del estudio Cómo lograr lo posible, destacando datos locales de manufactura industrial. Exploraremos cómo tecnologías avanzadas —IA generativa, RPA y minería de procesos— están redefiniendo la manufactura moderna y compartiremos estrategias prácticas para convertir el piso de producción en una operación ágil, conectada y preparada para el futuro.",
        "description_en": "In this session, we will reveal the principles that distinguish highly productive companies, based on findings from the study How to Achieve the Possible, highlighting local data from industrial manufacturing. We will explore how advanced technologies — generative AI, RPA, and process mining — are redefining modern manufacturing and share practical strategies to turn the production floor into an agile, connected, and future-ready operation.",
        "time": "15:20 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Cecilia Hermida",
                "position": "Country Manager",
                "position_en": "Country Manager",
                "company": "Infor",
                "bio": "Cecilia es una ejecutiva especializada en ventas estratégicas y transformación digital, con experiencia en la implementación de soluciones tecnológicas para diversas industrias en América Latina. Como Country Manager de Infor, su misión es consolidar el liderazgo de la compañía en la región mediante un portafolio especializado y un enfoque profundamente centrado en el cliente.",
                "bio_en": "Cecilia is an executive specialized in strategic sales and digital transformation, with experience in implementing technological solutions for various industries in Latin America. As Country Manager of Infor, her mission is to consolidate the company's leadership in the region through a specialized portfolio and a deeply customer-centric approach.",
                "image": "/img/speakers/Cecilia_Hermida.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Laura Cortés",
                "position": "Consultora de Soluciones",
                "position_en": "Solutions Consultant",
                "company": "Infor",
                "bio": "Laura es consultora de soluciones en Infor México, con más de 14 años de experiencia en logística y cadena de suministro. Ha acompañado a empresas de manufactura, retail y distribución en su transformación digital, impulsando productividad, trazabilidad y eficiencia operativa. Su misión es conectar visión de negocio y tecnología mediante demostraciones de soluciones en la nube, facilitando que los equipos ejecutivos visualicen beneficios tangibles y adopten tecnologías como IA, RPA y analítica avanzada para lograr operaciones más ágiles y competitivas.",
                "bio_en": "Laura is a solutions consultant at Infor Mexico, with over 14 years of experience in logistics and supply chain. She has supported manufacturing, retail, and distribution companies in their digital transformation, driving productivity, traceability, and operational efficiency. Her mission is to connect business vision and technology through cloud solution demonstrations, enabling executive teams to visualize tangible benefits and adopt technologies such as AI, RPA, and advanced analytics to achieve more agile and competitive operations.",
                "image": "/img/speakers/Laura_Córtes.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
    {
        "title": " Transformación digital acelerada por la Inteligencia Artificial",
        "title_en": " Digital transformation accelerated by Artificial Intelligence",
        "description": "En Siemens creemos que la inteligencia artificial industrial no reemplaza al ser humano, lo potencia. A través de soluciones como el Copiloto Industrial, estamos transformando la manufactura y las infraestructuras, optimizando procesos, acelerando la toma de decisiones y mejorando la eficiencia operativa. Mostraremos ejemplos reales como inspección visual automatizada y simulaciones en el metaverso industrial, donde la colaboración entre personas y tecnología impulsa la productividad, la sostenibilidad y la resiliencia. Esta ponencia refleja cómo estamos construyendo el futuro de la industria, juntos.",
        "description_en": "At Siemens, we believe that industrial artificial intelligence does not replace humans, it empowers them. Through solutions like the Industrial Copilot, we are transforming manufacturing and infrastructures, optimizing processes, accelerating decision-making, and improving operational efficiency. We will showcase real examples such as automated visual inspection and simulations in the industrial metaverse, where collaboration between people and technology drives productivity, sustainability, and resilience. This presentation reflects how we are building the future of industry, together.",
        "time": "12:30 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Alejandro Preinfalk",
                "position": "Presidente & CEO",
                "position_en": "President & CEO",
                "company": "Siemens México, Centroamérica y el Caribe",
                "bio": "Alejandro tiene una amplia experiencia de más de 30 años en Siemens, a nivel mundial. Ha ocupado diversos cargos directivos en Costa Rica, Alemania, Rusia, Guatemala y México.  Tiene una Licenciatura en Ingeniería Eléctrica de la Universidad de Costa Rica, así como diversos cursos de posgrado de Harvard, MIT, Stanford, la Universidad de Michigan y Singularity University. Es presidente de la Comisión México 4.0: Innovación Industrial y Digitalización de la Confederación de Cámaras Industriales de los Estados Unidos Mexicanos (CONCAMIN), expresidente de la Cámara México-Alemana de Comercio e Industria (CAMEXA), miembro del Consejo de Empresas Globales (CEG), mentor y panelista de Endeavor y miembro del consejo de la Asociación para América Latina en Alemania.",
                "bio_en": "Alejandro has extensive experience of over 30 years at Siemens, worldwide. He has held various management positions in Costa Rica, Germany, Russia, Guatemala, and Mexico. He holds a Bachelor's degree in Electrical Engineering from the University of Costa Rica, as well as various postgraduate courses from Harvard, MIT, Stanford, the University of Michigan, and Singularity University. He is president of the Mexico 4.0 Commission: Industrial Innovation and Digitalization of the Confederation of Industrial Chambers of the United Mexican States (CONCAMIN), former president of the Mexico-Germany Chamber of Commerce and Industry (CAMEXA), member of the Council of Global Companies (CEG), mentor and panelist at Endeavor, and member of the board of the Association for Latin America in Germany.",
                "image": "/img/speakers/alejandro_preinfalk.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "Ecosistemas de innovación: el poder de las alianzas para el desarrollo industrial",
        "title_en": "Innovation Ecosystems: The Power of Partnerships for Industrial Development",
        "description": "Abrir una conversación estratégica sobre cómo la convergencia entre innovación tecnológica, sostenibilidad e inteligencia artificial generativa está redefiniendo el futuro industrial y el impacto que tiene en los diferentes sectores (público, privado, gobiernos locales y cooperación internacional), y cómo pueden contribuir al desarrollo económico sostenible de economías como México y Alemania.",
        "description_en": "Open a strategic conversation about how the convergence of technological innovation, sustainability, and generative artificial intelligence is redefining the industrial future and its impact on different sectors (public, private, local governments, and international cooperation), and how they can contribute to the sustainable economic development of economies like Mexico and Germany.",
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
        "title_en": "Sustainable Industrial Development Summit: Panel: Geopolitics and supply chain resilience: diversifying global trade links",
        "description": "",
        "description_en": "",
        "time": "14:45 hrs",
        "duration": "75 min",
        "speakers": [
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
                "id": "3",
                "name": "Jeff Burnstein",
                "position": "Presidente",
                "position_en": "President",
                "company": "Association for Advancing Automation",
                "bio": "Jeff Burnstein es el Presidente de la Association for Advancing Automation (A3), el principal grupo comercial de América del Norte que representa a más de 1,400 empresas globales dedicadas a la robótica, inteligencia artificial, visión, control de movimiento y tecnologías relacionadas con la automatización. Burnstein se unió a la asociación en 1983 y ha ocupado diversos cargos directivos, culminando con su nombramiento como Presidente en 2007. Es un frecuente comentarista sobre temas de automatización ante la prensa, el público y los responsables de políticas, y participa regularmente como ponente en conferencias internacionales sobre temas como las últimas tendencias en automatización, el impacto de la automatización en los empleos y el futuro de la automatización más allá del piso de fábrica. En 2023 recibió el Engelberger Robotics Award for Leadership, ampliamente considerado el “Premio Nobel de la Robótica”.",
                "bio_en": "Jeff Burnstein is the President of the Association for Advancing Automation (A3), the leading North American trade group representing over 1400 global companies involved in robotics, artificial intelligence, vision, motion control and related automation technologies. Burnstein joined the association in 1983 and has held a variety of senior positions, culminating in his promotion to President in 2007.  He is a frequent commentator on automation issues to the press, public and policy makers, and regularly speaks at global conferences on topics such the latest automation trends, the impact of automation on jobs and the future of automation beyond the factory floor. In 2023 he received the Engelberger Robotics Award for Leadership, widely considered the “Nobel Prize of Robotics.”",
                "image": "/img/speakers/jeff_burnstein.webp",
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
                "name": "Germán Bonilla Bermúdez - Moderador",
                "position": "Coordinador",
                "position_en": "Coordinator",
                "company": "Asociación para el Desarrollo Industrial Sostenible Alianza Alemania-Pacífico (PAGSID)-un proyecto de cooperación de la Federación de Industrias Alemanas (BDI)",
                "bio": "Maestro en Ciencias en Ingeniería de Sistemas de Producción por la RWTH Aachen University (Alemania) e Ingeniero Mecánico Administrador por el Tecnológico de Monterrey. Ha sido profesor en el Tecnológico de Monterrey y consultor para empresas extranjeras en proyectos de inversión en México y para PyMEs en proyectos de planeación estratégica, innovación, gestión de la tecnología e industria 4.0.<br><br> Cuenta con más de 10 años de experiencia en proyectos de cooperación internacional con enfoque en desarrollo sostenible, innovación y educación, siendo su área de especialización la cooperación económica y desarrollo entre Alemania y la Alianza del Pacífico. Actualmente es Coordinador del proyecto Asociación para el Desarrollo Industrial Sostenible Alemania - Alianza del Pacífico (PAGSID) de la Confederación de la Industria Alemana (BDI).",
                "bio_en": "Master of Science in Production Systems Engineering from the RWTH Aachen University (Germany) and Managing Mechanical Engineer from the Tecnológico de Monterrey. He has been a professor at the Tecnológico de Monterrey and consultant for foreign companies in investment projects in Mexico and for SMEs in strategic planning, innovation, technology management and industry 4.0 projects. <br><br>He has more than 10 years of experience in international cooperation projects focusing on sustainable development, innovation and education, his area of expertise being economic and development cooperation between Germany and the Pacific Alliance. Currently project coordinator of the Association for Sustainable Industrial Development Germany - Pacific Alliance (PAGSID) of the Confederation of German Industry (BDI).", 
                "image": "/img/speakers/german_bonilla_bermudez.webp",
                "email": "",
                "phone": "",
                "moderador": true
            },         
            /*{
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
            },*/
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
        "title": "Cadenas que Conectan el Futuro: Fortaleciendo la Movilidad Regional ",
        "title_en": "Chains that Connect the Future: Strengthening Regional Mobility",
        "description": "En un contexto global de disrupciones y oportunidades como el nearshoring, Norteamérica enfrenta el reto de consolidarse como un bloque competitivo en movilidad. Esta conferencia aborda cómo el desarrollo de proveedores, la integración efectiva de la cadena de suministro y la colaboración trinacional son claves para fortalecer la autonomía industrial. A través de iniciativas como el PDP INA–IFC, México se posiciona como motor del cambio, impulsando innovación, talento y sostenibilidad desde la base productiva. La Industria Nacional de Autopartes propone una visión regional donde los proveedores locales son protagonistas del futuro automotriz.",
        "description_en": "In a global context shaped by disruption and nearshoring opportunities, North America must strengthen its position as a competitive mobility hub. This keynote explores how supplier development, integrated value chains, and trinational collaboration are key to achieving industrial resilience. Through initiatives like the INA–IFC Supplier Development Program, Mexico is emerging as a driver of innovation, sustainability, and talent. Representing over 700 manufacturing plants, INA presents a regional vision where local suppliers are not just part of the value chain—they are central to shaping the future of the North American automotive industry.",
        "time": "17:30 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Francisco González",
                "position": "Presidente Ejecutivo",
                "position_en": "Executive President",
                "company": "INA",
                "bio": "Francisco N. González Díaz es Presidente Ejecutivo de la Industria Nacional de Autopartes, A.C., donde representa a más de 700 plantas manufactureras en México. Tiene más de 20 años de experiencia promoviendo a México y su industria. Ha sido Director General de Bancomext y ProMéxico, así como Embajador de México en Alemania. En el ámbito privado, participa como empresario en los sectores salud, comercio exterior, turismo y finanzas. Es licenciado en Administración de Empresas por el ITAM y cuenta con una maestría en Administración por el Tecnológico de Monterrey.",
                "bio_en": "Francisco N. González Díaz is the Executive President of the National Auto Parts Industry, A.C., where he represents more than 700 manufacturing plants in Mexico. He has more than 20 years of experience promoting Mexico and its industry. He has been General Director of Bancomext and ProMéxico, as well as Ambassador of Mexico in Germany. In the private sector, he participates as an entrepreneur in the health, foreign trade, tourism and finance sectors. He has a degree in Business Administration from ITAM and a master's degree in Administration from the Tecnológico de Monterrey.",
                "image": "/img/speakers/francisco_gonzalez_diaz_new.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "MISUMI: Innovación que transforma el tiempo en valor",
        "title_en": "MISUMI: Innovation that transforms time into value",
        "description": "Akitake Kato, presidente de MISUMI México, compartirá cómo la compañía se ha consolidado como un aliado estratégico para ingenieros, integradores y especialistas en MRO. Con un portafolio de más de 20 millones de componentes y herramientas como MISUMI Complete, que emplea inteligencia artificial para acelerar la búsqueda y selección de piezas, y un asistente digital que simplifica la experiencia de compra, MISUMI ofrece soluciones que ayudan a reducir tiempos y enfocar los recursos en lo que realmente genera valor. Estas innovaciones son especialmente relevantes en el marco de la industria 4.0 y 5.0 donde la digitalización, la velocidad y la tecnología centrada en el ser humano definen la competitividad. ",
        "description_en": "Akitake Kato, president of MISUMI Mexico, will share how the company has established itself as a strategic ally for engineers, integrators and MRO specialists. With a portfolio of more than 20 million components and tools such as MISUMI Complete, which uses artificial intelligence to speed up the search and selection of parts, and a digital assistant that simplifies the purchasing experience, MISUMI offers solutions that help reduce time and focus resources on what really generates value. These innovations are especially relevant in the framework of Industry 4.0 and 5.0 where digitization, speed and human-centered technology define competitiveness.",
        "time": "18:15 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Akitake Kato",
                "position": "Presidente",
                "position_en": "President",
                "company": "MISUMI México",
                "bio": "Akitake Kato, presidente de MISUMI México, compartirá cómo la compañía se ha consolidado como un aliado estratégico para ingenieros, integradores y especialistas en MRO. Con un portafolio de más de 20 millones de componentes y herramientas como MISUMI Complete, que emplea inteligencia artificial para acelerar la búsqueda y selección de piezas, y un asistente digital que simplifica la experiencia de compra, MISUMI ofrece soluciones que ayudan a reducir tiempos y enfocar los recursos en lo que realmente genera valor. Estas innovaciones son especialmente relevantes en el marco de la industria 4.0 y 5.0 donde la digitalización, la velocidad y la tecnología centrada en el ser humano definen la competitividad. ",
                "bio_en": "Akitake Kato lidera MISUMI México con una visión enfocada en la innovación y la digitalización de la industria. Con más de dos décadas de experiencia en el sector, ha impulsado la expansión de la compañía en el país, fortaleciendo la cercanía con clientes y la eficiencia operativa. Su liderazgo se distingue por integrar soluciones tecnológicas como plataformas digitales y servicios basados en inteligencia artificial, que permiten a ingenieros y fabricantes reducir tiempos y elevar su productividad.",
                "image": "/img/speakers/Akitake_Kato.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
        "title": "Del Aula a la Industria: El Viaje del Talento que Transforma",
        "title_en": "Del Aula a la Industria: El Viaje del Talento que Transforma",
        "description": "¿Sueñas con hacer un impacto real en el mundo? Descubre cómo tu talento puede transformar la industria. Conoce historias inspiradoras de quienes han hecho la transición del aula al mundo laboral para convertirse en líderes que están definiendo el futuro.",
        "description_en": "Do you dream of making a real impact in the world? Discover how your talent can transform the industry. Hear inspiring stories from those who have made the transition from classroom to workplace to become leaders who are shaping the future.",
        "time": "12:10 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Mónica Zavaleta",
                "position": "Offer Category Manager Service",
                "position_en": "Offer Category Manager Service",
                "company": "Schneider Electric",
                "bio": "Mónica Zavaleta: Egresada de la Universidad Nacional Autónoma de México de la Ingeniera Eléctrica Electrónica, apasionada en el desarrollo de soluciones energéticas inteligentes, con más de 4 de experiencia en el sector de tecnología y servicios de energía. Actualmente se desempeña como Developer Manager for Secure Power Services en Schneider Electric México, donde impulsa la innovación y la transformación digital en servicios críticos de energía.",
                "bio_en": "Mónica Zavaleta: Graduate of the National Autonomous University of Mexico in Electrical and Electronic Engineering, passionate about the development of intelligent energy solutions, with more than 4 years of experience in the technology and energy services sector. She currently serves as Developer Manager for Secure Power Services at Schneider Electric Mexico, where she drives innovation and digital transformation in critical energy services.",
                "image": "/img/speakers/Mónica_Zavaleta.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Paulina Arellano",
                "position": "Operational Offer Manager ",
                "position_en": "Operational Offer Manager ",
                "company": "Schneider Electric",
                "bio": "Paulina Arellano: Egresada de la licenciatura de Marketing y comunicación por parte del Tecnológico de Monterrey. Cuenta con experiencia en áreas como gestión de proyectos, análisis de mercado y desarrollo comercial. Actualmente se desempeña como Operational Offer Manager en Schneider Electric México, donde lidera la estrategia y ejecución de ofertas operativas para soluciones de energía segura y sostenible.",
                "bio_en": "Paulina Arellano: Graduate of the Marketing and Communication degree from the Tecnológico de Monterrey. She has experience in areas such as project management, market analysis and business development. She currently serves as Operational Offer Manager at Schneider Electric Mexico, where she leads the strategy and execution of operational offers for secure and sustainable energy solutions.",
                "image": "/img/speakers/Paulina_Arellano.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
        "title": "",
        "title_en": "",
        "description": "",
        "description_en": "",
        "time": "13:50 hrs",
        "duration": "60 min",
        "speakers": []
    },
    {
        "title": "Inteligencia Urbana: datos simples, soluciones sofisticadas",
        "title_en": "Urban Intelligence: simple data, sophisticated solutions",
        "description": "En Siemens impulsamos el desarrollo de ciudades inteligentes mediante inteligencia artificial, electrificación inteligente y automatización energética. Estas tecnologías permiten operar edificios inteligentes, redes eléctricas avanzadas y sistemas de datos que hacen a las comunidades más resilientes, sostenibles y eficientes. Mostraremos cómo la IA potencia la toma de decisiones humanas, y cómo nuestras soluciones permiten gestionar recursos críticos en tiempo real. Esta ponencia presentará casos concretos donde la tecnología y la colaboración humana están transformando la vida urbana.",
        "description_en": "At Siemens, we drive the development of smart cities through artificial intelligence, smart electrification and energy automation. These technologies enable the operation of smart buildings, advanced power grids and data systems that make communities more resilient, sustainable and efficient. We will show how AI enhances human decision-making, and how our solutions enable the management of critical resources in real time. This presentation will showcase concrete cases where technology and human collaboration are transforming urban life.",
        "time": "15:00 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Marco Cosío",
                "position": "Vicepresidente Infraestructura Inteligente ",
                "position_en": "Vice President Smart Infrastructure ",
                "company": "Siemens México, Centroamérica y el Caribe",
                "bio": "Es Ingeniero Industrial, graduado en la Universidad las Américas Puebla. Cuenta con una amplia trayectoria de más de dos décadas en la industria eléctrica. Ha desempeñado diversos cargos directivos en Siemens como director de la unidad de negocio de mediano voltaje, así como CEO de Centro América de 2014 a 2019.Actualmente es el vicepresidente de Smart Infrastructure en Siemens México, Centroamérica y el Caribe cargo que asumió el 1 de marzo de 2019. Adicionalmente, desempeña el rol de Head of SI Buildings Siemens LCB Argentina, LC Brazil & LCB México.",
                "bio_en": "He is an Industrial Engineer, graduated from the Universidad las Américas Puebla. He has an extensive career of more than two decades in the electrical industry. He has held various management positions at Siemens such as director of the medium voltage business unit, as well as CEO of Central America from 2014 to 2019. He is currently the Vice President of Smart Infrastructure at Siemens Mexico, Central America and the Caribbean, a position he assumed on March 1, 2019. Additionally, he serves as Head of SI Buildings Siemens LCB Argentina, LC Brazil & LCB Mexico.",
                "image": "/img/speakers/Marco_Cosío.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
        "title": "Beckhoff",
        "title_en": "Beckhoff",
        "description": "",
        "description_en": "",
        "img": "/img/program/beckhoff.png",
        "time": "11:20 hrs",
        "duration": "45 min",
        "speakers": [
            /*{
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
            },*/
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
                "name": "Jorge Carlos Obregón - Moderador",
                "position": "Director Comercial",
                "position_en": "Commercial Director",
                "company": "Grupo Ecovo",
                "bio": "Originario de Leon, Gto. Ingeniero Industrial y maestro en administracion de empresas por el ITESM. Emprendedor. Fundó GRUPO ECOVO, la empresa en la cual actualmente se desarrolla como director comercial desde el año 2008, teniendo un crecimiento importante en el area de energia renovables a nivel nacional con sus propias marcas como ECOVO, VITA ENERGY y AUTOVOLT, esta ultima ofreciendo soluciones en electromovilidad sustentable. Se ha desempañado como consejero en varios consejos ciudadanos dentro de Coparmex, Canaco, y de carácter gubernamental como en Desarrollo Urbano y en el Sistema Integral de Aseo Publico de la ciudad de Leon, Gto.",
                "bio_en": "Originally from Leon, Gto. Industrial Engineer and Master in Business Administration from ITESM. Entrepreneur. He founded GRUPO ECOVO, the company in which he currently serves as commercial director since 2008, having significant growth in the area of renewable energy at the national level with its own brands such as ECOVO, VITA ENERGY and AUTOVOLT, the latter offering solutions in sustainable electromobility. He has served as a counselor on several citizen councils within Coparmex, Canaco, and of a governmental nature such as Urban Development and the Integral Public Cleaning System of the city of Leon, Gto.",
                "image": "/img/speakers/Jorge_Carlos_Obregón.webp",
                "email": "",
                "phone": "",
                "moderador": true
            },
            {
                "id": "2",
                "name": "Rodrigo Salcedo",
                "position": "Asociación Gremial de Vehículos Eléctricos de Chile ",
                "position_en": "Association Gremial de Vehículos Eléctricos de Chile ",
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
        "title": "80 años de automatización: De lo analógico a lo inteligente",
        "title_en": "80 years of automation: From analog to intelligent",
        "description": "Únete a un viaje a través del tiempo que revela la evolución de la automatización en México. Desde los sistemas analógicos hasta las soluciones digitales más avanzadas, descubre cómo la innovación ha marcado la historia industrial del país y cómo tu visión y talento pueden ayudar a escribir el próximo capítulo.",
        "description_en": "Join a journey through time that reveals the evolution of automation in Mexico. From analog systems to the most advanced digital solutions, discover how innovation has marked the industrial history of the country and how your vision and talent can help write the next chapter.",
        "time": "13:20 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Juan Alberto López",
                "position": "Business Developer",
                "position_en": "Business Developer",
                "company": "Schneider Electric",
                "bio": "Juan Alberto López Pérez es Business Development Manager para Medium Voltage Primary Distribution en Schneider Electric. Ingeniero Eléctrico con más 16 años de experiencia con equipos de Media Tensión en las áreas de Ingeniería y desarrollo de negocio.",
                "bio_en": "Juan Alberto López Pérez is Business Development Manager for Medium Voltage Primary Distribution at Schneider Electric. Electrical Engineer with more than 16 years of experience with Medium Voltage equipment in the areas of Engineering and business development.",
                "image": "/img/speakers/Juan_Alberto_López.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Omar Zarate",
                "position": "Systems Engineer",
                "position_en": "Systems Engineer",
                "company": "Schneider Electric",
                "bio": "Omar Zarate. Ingeniero en Control y Automatización por el IPN, certificado en ATD y DCCA, con especialización en diseño de Centros de Datos. Ha participado en proyectos para Data Centers Hyperscale en México y CAM. Su enfoque combina conocimientos técnicos con colaboración multidisciplinaria, buscando que la ingeniería tenga un impacto positivo en la sociedad.",
                "bio_en": "Omar Zarate. Control and Automation Engineer from IPN, certified in ATD and DCCA, with a specialization in Data Center design. He has participated in projects for Hyperscale Data Centers in Mexico and CAM. His approach combines technical knowledge with multidisciplinary collaboration, seeking to ensure that engineering has a positive impact on society.",
                "image": "/img/speakers/Omar_Zarate.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },        
        ]
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
        "title": "El futuro industrial se diseña hoy: MISUMI, innovación, digitalización y talento en México",
        "title_en": "The industrial future is designed today: MISUMI, innovation, digitalization and talent in Mexico",
        "description": "Carlos Orozco, Director de Ventas de MISUMI México, abordará la relevancia de la digitalización y la innovación en la industria mexicana. Con ejemplos concretos como MISUMI Complete, que integra inteligencia artificial para simplificar la búsqueda de componentes y acelerar el diseño de soluciones, y Chatsumi, que optimiza la comunicación y gestión de pedidos, MISUMI muestra cómo la tecnología puede integrarse de forma práctica para hacer más eficiente cada proceso. Una conferencia que invita a reflexionar sobre cómo la innovación y el talento impulsan la competitividad en la industria actual.",
        "description_en": "Carlos Orozco, Sales Director of MISUMI Mexico, will address the relevance of digitization and innovation in the Mexican industry. With concrete examples such as MISUMI Complete, which integrates artificial intelligence to simplify component search and speed up solution design, and Chatsumi, which optimizes communication and order management, MISUMI shows how technology can be integrated in a practical way to make each process more efficient. A conference that invites reflection on how innovation and talent drive competitiveness in today's industry.",
        "time": "16:10 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Carlos Orozco",
                "position": "Director Comercial",
                "position_en": "Sales Director",
                "company": "MISUMI MÉXICO",
                "bio": "Carlos Orozco cuenta con amplia trayectoria en ventas estratégicas y desarrollo de negocios en el sector industrial. Su enfoque está en acompañar a los clientes en la adopción de soluciones digitales que simplifiquen procesos y fortalezcan la competitividad de las empresas. Al frente del equipo comercial de MISUMI México, ha consolidado relaciones con clientes de diversos sectores, posicionando a la compañía como un socio confiable en la automatización, digitalización y suministro de componentes.",
                "bio_en": "Carlos Orozco has extensive experience in strategic sales and business development in the industrial sector. His focus is on supporting clients in adopting digital solutions that simplify processes and strengthen the competitiveness of companies. Leading the sales team at MISUMI Mexico, he has built relationships with clients from various sectors, positioning the company as a trusted partner in automation, digitalization, and component supply.",
                "image": "/img/speakers/carlos_orozco.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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