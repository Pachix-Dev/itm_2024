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
        title: "Trimble CenterPoint RTX: Revolucionando el Mapeo y la Navegación de Precisión para Drones ",
        title_en: "From the Field to the Digital Twin: A Single Pix4D Ecosystem",
        description: "Esta sesión se centra en la Cartografía de Alta Precisión y Eficiencia para Drones, impulsada por la tecnología Trimble CenterPoint RTX. La clave reside en la combinación de la APX RTX GNSS/Inercial (con IN-Fusion+ y calibración SmartCal) y el post-procesado Applanix POSPac UAV PP-RTX 2. Esta solución ofrece precisión centimétrica a nivel global, operando en un Datum Global Consistente y cumpliendo con la Fiabilidad Certificada ASIL-B. El sistema asegura ultra robustez y resultados sin artefactos, eliminando la necesidad de infraestructura terrestre. Finalizaremos con una revisión de casos prácticos que demuestran la precisión y eficiencia del PP-RTX 2 en proyectos LiDAR e hiperspectrales.",
        description_en: " This session focuses on High-Precision and Efficient Mapping for Drones, powered by Trimble CenterPoint RTX technology. The key lies in the combination of APX RTX GNSS/Inertial (with IN-Fusion+ and SmartCal calibration) and post-processing with Applanix POSPac UAV PP-RTX 2. This solution offers centimeter-level accuracy globally, operating on a Consistent Global Datum and meeting ASIL-B Certified Reliability. The system ensures ultra robustness and artifact-free results, eliminating the need for ground infrastructure. We will conclude with a review of practical cases demonstrating the accuracy and efficiency of PP-RTX 2 in LiDAR and hyperspectral projects.",
        time: "11:30 hrs",
        duration: "20 min",
        speakers: [
            {
                id: "1",
                name: "Jesús Ruíz",
                position: "Gerente de Desarrollo de Negocios  - Airborne",
                position_en: "Business Development Manager - Airborne",
                company: "Trimble Applanix",
                bio: "Pionero en la introducción del posicionamiento preciso para la cartografía y navegación profesional con drones. En Trimble Applanix, lidero el crecimiento de la tecnología de posicionamiento para mercados aéreos en Europa y Latinoamérica. Impulso activamente su adopción en sectores clave como agricultura, servicios públicos, teledetección y construcción. Mi enfoque está en hacer realidad la cartografía y navegación fidedigna con drones. Cientos de empresas confían en Trimble Applanix para generar datos geoespaciales de alta fiabilidad que transforman la forma en que entendemos y gestionamos nuestro",
                bio_en: "Pioneer in introducing precise positioning for professional mapping and navigation with drones. At Trimble Applanix, I lead the growth of positioning technology for aerial markets in Europe and Latin America. I actively drive its adoption in key sectors such as agriculture, utilities, remote sensing, and construction. My focus is on making reliable mapping and navigation with drones a reality. Hundreds of companies trust Trimble Applanix to generate highly reliable geospatial data that transforms how we understand and manage our world.",
                image: "/img/speakers/jesus_ruiz.jpeg",
                email: "",
                phone: "",
                moderador: true
            },
        ]
    },
    {
        title: "Fundamentos de la tecnología hiperespectral. Caso de éxito en Latinoamérica",
        title_en: "From the Field to the Digital Twin: A Single Pix4D Ecosystem",
        description: "Los sensores hiperespectrales producen imágenes en la que cada pixel contiene la firma espectral del objeto en la escena, esto es, la intensidad con la que se refleja la luz en cada longitud de onda. Dado que esta firma espectral se ve influenciada por las propiedades químicas de los objetos, la tecnología hiperespectral permite, por lo tanto, extraer información química de una escena de manera remota y no invasiva. Cuando un sensor hiperespectral de estas características, se combina con un sistema de medición y análisis inercial (como las tarjetas APX y el software Pospac UAV de Applanix, respectivamente), se posibilita un amplio abanico de aplicaciones en numerosos sectores: medioambiente, minería, oil and gas, civil, defensa, etc. En la presente ponencia conoceremos los fundamentos de la tecnología hiperespectral, así como varios casos éxitos llevados a cabo en Latinoamérica.",
        description_en: " This session focuses on High-Precision and Efficient Mapping for Drones, powered by Trimble CenterPoint RTX technology. The key lies in the combination of APX RTX GNSS/Inertial (with IN-Fusion+ and SmartCal calibration) and post-processing with Applanix POSPac UAV PP-RTX 2. This solution offers centimeter-level accuracy globally, operating on a Consistent Global Datum and meeting ASIL-B Certified Reliability. The system ensures ultra robustness and artifact-free results, eliminating the need for ground infrastructure. We will conclude with a review of practical cases demonstrating the accuracy and efficiency of PP-RTX 2 in LiDAR and hyperspectral projects.",
        time: "11:50 hrs",
        duration: "20 min",
        speakers: [
            {
                id: "1",
                name: "Juan Manuel González",
                position: "CEO",
                position_en: "CEO",
                company: "Black Square SAS",
                bio: "Juan Manuel González Otero es máster en Ingeniería Aeronáutica por la Universidad Politécnica de Madrid, así como co-fundador y CEO de la empresa Black Square SAS. Con una amplia trayectoria de más de 10 años liderando un equipo de ingeniería altamente cualificado, ha tenido la oportunidad de participar en proyectos que han sido pioneros en el uso de la tecnología hiperespectral en Latinoamérica.",
                bio_en: "Juan Manuel González Otero holds a master's degree in Aeronautical Engineering from the Polytechnic University of Madrid, as well as being co-founder and CEO of Black Square SAS. With an extensive career of over 10 years leading a highly qualified engineering team, he has had the opportunity to participate in projects that have been pioneers in the use of hyperspectral technology in Latin America.",
                image: "/img/speakers/Juan_Manuel_Gonzalez.jpg",
                email: "",
                phone: "",
                moderador: true
            },
        ]
    },
    {
        title: "Del terreno al gemelo digital: un solo ecosistema Pix4D ",
        title_en: "From the Field to the Digital Twin: A Single Pix4D Ecosystem",
        description: "En un mundo donde la precisión y la eficiencia son clave, Pix4D ofrece un ecosistema completo que conecta cada etapa del flujo de trabajo: desde la captura de datos con drones o cámaras, hasta la creación de gemelos digitales precisos listos para análisis, colaboración y toma de decisiones. Con una suite de soluciones integradas, Pix4D permite transformar imágenes en información geoespacial confiable, optimizando procesos en topografía, construcción, agricultura, minería y más. Todo dentro de un solo ecosistema que garantiza continuidad, calidad y resultados medibles.",
        description_en: "In a world where precision and efficiency are paramount, Pix4D offers a comprehensive ecosystem that connects every stage of the workflow: from data capture with drones or cameras to the creation of accurate digital twins ready for analysis, collaboration, and decision-making. With an integrated suite of solutions, Pix4D enables the transformation of images into reliable geospatial information, optimizing processes in surveying, construction, agriculture, mining, and more. All within a single ecosystem that ensures continuity, quality, and measurable results.",
        time: "12:15 hrs",
        duration: "40 min",
        speakers: [
            {
                id: "1",
                name: "Álvaro Ruíz",
                position: "Business Development Central LATAM",
                position_en: "Business Development Central LATAM",
                company: "PIX4D",
                bio: "Álvaro Ruiz es responsable del área de Desarrollo de Negocios para Latinoamérica Central en Pix4D, empresa líder mundial en soluciones de fotogrametría y modelado 3D profesional. Desde su rol, promueve la implementación del ecosistema Pix4D en sectores estratégicos como la minería, agricultura, energía y construcción, ayudando a las organizaciones a optimizar sus operaciones mediante drones, LiDAR, BIM y GIS. Con una visión orientada a la innovación y la sostenibilidad, Álvaro impulsa proyectos que conectan la tecnología de Pix4D con las necesidades reales de la industria, fomentando la adopción de herramientas inteligentes para una toma de decisiones más precisa y basada en datos. Su experiencia en alianzas estratégicas y desarrollo regional lo posiciona como un referente en la transformación digital del sector geoespacial en América Latina.",
                bio_en: "Álvaro Ruiz is responsible for the Business Development area for Central Latin America at Pix4D, a world leader in photogrammetry and professional 3D modeling solutions. From his role, he promotes the implementation of the Pix4D ecosystem in strategic sectors such as mining, agriculture, energy, and construction, helping organizations optimize their operations through drones, LiDAR, BIM, and GIS. With a vision oriented towards innovation and sustainability, Álvaro drives projects that connect Pix4D technology with the real needs of the industry, fostering the adoption of intelligent tools for more precise and data-driven decision-making. His experience in strategic alliances and regional development positions him as a benchmark in the digital transformation of the geospatial sector in Latin America.",
                image: "/img/speakers/AlvaroRuiz.webp",
                email: "",
                phone: "",
                moderador: true
            },
        ]
    },
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
                "name": "Leonardo Fernández ",
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

        "title": "IoT y gestión inteligente en sectores clave de México",
        "title_en": "IoT and intelligent management in key sectors of Mexico",
        "description": "Casos de uso donde IoT, telemetría y monitoreo en tiempo real están ayudando a empresas mexicanas a optimizar operaciones y reducir costos.",
        "description_en": "Use cases where IoT, telemetry and real-time monitoring are helping Mexican companies optimize operations and reduce costs.",
        "time": "14:40 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Leonardo Borjas",
                "position": "Líder de Innovación y Soluciones Tecnológicas",
                "position_en": "Innovation and Technology Solutions Leader",
                "company": "Telcel",
                "bio": "Leonardo Borjas es Ingeniero en Comunicaciones y Electrónica por el IPN, con estudios de posgrado en Gestión de la Innovación Tecnológica por la Universidad Iberoamericana. Actualmente se desempeña como Líder de Innovación y Soluciones Tecnológicas, donde impulsa la creación de productos tecnológicos que generan valor real para los clientes. Con más de 9 años de experiencia en el sector, Leonardo combina su formación técnica con una visión estratégica centrada en la innovación y el diseño de soluciones, ha participado en proyectos clave que fortalecen la oferta de servicios digitales de la compañía. Su enfoque consultivo y su capacidad para conectar tecnología con propósito lo convierten en un referente en el desarrollo de soluciones móviles en México.",
                "bio_en": "Leonardo Borjas is a Communications and Electronics Engineer from IPN, with postgraduate studies in Technological Innovation Management from Universidad Iberoamericana. He currently serves as Innovation and Technology Solutions Leader, where he drives the creation of technological products that generate real value for customers. With over 9 years of experience in the sector, Leonardo combines his technical training with a strategic vision focused on innovation and solution design, he has participated in key projects that strengthen the company's digital service offering. His consultative approach and ability to connect technology with purpose make him a benchmark in the development of mobile solutions in Mexico.",
                "image": "/img/speakers/Leonardo_Borjas.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        title: "Los Drones no reemplazan pero equilibran capacidades ",
        title_en: "Drones Do Not Replace but Balance Capabilities",
        description: "La Conferencia trata de como los drones han ganado un protagonismo enorme en la actualidad equilibrando desventajas, que antes eran muy muy costosas de equilibrar, ejemplo drones de rescate en misiones SAR, drones de combate, Drones contra incendios, drones de seguridad, drones de entrega de mensajería, etc. Y en este devenir, como cada día se siguen perfeccionando, y desbloqueando nuevas aptitudes",
        description_en: "The Conference discusses how drones have gained enormous prominence today by balancing disadvantages that were previously very costly to address, such as rescue drones in SAR missions, combat drones, firefighting drones, security drones, delivery drones, etc. And in this evolution, how they continue to be perfected every day, unlocking new capabilities.",
        time: "15:20 hrs",
        duration: "40 min",
        speakers: [
            {
                id: "1",
                name: "Gustavo Emiliano Fauez",
                position: "CEO",
                position_en: "CEO",
                company: "Roca Defense & Systems",
                bio: "Gustavo Emiliano Fauez, empresario Argentino, con empresas en México, Argentina,  Australia, Irlanda y USA, Ex Militar, Infante de Marina Argentino, Veterano Casco Azul en la MINUSTAH (Misión de las Naciones Unidas para la Estabilización en Haití) 2006-7, CEO y  fundador de Roca Defense & Systems, que es un Holding de empresas en Argentina, México y USA, dedicado a la investigación y desarrollo de software y hardware para la integración de  vehículos no tripulados, programas de capacitación y productos complementarios, inherentes a necesidades de Defensa, agroindustria, protección civil, seguridad industrial, búsqueda y rescate, etc",
                bio_en: "Gustavo Emiliano Fauez, Argentine businessman, with companies in Mexico, Argentina, Australia, Ireland, and the USA. Former Military, Argentine Marine Infantryman, Blue Helmet Veteran in MINUSTAH (United Nations Stabilization Mission in Haiti) 2006-7. CEO and founder of Roca Defense & Systems, which is a holding company with businesses in Argentina, Mexico, and the USA, dedicated to research and development of software and hardware for the integration of unmanned vehicles, training programs, and complementary products related to the needs of Defense, agro-industry, civil protection, industrial security, search and rescue, etc.",
                image: "/img/speakers/Gustavo_Emiliano_Fauez.webp",
                email: "",
                phone: "",
                moderador: true
            },
        ]
    },
   
    {
        "title": "Digitalización en sistemas de distribución eléctrica",
        "title_en": "Digitalization in Electric Distribution Systems",
        "description": "Mitsubishi Electric",
        "description_en": "Mitsubishi Electric",
        "time": "16:00 hrs",
        "duration": "35 min",
        "speakers": [
            
        ]
    },
    {
        "title": "Centros de Datos - Garantizar la conectividad hacia, desde y entre de manera segura, escalable y eficiente",
        "title_en": "Data Centers - Ensuring connectivity to, from and between securely, scalably and efficiently",
        "description": "Nokia",
        "description_en": "Nokia",
        "time": "16:40 hrs",
        "duration": "35 min",
        "speakers": [{
                id: "1",
                name: "Alfredo Ramos ",
                position: "Director de Desarrollo de Negocios IP",
                position_en: "Director of IP Business Development",
                company: "Nokia",
                bio: "",
                bio_en: "",
                image: "/img/speakers/Alfredo_Ramos.png",
                email: "",
                phone: "",
                moderador: true
            },
            {
                id: "2",
                name: "Karla Beltrán",
                position: "Directora de Preventas Redes Ópticas",
                position_en: "Director of Optical Networks Pre-sales",
                company: "Nokia",
                bio: "",
                bio_en: "",
                image: "/img/speakers/Karla_Beltrán_Nokia.jpg",
                email: "",
                phone: "",
                moderador: true
            },]
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
        "description": "En el marco de la Industrial Transformation Mexico (ITM), el secretariado del Diálogo Digital México–Alemania presentará la nueva guía de recomendaciones sobre la aplicación industrial de 5G. El objetivo es compartir buenas prácticas, impulsar un diálogo abierto entre sectores público, privado, académico y sociedad civil, y hacer un llamado a la acción para una implementación efectiva y colaborativa de esta tecnología. El panel abordará las oportunidades y desafíos del 5G para la industria, tomando como referencia experiencias internacionales, como Alemania, y su potencial para aumentar la productividad, eficiencia y competitividad de las empresas. Asimismo, se discutirán las actualizaciones e implicaciones de la nueva Ley de Telecomunicaciones y Radiodifusión en México, y los pasos necesarios para consolidar el desarrollo de esta tecnología. ",
        "description_en": "As part of the Industrial Transformation Mexico (ITM), the Secretariat of the Mexico-Germany Digital Dialogue will present the new guide of recommendations on the industrial application of 5G. The objective is to share best practices, promote an open dialogue between the public, private, academic and civil society sectors, and call for action for an effective and collaborative implementation of this technology. The panel will address the opportunities and challenges of 5G for industry, taking as a reference international experiences, such as Germany, and its potential to increase productivity, efficiency and competitiveness of companies. In addition, updates and implications of the new Telecommunications and Broadcasting Law in Mexico will be discussed, as well as the necessary steps to consolidate the development of this technology.",
        "time": "18:10 hrs",
        "duration": "50 min",
        "speakers": [
            {
                "id": "1",
                "name": "Andrea Carreón - Moderadora",
                "position": "Asesora Técnica ",
                "position_en": "Technical Advisor",
                "company": "GIZ México",
                "bio": "Andrea Carreón es licenciada en Relaciones Internacionales por el Tecnológico de Monterrey. Cuenta con experiencia en proyectos de diálogo multiactor y ha colaborado con distintas entidades del sector público, privado y sociedad civil. Actualmente, es Asesora Técnica para el Secretariado del Diálogo Digital entre México y Alemania, proyecto global implementado por encargo del Ministerio Federal de Asuntos Digitales y Modernización del Estado del Gobierno de Alemania.",
                "bio_en": "Andrea Carreón holds a degree in International Relations from the Tecnológico de Monterrey. She has experience in multi-stakeholder dialogue projects and has collaborated with various entities from the public, private, and civil society sectors. Currently, she is a Technical Advisor for the Secretariat of the Digital Dialogue between Mexico and Germany, a global project implemented on behalf of the Federal Ministry of Digital and Economic Affairs of the German Government.",
                "image": "/img/speakers/andreaCarreon.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Guillermo Ortega",
                "position": "Director de Innovación  ",
                "position_en": "Innovation Director",
                "company": "NTT Data",
                "bio": "Guillermo Ortega cuenta con más de 15 años como consultor estratégico en innovación y diseño estratégico en la consultora internacional NTT Data, donde hoy es director de innovación y lidera la práctica de consultoría de negocio en el sector telecomunicaciones. Ha trabajado en proyectos con entidades públicas y empresas globales y regionales en los sectores financiero, telecomunicaciones, energía, logística, turismo, alimentos y bebidas, y educación, y en distintas geografías como Chile, España, México y Perú. Es autor y co-autor de diversos libros y estudios sobre innovación industrial, digitalización de procesos, ecosistema emprendedor y evolución tecnológica que se han publicado de la mano de instituciones como el IPADE y la CAF. Participa en las comisiones de innovación del Consejo Coordinador Empresarial (CCE) y la Asociación Mexicana de la Industria de Tecnologías de Información (AMITI). Es Ingeniero en Tecnologías de Información y Telecomunicaciones, por la Universidad Anáhuac, tiene una Maestría en Administración de Negocios (MBA) por el Instituto de Empresa de Madrid, una Maestría en Seguridad Nacional por el Colegio de Defensa Nacional y certificaciones en innovación y tecnologías emergentes por Harvard, Singularity ",
                "bio_en": "Guillermo Ortega has over 15 years as a strategic consultant in innovation and strategic design at the international consulting firm NTT Data, where he is currently the innovation director and leads the business consulting practice in the telecommunications sector. He has worked on projects with public entities and global and regional companies in the financial, telecommunications, energy, logistics, tourism, food and beverage, and education sectors, and in various geographies such as Chile, Spain, Mexico, and Peru. He is the author and co-author of several books and studies on industrial innovation, process digitization, entrepreneurial ecosystems, and technological evolution that have been published in collaboration with institutions such as IPADE and CAF. He participates in the innovation commissions of the Business Coordinating Council (CCE) and the Mexican Association of the Information Technology Industry (AMITI). He is an Engineer in Information Technologies and Telecommunications from Universidad Anáhuac, holds a Master's degree in Business Administration (MBA) from Instituto de Empresa de Madrid, a Master's degree in National Security from Colegio de Defensa Nacional, and certifications in innovation and emerging technologies from Harvard, Singularity",
                "image": "/img/speakers/Guillermo_Ortega.jpeg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Tania Villa",
                "position": " ",
                "position_en": "",
                "company": "Agencia de Transformación Digital y Telecomunicaciones",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/default.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "4",
                "name": "Manuel Sandoval",
                "position": "CEO / Director ",
                "position_en": "CEO / Director",
                "company": "Knoware México",
                "bio": "Manuel Sandoval es CEO de Knoware México, cuenta con más de 30 años de experiencia en el desarrollo de sectores emergentes y empresas de base tecnológica en México. Su campo de especialización abarca una diversidad de industrias, como EdTech, Industria 4.0, Aeroespacial, Industrias Creativas, KPO, Biotecnología y Ciencias de la Vida. Entre sus logros, destacan la creación y el desarrollo de la Ciudad Creativa Digital en Guadalajara, el fortalecimiento de los Clústeres Aeroespacial y de Defensa en México y la participación en Puebla Capital Mundial del Diseño. Además, ha desempeñado un papel clave en la formulación de hojas de ruta tecnológicas, que sirven como estrategias nacionales para impulsar el progreso en sectores clave como la Industria 4.0, la industria aeroespacial, la fabricación avanzada, los dispositivos médicos y las industrias del diseño y la creatividad.",
                "bio_en": "Manuel Sandoval is CEO of Knoware México, with over 30 years of experience in developing emerging sectors and technology-based companies in Mexico. His area of expertise spans a variety of industries, including EdTech, Industry 4.0, Aerospace, Creative Industries, KPO, Biotechnology, and Life Sciences. Among his achievements are the creation and development of the Digital Creative City in Guadalajara, the strengthening of the Aerospace and Defense Clusters in Mexico, and participation in Puebla World Design Capital. Additionally, he has played a key role in formulating technology roadmaps that serve as national strategies to drive progress in key sectors such as Industry 4.0, aerospace industry, advanced manufacturing, medical devices, and design and creative industries.",
                "image": "/img/speakers/manuel_sandoval.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "5",
                "name": "Cindy Rayo",
                "position": "Directora",
                "position_en": "Director",
                "company": "Asociación Interamericana de Empresas de Telecomunicaciones",
                "bio": "Cindy Rayo Zapata cuenta con más de 18 años de experiencia en comercio internacional, telecomunicaciones, comercio digital, inversión y arbitraje de inversión. Fue negociadora y responsable de la implementación del TMEC para los temas de servicios, telecomunicaciones, comercio digital e inversión. Fue la responsable de establecer y coordinar el primer Grupo 5G y de ciberseguridad en el marco del Diálogo Económico de Alto Nivel entre México y Estados Unidos. Representó a México en la negociación y el diseño de reglas internacionales en temas relacionados con comercio electrónico, telecomunicaciones, pagos digitales, reglamentación nacional y protección y facilitación de inversiones. Participó en la negociación de múltiples tratados de libre comercio y acuerdos internacionales de inversión suscritos por México (TIPAT, TLCUEM, TMEC y APPRIs), en temas relacionados con comercio transfronterizo de servicios, comercio electrónico, telecomunicaciones, inversión, solución de controversias. Tiene una Maestría en Derecho Internacional Público por el Instituto Tecnológico de Estudios Superiores de Monterrey, es Licenciada en Relaciones Internacionales y Derecho por el ITAM. Desde 2023, se desempeña como Directora para México, Centroamérica y el Caribe de ASIET. ",
                "bio_en": "Cindy Rayo Zapata has over 18 years of experience in international trade, telecommunications, digital trade, investment, and investment arbitration. She was a negotiator and responsible for the implementation of the USMCA for services, telecommunications, digital trade, and investment issues. She was responsible for establishing and coordinating the first 5G and cybersecurity Group within the framework of the High-Level Economic Dialogue between Mexico and the United States. She represented Mexico in the negotiation and design of international rules on issues related to e-commerce, telecommunications, digital payments, national regulation, and investment protection and facilitation. She participated in the negotiation of multiple free trade agreements and international investment agreements signed by Mexico (TIPAT, EU-Mexico FTA, USMCA, and APPRIs), on issues related to cross-border trade in services, e-commerce, telecommunications, investment, dispute resolution. She holds a Master's degree in Public International Law from the Monterrey Institute of Technology and Higher Education, and a Bachelor's degree in International Relations and Law from ITAM. Since 2023, she has served as Director for Mexico, Central America, and the Caribbean at ASIET.",
                "image": "/img/speakers/Cindy_rayo.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
]

const stage_1_day_2: Program[] = [
    {

        "title": "Sistemas de Visión Industrial para una Automatización Mejorada",
        "title_en": "Industrial Vision Systems for Enhanced Automation",
        "description": "Descubre cómo Beckhoff Vision revoluciona la automatización industrial integrando visión, control, movimiento y PLC en una sola plataforma - Sin hardware ni software adicional: todo se sincroniza en tiempo real con los procesos de máquina - Soluciones escalables y de alto rendimiento: cámaras, óptica e iluminación industrial listas para cualquier entorno. - Integración total - elimina barreras entre visión y automatización, simplificando la ingeniería y operación - Procesos más precisos y ágiles: optimiza producción, calidad y eficiencia industrial - Innovación aplicada: habilita nuevas posibilidades para sistemas industriales avanzados - Con Beckhoff, la visión industrial se vuelve inteligente, unificada y potente.",
        "description_en": "Discover how Beckhoff Vision revolutionizes industrial automation by integrating vision, control, motion, and PLC into a single platform - No additional hardware or software: everything synchronizes in real time with machine processes - Scalable and high-performance solutions: cameras, optics, and industrial lighting ready for any environment. - Total integration - eliminates barriers between vision and automation, simplifying engineering and operation - More precise and agile processes: optimizes production, quality, and industrial efficiency - Applied innovation: enables new possibilities for advanced industrial systems - With Beckhoff, industrial vision becomes intelligent, unified, and powerful.",
        "img": "",
        "time": "11:20 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Adrián Ismael Beas Mora ",
                "position": "Ingeniero Especialista de Producto – I/O",
                "position_en": "Engineer Product Specialist – I/O",
                "company": "Beckhoff Automation",
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
                "company": "Beckhoff Automation",
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
                "name": "Gilberto Coxca",
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
        "title": "Del dato a la acción: cómo un Industrial SOC protege las operaciones críticas",
        "title_en": "From Data to Action: How an Industrial SOC Protects Critical Operations",
        "description": "Un Industrial Security Operations Center (Industrial SOC) se ha consolidado como el corazón de la ciberseguridad industrial. Su función principal es ofrecer una visión unificada de las operaciones, asegurando visibilidad sobre activos y procesos críticos. Esto permite la detección temprana de amenazas, la gestión proactiva de vulnerabilidades y la correlación de eventos para anticiparse a incidentes que comprometan la continuidad del negocio. Más allá de la tecnología, el Industrial SOC representa la convergencia entre procesos, personas y herramientas que transforman datos en inteligencia accionable. Así, se convierte en un habilitador esencial de resiliencia, confiabilidad y eficiencia en entornos industriales digitalizados.",
        "description_en": "An Industrial Security Operations Center (Industrial SOC) has established itself as the heart of industrial cybersecurity. Its main function is to provide a unified view of operations, ensuring visibility over critical assets and processes. This allows for early threat detection, proactive vulnerability management, and event correlation to anticipate incidents that compromise business continuity. Beyond technology, the Industrial SOC represents the convergence between processes, people, and tools that transform data into actionable intelligence. Thus, it becomes an essential enabler of resilience, reliability, and efficiency in digitized industrial environments.",
        "time": "12:50 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Enrique Poceros",
                "position": "CTO",
                "position_en": "CTO",
                "company": "Roue ",
                "bio": "Enrique Poceros es experto en ciberseguridad para entornos industriales y se desempeña como Chief Technology Officer de Roue Consultores. Su experiencia incluye el diseño e integración de soluciones complejas, así como la definición de estándares de seguridad en sectores altamente críticos como energía, manufactura y oil & gas. Con más de una década de trayectoria, ha impulsado proyectos que integran innovación tecnológica y resiliencia cibernética, posicionándolo como referente en México y Latinoamérica en la protección de infraestructuras críticas.",
                "bio_en": "Enrique Poceros is an expert in cybersecurity for industrial environments and serves as Chief Technology Officer at Roue Consultores. His experience includes the design and integration of complex solutions, as well as the definition of security standards in highly critical sectors such as energy, manufacturing, and oil & gas. With over a decade of experience, he has driven projects that integrate technological innovation and cyber resilience, positioning him as a benchmark in Mexico and Latin America in the protection of critical infrastructures.",
                "image": "/img/speakers/Enrique_Poceros.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Alexei Pinal",
                "position": "OT Cybersecurity Sales Leader ",
                "position_en": "OT Cybersecurity Sales Leader ",
                "company": "Claroty ",
                "bio": "Alexei Pinal, Vicepresidente de Ciberseguridad para LATAM en Claroty, cuenta con amplia experiencia en la protección de sistemas industriales y tecnologías emergentes (OT, IoT, IoMT). Reconocido como growth strategist y angel investor, conecta la seguridad con la estrategia empresarial, fortaleciendo la confianza digital y la continuidad operativa en organizaciones de alto impacto.",
                "bio_en": "Alexei Pinal, Vice President of Cybersecurity for LATAM at Claroty, has extensive experience in protecting industrial systems and emerging technologies (OT, IoT, IoMT). Recognized as a growth strategist and angel investor, he connects security with business strategy, strengthening digital trust and operational continuity in high-impact organizations.",
                "image": "/img/speakers/alexei_pinal.png",
                "email": "",
                "phone": "",
                "moderador": false
            }
        ]
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
                "name": "Andrey Martinez",
                "position": "Offer Manager",
                "position_en": "Offer Manager",
                "company": "Schneider Electric",
                "bio": "Egresado del Instituto Politécnico Nacional, desempeña un rol estratégico clave en la gestión de productos y soluciones dentro del portafolio de Schneider Electric como offer manager, liderando la estrategia de productos y soluciones enfocado en gestionar el ciclo de vida de las ofertas, desde su conceptualización hasta su posicionamiento en el mercado, asegurando que respondan a las necesidades reales de los clientes.",
                "bio_en": "A graduate of the Instituto Politécnico Nacional, he plays a key strategic role in product and solution management within Schneider Electric's portfolio as an offer manager, leading the product and solution strategy focused on managing the life cycle of offers, from their conceptualization to their market positioning, ensuring they respond to the real needs of customers.",
                "image": "/img/speakers/Andrey_Martinez.jfif",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Irving Salgado",
                "position": "Business Developer",
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
                "position": "Business Developer",
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
        "title": "La fábrica impulsada por la IA: fusión de robótica, visión y seguridad para operaciones autónomas ",
        "title_en": "The AI-Driven Factory: Merging Robotics, Vision, and Security for Autonomous Operations",
        "description": "Las fábricas del futuro se definirán por la integración fluida de la robótica, la visión artificial y la toma de decisiones basada en IA. Esta charla explora cómo los robots móviles autónomos, los sistemas de visión inteligente y los modelos de aprendizaje automático convergen para ofrecer operaciones industriales flexibles, eficientes y seguras. A partir de implementaciones reales, examinamos cómo la IA permite la navegación adaptativa, el mantenimiento predictivo y la colaboración hombre-máquina, cumpliendo al mismo tiempo con estrictos estándares de seguridad. Los asistentes comprenderán las tecnologías, los desafíos y las mejores prácticas para la creación de fábricas verdaderamente autónomas, donde la inteligencia, la seguridad y la fiabilidad se integran en cada operación.",
        "description_en": "The factories of the future will be defined by the seamless integration of robotics, artificial vision, and AI-based decision-making. This talk explores how autonomous mobile robots, intelligent vision systems, and machine learning models converge to deliver flexible, efficient, and secure industrial operations. Drawing from real-world implementations, we examine how AI enables adaptive navigation, predictive maintenance, and human-machine collaboration, while simultaneously meeting stringent safety standards. Attendees will gain insights into the technologies, challenges, and best practices for creating truly autonomous factories, where intelligence, safety, and reliability are integrated into every operation.",
        "time": "14:30 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Naveen Arulselvan",
                "position": "Chief Technology Officer",
                "position_en": "Chief Technology Officer",
                "company": "Ati Motors",
                "bio": "El Dr. Naveen Arulselvan es Director de Tecnología de ATI (Ati Motors) y lidera la tecnología integral para robots móviles autónomos industriales, desde la percepción y navegación 3D-LiDAR hasta la orquestación y seguridad de flotas. Tiene una maestría y un doctorado en Ingeniería Eléctrica por la Universidad Northwestern y anteriormente trabajó en redes inalámbricas en Motorola y Altiostar (ahora parte de Rakuten); también ha sido profesor visitante en el Centro de Sistemas Ciberfísicos del IISc.",
                "bio_en": "Dr. Naveen Arulselvan is Chief Technology Officer at ATI (Ati Motors) and leads end-to-end technology for industrial autonomous mobile robots, from 3D-LiDAR perception and navigation to fleet orchestration and safety. He holds a master's and a Ph.D. in Electrical Engineering from Northwestern University and previously worked on wireless networks at Motorola and Altiostar (now part of Rakuten); he has also been a visiting professor at the Cyber-Physical Systems Center at IISc.",
                "image": "/img/speakers/Naveen_Headshot.png",
                "email": "",
                "phone": "",
                "moderador": false
            }
        ]
    },
    {
        "title": "Movilidad, Energía y Sostenibilidad: Cómo las Baterías Impulsan la Industria del Futuro",
        "title_en": "Mobility, Energy, and Sustainability: How Batteries Drive the Industry of the Future",
        "description": "La industria automotriz está viviendo una transformación histórica: en los próximos diez años cambiará más que en el último siglo. La electromovilidad está acelerando la evolución en manufactura, baterías y experiencia del cliente, mientras el concepto de Software Defined Vehicle redefine cómo se diseñan, producen y conectan los vehículos. Este nuevo paradigma abre oportunidades de negocio en innovación de materiales, reciclabilidad y tecnologías digitales. Además, factores como el cambio climático, la presión geopolítica y regulatoria están impulsando esta transición, posicionando a las empresas innovadoras como líderes en el futuro de la movilidad sostenible.",
        "description_en": "The automotive industry is undergoing a historic transformation: in the next ten years, it will change more than in the last century. Electromobility is accelerating evolution in manufacturing, batteries, and customer experience, while the concept of Software Defined Vehicle redefines how vehicles are designed, produced, and connected. This new paradigm opens business opportunities in materials innovation, recyclability, and digital technologies. Additionally, factors such as climate change, geopolitical and regulatory pressure are driving this transition, positioning innovative companies as leaders in the future of sustainable mobility.",
        "time": "15:10 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Vladimir García",
                "position": "Lead-Acid battery materials expert North America",
                "position_en": "Lead-Acid battery materials expert North America",
                "company": "Clarios",
                "bio": "Dr. Vladimir García Hernández es un reconocido especialista con una sólida trayectoria académica y profesional en el sector automotriz. Es Ingeniero Químico Industrial por la Universidad de las Américas Puebla (UDLA) y Doctor en Ciencia de Materiales por la Universidad Autónoma de Nuevo León (UANL). Su formación se complementa con un diplomado en mandos intermedios por ICAMI, fortaleciendo sus capacidades de liderazgo y gestión estratégica. Con más de dos décadas de experiencia, el Dr. García Hernández ha sido pieza clave en el desarrollo e innovación de materiales para baterías plomo-acido, colaborando estrechamente con universidades, centros de investigación, clientes y proveedores. Su participación en proyectos académicos de licenciatura y posgrado ha contribuido significativamente al avance tecnológico del sector, consolidando puentes entre la academia y la industria en el norte del país. Durante su estancia como expatriado en Glendale, Wisconsin, representando a Clarios, amplió su perspectiva global y red de colaboración, experiencia que hoy aplica como responsable del desarrollo de materiales para la región de Norteamérica. Su liderazgo ha sido fundamental en iniciativas de innovación dentro del Clúster Automotriz de Nuevo León, donde promueve activamente la competitividad y el progreso tecnológico de la industria. Apasionado por la excelencia y la innovación, el Dr. García Hernández es una figura influyente en el ecosistema automotriz de Norteamérica. Fuera del ámbito profesional, encuentra en la cocina un espacio de creatividad y conexión familiar, reflejo de su enfoque integral y humano.",
                "bio_en": "Dr. Vladimir García Hernández is a renowned specialist with a solid academic and professional background in the automotive sector. He is an Industrial Chemical Engineer from the Universidad de las Américas Puebla (UDLA) and holds a PhD in Materials Science from the Universidad Autónoma de Nuevo León (UANL). His education is complemented by a diploma in middle management from ICAMI, strengthening his leadership and strategic management skills. With over two decades of experience, Dr. García Hernández has been a key player in the development and innovation of lead-acid battery materials, working closely with universities, research centers, clients, and suppliers. His involvement in undergraduate and postgraduate academic projects has significantly contributed to the technological advancement of the sector, building bridges between academia and industry in the northern part of the country. During his time as an expatriate in Glendale, Wisconsin, representing Clarios, he expanded his global perspective and collaboration network, experience that he now applies as head of materials development for the North America region. His leadership has been fundamental in innovation initiatives within the Nuevo León Automotive Cluster, where he actively promotes competitiveness and technological progress in the industry. Passionate about excellence and innovation, Dr. García Hernández is an influential figure in the North American automotive ecosystem. Outside of his professional field, he finds creativity and family connection in cooking, reflecting his comprehensive and human approach.",
                "image": "/img/speakers/vladimir_garcia.webp",
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
                "name": "Lilia de Diego Correa - Moderadora",
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
        "title": "Value Engineering & Compressed Air System Auditing",
        "title_en": "Value Engineering & Compressed Air System Auditing",
        "description": "En HTD, la Ingeniería de Valor es la base estratégica de nuestros proyectos, ya que permite maximizar el valor mediante el análisis funcional, la optimización y la implementación de soluciones que mejoran el desempeño, la eficiencia y la rentabilidad. En alianza con The Analysts, aplicamos estos principios a través de auditorías técnicas y económicas en sistemas de aire comprimido y gases industriales, para: reducir costos operativos, mejorar la eficiencia energética, aumentar la confiabilidad y cumplir objetivos ESG. Durante la conferencia, Josh Wamser, socio de The Analysts, mostrará cómo esta metodología genera resultados tangibles en ahorros y desempeño técnico, impulsando la eficiencia, sostenibilidad y valor económico que promueve HTD.",
        "description_en": "At HTD, Value Engineering is the strategic foundation of our projects, as it allows us to maximize value through functional analysis, optimization, and the implementation of solutions that improve performance, efficiency, and profitability. In partnership with The Analysts, we apply these principles through technical and economic audits in compressed air systems and industrial gases, to: reduce operating costs, improve energy efficiency, increase reliability, and meet ESG objectives. During the conference, Josh Wamser, partner at The Analysts, will show how this methodology generates tangible results in savings and technical performance, driving efficiency, sustainability, and economic value promoted by HTD.",
        "time": "16:50 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Josh Wamser",
                "position": "Lead Auditor",
                "position_en": "Lead Auditor",
                "company": "HTD - The Analysts",
                "bio": "Josh Wamser Lead Auditor – The Analysts Josh Wamser es un especialista con más de 20 años de experiencia en sistemas de aire comprimido, ingeniería y auditorías técnicas enfocadas en la optimización del desempeño, la eficiencia energética y la rentabilidad industrial. Como Lead Auditor en The Analysts, integra los principios de Ingeniería de Valor para evaluar y mejorar el rendimiento, el consumo energético y el retorno de inversión (ROI) en sistemas de aire y gas. Es fundador de Industrial Compressor Solutions, empresa dedicada a la consultoría, diseño y mantenimiento de sistemas industriales de aire comprimido. En alianza con HTD, promueve el uso de la Ingeniería de Valor como herramienta estratégica para reducir costos, mejorar la eficiencia y fomentar la sostenibilidad en las operaciones industriales. Ha colaborado con VPInstruments, Donaldson y es conferencista en eventos internacionales como CABP Expo y Reliability Summits.",
                "bio_en": "Josh Wamser Lead Auditor – The Analysts Josh Wamser is a specialist with over 20 years of experience in compressed air systems, engineering, and technical audits focused on optimizing performance, energy efficiency, and industrial profitability. As Lead Auditor at The Analysts, he integrates Value Engineering principles to evaluate and improve performance, energy consumption, and return on investment (ROI) in air and gas systems. He is the founder of Industrial Compressor Solutions, a company dedicated to consulting, design, and maintenance of industrial compressed air systems. In partnership with HTD, he promotes the use of Value Engineering as a strategic tool to reduce costs, improve efficiency, and foster sustainability in industrial operations. He has collaborated with VPInstruments, Donaldson, and is a speaker at international events such as CABP Expo and Reliability Summits.",
                "image": "/img/speakers/Josh_Wamser.png",
                "email": "",
                "phone": "",
                "moderador": false
            }
        ]
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
        "title": "Adaptación de las empresas a los cambios en las cadenas de suministro",
        "title_en": "Adapting Companies to Changes in Supply Chains",
        "description": "Las cadenas de suministro siguen enfrentando retos importantes que empujan a las empresas a ajustar sus operaciones continuamente. Dinámicas macroeconómicas e industriales han hecho que existan distintos arquetipos sobre cómo los países están aprovechando la manufactura para desarrollarse e impulsar su sector productivo, Existen siete factores clave que se requieren como habilitadores del desarrollo manufacturero de forma efectiva,	Los impactos de dichos factores varían por empresa, industria y posición en la cadena de valor,	Presentaremos mejores prácticas privadas y públicas alrededor de estos factores para fomentar la adaptación de las empresas a los ajustes en las cadenas de valor",
        "description_en": "Supply chains continue to face significant challenges that push companies to continuously adjust their operations. Macroeconomic and industrial dynamics have created different archetypes of how countries are leveraging manufacturing to develop and boost their productive sector. There are seven key factors required as enablers of effective manufacturing development. The impacts of these factors vary by company, industry, and position in the value chain. We will present private and public best practices around these factors to foster the adaptation of companies to adjustments in value chains.",
        "time": "18:20 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "Horacio Leal",
                "position": "Principal",
                "position_en": "Principal",
                "company": "Kearney",
                "bio": "Horacio es Principal en Kearney involucrado en la Práctica de Operaciones. Tiene 15 años de experiencia en consultoría de negocios, banca central y de desarrollo, política macroeconómica y de industria. Sus áreas de enfoque se centran en estrategia de Industria 4.0, procura, compras, gestión de proveedores y desarrollo económico. Ha atendido a clientes en México, Norteamérica, Europa, Sudamérica y Medio Oriente. Horacio ha participado en diversos esfuerzos de colaboración entre Kearney y el Foro Económico Mundial (WEF), desarrollando contenidos en temas de vanguardia, como metodologías de adopción de la 4IR a través de plataformas digitales y modelos de negocios afines, así como reconfiguración de las cadenas de valor. Horacio tiene un MBA del MIT, un MPA/ID de la Universidad de Harvard, y licenciaturas en Economía y Matemáticas Aplicada del ITAM.",
                "bio_en": "Horacio is a Principal at Kearney involved in the Operations Practice. He has 15 years of experience in business consulting, central and development banking, macroeconomic and industry policy. His areas of focus are centered on Industry 4.0 strategy, procurement, purchasing, supplier management, and economic development. He has served clients in Mexico, North America, Europe, South America, and the Middle East. Horacio has participated in various collaborative efforts between Kearney and the World Economic Forum (WEF), developing content on cutting-edge topics such as methodologies for adopting the 4IR through digital platforms and related business models, as well as reconfiguring value chains. Horacio holds an MBA from MIT, an MPA/ID from Harvard University, and bachelor's degrees in Economics and Applied Mathematics from ITAM.",
                "image": "/img/speakers/Horacio_Leal.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
]

const stage_1_day_3: Program[] = [
    {

        "title": "De la Innovación al Impacto: Transformando la Manufactura con Autodesk",
        "title_en": "From Innovation to Impact: Transforming Manufacturing with Autodesk",
        "description": "La industria manufacturera enfrenta el reto de acelerar la innovación y optimizar procesos sin comprometer la calidad ni los costos. En esta sesión exploraremos cómo las soluciones de Autodesk —como Product Design & Manufacturing Collection, Inventor, Vault Professional y Fusion Manage permiten conectar diseño, ingeniería y producción en un flujo digital integrado. Mostraremos casos reales de empresas que han logrado reducir tiempos, mejorar la colaboración y prepararse para la Industria 4.0 mediante la adopción de tecnologías de simulación, automatización y gestión del ciclo de vida del producto (PLM).",
        "description_en": "The manufacturing industry faces the challenge of accelerating innovation and optimizing processes without compromising quality or costs. In this session, we will explore how Autodesk solutions —such as Product Design & Manufacturing Collection, Inventor, Vault Professional, and Fusion Manage— enable the connection of design, engineering, and production in an integrated digital flow. We will showcase real cases of companies that have managed to reduce time, improve collaboration, and prepare for Industry 4.0 through the adoption of simulation, automation, and product lifecycle management (PLM) technologies.",
        "time": "11:20 hrs",
        "duration": "35 min",
        "speakers": [
            {
                "id": "1",
                "name": "César Varela",
                "position": "Territory Sales Representative",
                "position_en": "Territory Sales Representative",
                "company": "Autodesk",
                "bio": "César Varela Vargas es Territory Sales Representative para el segmento de Design & Manufacturing en Autodesk, donde lidera estrategias de transformación digital y adopción tecnológica en la industria manufacturera. Ingeniero Informático con formación en gestión tecnológica, César ha trabajado con empresas de toda la región impulsando la adopción de herramientas para diseño, ingeniería y manufactura inteligente.",
                "bio_en": "César Varela Vargas is a Territory Sales Representative for the Design & Manufacturing segment at Autodesk, where he leads digital transformation strategies and technology adoption in the manufacturing industry. An IT Engineer with training in technology management, César has worked with companies across the region promoting the adoption of tools for design, engineering, and smart manufacturing.",
                "image": "/img/speakers/Cesar_Varela.JPG",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Oscar Acuña",
                "position": "Technical Sales Specialist",
                "position_en": "Technical Sales Specialist",
                "company": "Autodesk",
                "bio": "Oscar Acuña López es Technical Sales Specialist de Autodesk, con amplia experiencia en diseño mecánico, manufactura digital y automatización de procesos. Ingeniero Mecatrónico con especialización en manufactura avanzada, Oscar asesora a empresas en la implementación de flujos conectados de diseño, simulación y producción, integrando soluciones como Inventor, Fusion Manage y Vault Professional para lograr una manufactura más inteligente y competitiva.",
                "bio_en": "Oscar Acuña López is a Technical Sales Specialist at Autodesk, with extensive experience in mechanical design, digital manufacturing, and process automation. A Mechatronics Engineer with a specialization in advanced manufacturing, Oscar advises companies on implementing connected design, simulation, and production workflows, integrating solutions such as Inventor, Fusion Manage, and Vault Professional to achieve smarter and more competitive manufacturing.",
                "image": "/img/speakers/Oscar_Acuña.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
            {
                "id": "2",
                "name": "Oscar Colin ",
                "position": "Global Cybersecurity Leader",
                "position_en": "Global Cybersecurity Leader",
                "company": "Siemens México, Centroamérica y el Caribe",
                "bio": "Es ingeniero en Control y Automatización, graduado del Instituto Politécnico Nacional. Cuenta con un diplomado en habilidades gerenciales del ITAM y una certificación CCSO de SIEMENS. Oscar también obtuvo una maestría en Ciberseguridad del Tecnológico de Monterrey y ha realizado múltiples cursos de liderazgo y ventas profesionales. Con más de 15 años de experiencia en tecnología, ha liderado proyectos y equipos de trabajo exitosos durante 7 años. Su experiencia internacional abarca Alemania, Canadá, Estados Unidos y Latinoamérica.",
                "bio_en": "He is a Control and Automation engineer, graduated from the Instituto Politécnico Nacional. He holds a diploma in managerial skills from ITAM and a CCSO certification from SIEMENS. Oscar also earned a master's degree in Cybersecurity from Tecnológico de Monterrey and has completed multiple courses in leadership and professional sales. With over 15 years of experience in technology, he has successfully led projects and work teams for 7 years. His international experience spans Germany, Canada, the United States, and Latin America.",
                "image": "/img/speakers/Oscar_Colin.jpg",
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
        "title": "Del Aula a la Industria: El Viaje del Talento que Transforma",
        "title_en": "Del Aula a la Industria: El Viaje del Talento que Transforma",
        "description": "¿Sueñas con hacer un impacto real en el mundo? Descubre cómo tu talento puede transformar la industria. Conoce historias inspiradoras de quienes han hecho la transición del aula al mundo laboral para convertirse en líderes que están definiendo el futuro.",
        "description_en": "Do you dream of making a real impact in the world? Discover how your talent can transform the industry. Hear inspiring stories from those who have made the transition from classroom to workplace to become leaders who are shaping the future.",
        "time": "13:40 hrs",
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
                "name": "Arianna González",
                "position": "Recurring Services Manager",
                "position_en": "Recurring Services Manager",
                "company": "Schneider Electric",
                "bio": "Arianna González: Egresada de la licenciatura de Biotecnología por parte de la Universidad Estatal de Arkansas. Actualmente trabaja como Recurring Services Manager, después de haber liderado la experiencia del cliente como Customer Success Manager, donde gestionó el soporte, contratos y proyectos con un enfoque en la satisfacción y lealtad del cliente. También participó en el Programa de Desarrollo, ocupando puestos clave como Digital Services Strategy, Inside Sales Representative, Tender Engineer y Business Developer, adquiriendo experiencia en ventas, negociación, desarrollo de ofertas, planificación empresarial y estrategias digitales.",
                "bio_en": "Arianna Gonzalez is a professional with a strong academic background in Biotechnology, holding a Bachelor of Science degree from Arkansas State University. She currently works as Recurring Services Manager, after previously leading customer experience as Customer Success Manager, where she managed support, contracts, and projects with a focus on satisfaction and loyalty. She also participated in the Development Program, holding key positions such as Digital Services Strategy, Inside Sales Representative, Tender Engineer, and Business Developer, gaining experience in sales, negotiation, offer development, business planning, and digital strategies.",
                "image": "/img/speakers/Arianna_Gonzalez.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "MX- System: Automatización libre de gabinete de control",
        "title_en": "MX- System: Control Cabinet Free Automation",
        "description": "El MX-System de Beckhoff revoluciona la forma de automatizar máquinas al eliminar por completo los armarios de distribución. Con esta innovación, la ingeniería se vuelve más simple y ágil, optimizando tanto el diseño como la implementación del sistema. Entre sus principales beneficios destacan: •	Ahorro de espacio físico, con un diseño compacto y eficiente. •	Reducción en la longitud de los recorridos de cables, lo que mejora la instalación y el mantenimiento. •	Certificación global, cumpliendo con los estándares UL/CSA e IEC para un uso seguro y universal. •	Concepto plug-and-play, que permite la instalación incluso por personal no especializado. •	Herramientas de diagnóstico claras y precisas, que garantizan una operación confiable y eficiente.",
        "description_en": "Beckhoff's MX-System revolutionizes the way machines are automated by completely eliminating distribution cabinets. With this innovation, engineering becomes simpler and more agile, optimizing both the design and implementation of the system. Its main benefits include: • Saving physical space, with a compact and efficient design. • Reduction in cable routing lengths, which improves installation and maintenance. • Global certification, complying with UL/CSA and IEC standards for safe and universal use. • Plug-and-play concept, allowing installation even by non-specialized personnel. • Clear and precise diagnostic tools, ensuring reliable and efficient operation.",
        "time": "14:30 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Giovanni Muciño",
                "position": "Ingeniero Especialista de producto – MX-System ",
                "position_en": " Product Specialist Engineer – MX-System ",
                "company": "Beckhoff Automation",
                "bio": "Ingeniero Mecatrónico, egresado del Instituto Tecnológico de Tlalnepantla, con trayectoria en automatización y adopción de nuevas tecnologías. Ha colaborado en proyectos integrales de diseño y montaje de gabinetes de control, participando en todas las etapas, desde la concepción hasta la puesta en marcha en campo. Esta experiencia le ha brindado una visión global de los procesos industriales, permitiéndole optimizar costos, tiempos y garantizar soluciones confiables para cada aplicación. Con amplia experiencia en automatización en el sector aeroportuario, donde se ha desempeñado bajo los más altos estándares de calidad y seguridad. Su formación se ha enriquecido con especializaciones en Alemania, donde profundizó en control de movimiento PTP, programación avanzada, comunicaciones industriales e interfaces web para automatización.",
                "bio_en": "Mechatronics Engineer, graduate of the Instituto Tecnológico de Tlalnepantla, with a background in automation and adoption of new technologies. He has collaborated on comprehensive projects for the design and assembly of control cabinets, participating in all stages, from conception to field commissioning. This experience has provided him with a global vision of industrial processes, allowing him to optimize costs, times, and ensure reliable solutions for each application. With extensive experience in automation in the airport sector, where he has worked under the highest standards of quality and safety. His training has been enriched with specializations in Germany, where he delved into PTP motion control, advanced programming, industrial communications, and web interfaces for automation.",
                "image": "/img/speakers/Giovanni_Muciño.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "Manufactura inteligente: Tecnología, estrategia y talento para lograr una operación superproductiva",
        "title_en": "Smart Manufacturing: Technology, Strategy, and Talent for Achieving a Superproductive Operation    ",
        "description": "En esta sesión revelaremos los principios que distinguen a las empresas altamente productivas, basándonos en hallazgos del estudio Cómo lograr lo posible, destacando datos locales de manufactura industrial. Exploraremos cómo tecnologías avanzadas —IA generativa, RPA y minería de procesos— están redefiniendo la manufactura moderna y compartiremos estrategias prácticas para convertir el piso de producción en una operación ágil, conectada y preparada para el futuro.",
        "description_en": "In this session, we will reveal the principles that distinguish highly productive companies, based on findings from the study How to Achieve the Possible, highlighting local data from industrial manufacturing. We will explore how advanced technologies — generative AI, RPA, and process mining — are redefining modern manufacturing and share practical strategies to turn the production floor into an agile, connected, and future-ready operation.",
        "time": "15:20 hrs",
        "duration": "45 min",
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
        title: "GeoField: Tecnología que revela lo invisible y transforma la agricultura",
        title_en: "GeoField: Technology that Reveals the Invisible and Transforms Agriculture ",
        description: "GeoField: Tecnología que revela lo invisible en la agricultura moderna” es una conferencia que muestra cómo los drones multiespectrales y el análisis de datos están transformando la forma de entender el campo. A través de imágenes que capturan lo que el ojo humano no puede ver, GeoField permite detectar estrés hídrico, deficiencias nutricionales y afectaciones tempranas antes de que impacten la producción. La charla expone casos reales, beneficios económicos y el futuro de la agricultura basada en datos. Es una invitación a los productores y técnicos a adoptar decisiones precisas, sustentadas en evidencia científica y tecnología avanzada.",
        description_en: "GeoField: Technology that Reveals the Invisible in Modern Agriculture” is a conference that shows how multispectral drones and data analysis are transforming the way we understand the field. Through images that capture what the human eye cannot see, GeoField allows for the detection of water stress, nutritional deficiencies, and early impacts before they affect production. The talk presents real cases, economic benefits, and the future of data-driven agriculture. It is an invitation for producers and technicians to make precise decisions based on scientific evidence and advanced technology.",
        time: "16:10 hrs",
        duration: "45 min",
        speakers: [
          {
                id: "1",
                name: "Pamela González Camacho",
                position: "Directora de soluciones geoespaciales",
                position_en: "Geospatial Solutions Director",
                company: "Grupo geospectral",
                bio: "Ingeniera Geofísica egresada de la Facultad de Ingeniería de la UNAM, con especialización en Ciencias Atmosféricas y Sistemas de Información Geográfica. Actualmente es Directora de Soluciones Geoespaciales en Grupo GeoSpectral, donde lidera proyectos fotogramétricos, topográficos y multiespectrales con drones DJI, AUTEL y WINGTRA, además de impartir capacitación técnica en análisis geoespacial. Cuenta con experiencia en teledetección, análisis espacial, modelado digital del terreno y gestión de datos geográficos. Piloto certificada de RPAS, ha colaborado con instituciones públicas y privadas en la implementación de sistemas geográficos y monitoreo ambiental, combinando precisión técnica y visión estratégica para la transformación digital del sector agrícola.",
                bio_en: "A Geophysical Engineer graduated from the Faculty of Engineering at UNAM, with a specialization in Atmospheric Sciences and Geographic Information Systems. She is currently the Geospatial Solutions Director at Grupo GeoSpectral, where she leads photogrammetric, topographic, and multispectral projects using DJI, AUTEL, and WINGTRA drones, as well as providing technical training in geospatial analysis. She has experience in remote sensing, spatial analysis, digital terrain modeling, and geographic data management. A certified RPAS pilot, she has collaborated with public and private institutions in implementing geographic systems and environmental monitoring, combining technical precision and strategic vision for the digital transformation of the agricultural sector.",
                image: "/img/speakers/pamelagonzalez.webp",
                email: "",
                phone: "",
                moderador: true
            },
            {
                id: "2",
                name: "José Pablo Morales Alfonso",
                position: "Ejecutivo",
                position_en: "Executive",
                company: "Geofield",
                bio: "Profesional en análisis de datos, logística y gestión empresarial, con experiencia en optimización de procesos y desarrollo estratégico de nuevos mercados. Actualmente forma parte de GeoSpectral, donde impulsa la expansión comercial y la integración de soluciones tecnológicas aplicadas al sector geoespacial. Ha desempeñado roles clave en empresas como PK Flex, Byggir & Co. y Essity, especializándose en control de operaciones, pronósticos de demanda y generación de indicadores mediante SQL, Python y Power BI. Su enfoque combina inteligencia de datos y visión empresarial para fortalecer la eficiencia operativa y la toma de decisiones en entornos de innovación tecnológica.",
                bio_en: "A professional in data analysis, logistics, and business management, with experience in process optimization and strategic development of new markets. She is currently part of GeoSpectral, where she drives commercial expansion and the integration of technological solutions applied to the geospatial sector. She has held key roles in companies such as PK Flex, Byggir & Co., and Essity, specializing in operations control, demand forecasting, and generating indicators using SQL, Python, and Power BI. Her approach combines data intelligence and business vision to strengthen operational efficiency and decision-making in technological innovation environments.",
                image: "/img/speakers/josepablomorales.webp",
                email: "",
                phone: "",
                moderador: true
            }
        ],
      },
]

//Leaders of Tomorrow Area
const stage_2_day_1: Program[] = [
    {
        "title": "Inauguración ITM 2025",
        "title_en": "ITM 2025 Opening",
        "description": "",
        "description_en": "",
        "time": "11:30 hrs",
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
        "speakers": [
            
            {
                "id": "1",
                "name": "Andreas Müller",
                "position": "Director General Adjunto de la Cámara Mexicano-Alemana de Comercio e Industria",
                "position_en": "Deputy Director General of the Mexican-German Chamber of Commerce and Industry",
                "company": "CAMEXA",
                "bio": "Andreas Müller Sub-Director de la Cámara Mexicano Alemana de Comercio e Industria, CAMEXA desde Septiembre 2011. Desde agosto 2017 es presidente del Comité de Gestión por Competencias de Energías Renovables y Eficiencia Energética, y desde 2013 Vice-presidente del Comité de Gestión por Competencias de CAMEXA del CONOCER. Desde Enero 2021 funge como asesor estratégico a la Alianza para la Educación Dual de la Confederación Alemana de las Cámaras de Comercio e Industria (DIHK) que apoya al CCE, COPARMEX y el CONOCER en el escalamiento de la formación dual empresarial.Desde Febrero 2022 es Vicepresidente de la Comisión de México  4.0 de CONCAMIN para los temas de estandarización, ciberseguridad, sustentabilidad y formación dual.",
                "bio_en": "Andreas Müller has been the Deputy Director of the Mexican-German Chamber of Commerce and Industry (CAMEXA) since September 2011. Since August 2017, he has been the president of the Competency Management Committee for Renewable Energies and Energy Efficiency, and since 2013, he has been the vice president of the Competency Management Committee of CAMEXA of CONOCER. Since January 2021, he has served as a strategic advisor to the Dual Education Alliance of the German Confederation of Chambers of Commerce and Industry (DIHK), which supports the CCE, COPARMEX, and CONOCER in scaling dual vocational training. Since February 2022, he has been the Vice President of the Mexico 4.0 Commission of CONCAMIN for issues of standardization, cybersecurity, sustainability, and dual training.",
                "image": "/img/speakers/andreasmuller.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Elena Estavillo",
                "position": "Fundadora y Directora General",
                "position_en": "Founder and CEO",
                "company": "Centro i",
                "bio": "Elena Estavillo es fundadora y directora general de Centro-i para la Sociedad del Futuro, un think tank independiente que promueve un futuro tecnológico ético, responsable e inclusivo. Fue comisionada del organismo regulador mexicano de telecomunicaciones y radiodifusión (Instituto Federal de Telecomunicaciones, IFT), y es una experta reconocida a nivel mundial en ética de la inteligencia artificial, gobernanza digital e igualdad de género en la tecnología. Lideró la Evaluación de Preparación en IA de la UNESCO en México y ha formado parte del Grupo de Expertas de la CSW. Finalista del premio Woman in AI of the Year (2023), además de ser reconocida como ITU Gender Trendsetter. Es Harvard ALI Fellow 2023 y doctora en Economía por la Universidad de París.",
                "bio_en": "Elena Estavillo is the founder and CEO of Centro-i for the Society of the Future, an independent think tank that promotes an ethical, responsible, and inclusive technological future. She was a commissioner of the Mexican telecommunications and broadcasting regulatory body (Federal Institute of Telecommunications, IFT) and is a globally recognized expert in artificial intelligence ethics, digital governance",
                "image": "/img/speakers/Elena_Estavillo.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Ute Böttcher",
                "position": "Directora Residente",
                "position_en": "Resident Director",
                "company": "GIZ México",
                "bio": "Ute Boettcher se desempeña como Directora Residente de la GIZ México, donde lidera programas estratégicos que fomentan el desarrollo sostenible y la gobernanza democrática. Con 25 años de destacada trayectoria en la cooperación internacional y más de 20 años en funciones de liderazgo y gestión, su experiencia se centra en áreas críticas como medio ambiente, cambio climático, comercio y gobernanza. Ha dirigido proyectos clave a nivel global, incluyendo el fomento de normas ambientales en la industria textil en Bangladesh, la coordinación de iniciativas climáticas en Asia y África, y la asesoría al Ministerio de Medio Ambiente en Malí. Su habilidad para colaborar eficazmente con gobiernos, ONGs y el sector privado resalta su influencia y liderazgo en el ámbito internacional.",
                "bio_en": "Ute Boettcher serves as the Resident Director of GIZ Mexico, where she leads strategic programs that promote sustainable development and democratic governance. With 25 years of distinguished experience in international cooperation and over 20 years in leadership and management roles, her expertise focuses on critical areas such as environment, climate change, trade, and governance. She has led key projects globally, including promoting environmental standards in the textile industry in Bangladesh, coordinating climate initiatives in Asia and Africa, and advising the Ministry of Environment in Mali. Her ability to collaborate effectively with governments, NGOs, and the private sector highlights her influence and leadership in the international arena.",
                "image": "/img/speakers/ute_Boettcher_farbe.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "4",
                "name": "Julia Unger - Moderadora",
                "position": "Coordinadora del Clúster Gobernanza y Desarrollo Económico Sostenible",
                "position_en": "Coordinator of the Governance and Sustainable Economic Development Cluster",
                "company": "GIZ México",
                "bio": "Julia Unger, es licenciada en derecho por la Universidad de Humboldt de Berlín, titulada de jueza en Alemania y tiene una maestría en derecho internacional y europeo de la Universidad de Bremen y un Diplomado en Políticas de Desarrollo del Instituto Alemán de Desarrollo. Tiene más de 20 años de experiencia de colaborar en procesos de protección de derechos y desarrollo con la Cooperación Alemana – GIZ en diferentes países de América Latina, particularmente en Perú, Nicaragua, Ecuador y México. Por la GIZ estuvo a cargo del Programa de Fortalecimiento de la Federación Iberoamericana del Ombudsman (PROFIO) de 2013-2019. Actualmente es la Coordinadora del área de Paz y Cohesión Social de la GIZ en Ecuador y Responsable del Programa de Apoyo a Comunidades de Acogida de Refugiados y Migrantes en Zonas Fronterizas de Colombia, Ecuador y Perú SI-Frontera.",
                "bio_en": "Julia Unger holds a law degree from Humboldt University in Berlin, is a qualified judge in Germany, and has a master's degree in international and European law from the University of Bremen, as well as a Diploma in Development Policies from the German Development Institute. She has over 20 years of experience collaborating on rights protection and development processes with German Cooperation – GIZ in various Latin American countries, particularly in Peru, Nicaragua, Ecuador, and Mexico. She was in charge of the Strengthening Program of the Ibero-American Ombudsman Federation (PROFIO) from 2013-2019. She is currently the Coordinator of the Peace and Social Cohesion area of GIZ in Ecuador and Responsible for the Support Program for Host Communities of Refugees and Migrants in Border Areas of Colombia, Ecuador, and Peru SI-Frontera.",
                "image": "/img/speakers/juliaunger.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "5",
                "name": "Volker Gutekunst",
                "position": "Consejero Económico ",
                "position_en": "Economic Advisor",
                "company": "Embajada de Alemania en México",
                "bio": "Volker Gutekunst es consejero económico de la Embajada de la República Federal de Alemania en México. Sirvió en el departamento de política industrial del Ministerio Federal de Economía, en la sección de asuntos generales de la Unión Europea en la Cancillería Federal, en la Cancillería del Estado de Renania del Norte-Westfalia y en la Oficina Federal de Estadística de Alemania. Estudió ciencias políticas e historia en Tübingen y Buenos Aires tanto como relaciones internacionales en Berlín y París.",
                "bio_en": "Volker Gutekunst is the Economic Advisor at the Embassy of the Federal Republic of Germany in Mexico. He served in the industrial policy department of the Federal Ministry of Economics, in the general affairs section of the European Union at the Federal Chancellery, in the Chancellery of the State of North Rhine-Westphalia, and at the Federal Statistical Office of Germany. He studied political science and history in Tübingen and Buenos Aires as well as international relations in Berlin and Paris.",
                "image": "/img/speakers/volker.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "Inauguración Cumbre de Desarrollo Industrial Sostenible",
        "title_en": "Opening of the Sustainable Industrial Development Summit",
        "description": "",
        "description_en": "",
        "time": "14:15 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Excmo. Dr. Clemens von Goetze",
                "position": "Embajador",
                "position_en": "Ambassador",
                "company": "República Federal de Alemania en México ",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/Clemens_von_Goetze.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Hans Blomeier - Moderador",
                "position": "Representante en México",
                "position_en": "Representative in Mexico",
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
                "position": "Representante en México",
                "position_en": "Representative in Mexico",
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
                "name": "Satoshi Takehara",
                "position": "Vicepresidente",
                "position_en": "Vice President",
                "company": "Cámara Japonesa de Comercio e Industria de México",
                "bio": "Takaaki Kuga, actual Presidente de Toyota Motor México y de la Cámara Japonesa de Comercio en México, cuenta con más de 30 años de trayectoria internacional en la industria automotriz. Actual presidente de Mitsubishi de México y vicepresidente de la Cámara Japonesa de Comercio e Industria en México cuenta con más de 30 años de experiencia internacional en “Sogo Shosha”, una empresa dedicada al comercio e inversión general. Es licenciado en Administración de Empresas por la Universidad de Kioto. En 1992 se incorporó a Mitsubishi Corporation, donde destacó en comercio exterior e inversión, en los sectores de plantas industriales, maquinaria de construcción, automotriz, entre otros. También posee amplia experiencia en áreas corporativas como gestión de riesgos y recursos humanos. Su visión global, liderazgo intercultural y trayectoria internacional lo posicionan como una figura clave en el fortalecimiento de las relaciones bilaterales entre Japón y México.",
                "bio_en": "Takaaki Kuga, current President of Toyota Motor Mexico and the Japanese Chamber of Commerce in Mexico, has over 30 years of international experience in the automotive industry. Currently president of Mitsubishi de México and vice president of the Japanese Chamber of Commerce and Industry in Mexico, he has more than 30 years of international experience in “Sogo Shosha,” a company dedicated to general trade and investment. He holds a degree in Business Administration from Kyoto University. In 1992, he joined Mitsubishi Corporation, where he excelled in foreign trade and investment in sectors such as industrial plants, construction machinery, automotive, among others. He also has extensive experience in corporate areas such as risk management and human resources. His global vision, intercultural leadership, and international career position him as a key figure in strengthening bilateral relations between Japan and Mexico.",
                "image": "/img/speakers/satoshitakehara.jpg",
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
                "company": "Proyecto PAGSID - BDI",
                "bio": "Maestro en Ciencias en Ingeniería de Sistemas de Producción por la RWTH Aachen University (Alemania) e Ingeniero Mecánico Administrador por el Tecnológico de Monterrey. Ha sido profesor en el Tecnológico de Monterrey y consultor para empresas extranjeras en proyectos de inversión en México y para PyMEs en proyectos de planeación estratégica, innovación, gestión de la tecnología e industria 4.0.<br><br> Cuenta con más de 10 años de experiencia en proyectos de cooperación internacional con enfoque en desarrollo sostenible, innovación y educación, siendo su área de especialización la cooperación económica y desarrollo entre Alemania y la Alianza del Pacífico. Actualmente es Coordinador del proyecto Asociación para el Desarrollo Industrial Sostenible Alemania - Alianza del Pacífico (PAGSID) de la Confederación de la Industria Alemana (BDI).",
                "bio_en": "Master of Science in Production Systems Engineering from the RWTH Aachen University (Germany) and Managing Mechanical Engineer from the Tecnológico de Monterrey. He has been a professor at the Tecnológico de Monterrey and consultant for foreign companies in investment projects in Mexico and for SMEs in strategic planning, innovation, technology management and industry 4.0 projects. <br><br>He has more than 10 years of experience in international cooperation projects focusing on sustainable development, innovation and education, his area of expertise being economic and development cooperation between Germany and the Pacific Alliance. Currently project coordinator of the Association for Sustainable Industrial Development Germany - Pacific Alliance (PAGSID) of the Confederation of German Industry (BDI).", 
                "image": "/img/speakers/german_bonilla_bermudez.webp",
                "email": "",
                "phone": "",
                "moderador": true
            },         
            {
                "id": "2",
                "name": "Héctor Arturo Oropeza ",
                "position": "Presidente - Investigador Titular",
                "position_en": "President - Senior Researcher",
                "company": "Instituto para el Desarrollo Industrial y la Transformación Digital - Instituto de Investigaciones Jurídicas UNAM",
                "bio": "Doctor en Derecho por la Universidad Nacional Autónoma de México (UNAM). Investigador del Instituto de Investigaciones Jurídicas de la UNAM. Actual Presidente del Instituto para el Desarrollo Industrial y la Transformación Digital (INADI). H sido conferencista y profesor invitado en universidades y organismos de todo el mundo, entre ellos la Academia China de Ciencias Sociales, la Universidad Nacional de Derecho de Bangalore, la Universidad de Chuo, la Universidad Soongsil, la Universidad Autónoma de Lisboa, la Universidad de Montreal, la Universidad de Johannesburgo, la SEGIB, la OEA, la ALADI y la CEPAL. Es autor y coordinador de más de 40 libros sobre políticas para el desarrollo industrial integral, políticas para la transformación digital, entre los cuales destacan: “Inteligencia Artificial. Hacia una nueva era en la historia de la Humanidad”, “Hacia una nueva visión para el Desarrollo Industrial Digital en México”",
                "bio_en": "Doctor of Law from the National Autonomous University of Mexico (UNAM). Researcher at the Institute of Legal Research of UNAM. Current President of the Institute for Industrial Development and Digital Transformation (INADI). He has been a speaker and guest professor at universities and organizations around the world, including the Chinese Academy of Social Sciences, the National Law University of Bangalore, Chuo University, Soongsil University, the Autonomous University of Lisbon, the University of Montreal, the University of Johannesburg, SEGIB, OAS, ALADI and ECLAC. He is author and coordinator of more than 40 books on policies for comprehensive industrial development, policies for digital transformation, among which stand out: “Artificial Intelligence. Towards a new era in the history of Humanity”, “Towards a new vision for Digital Industrial Development in Mexico”",
                "image": "/img/speakers/hector_arturo.jpeg",
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
        "speakers": [
            {
                "id": "4",
                "name": "Bernd Rohde",
                "position": "CEO and Member of the Board of Directors",
                "position_en": "CEO and Member of the Board of Directors",
                "company": "Italian German Exhibition Company",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/Bernd_Rohde.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            
        ]
    },
   {
        "title": "Perspectivas actuales y futuras en baterías para la movilidad eléctrica",
        "title_en": "Current and Future Perspectives on Batteries for Electric Mobility",
        "description": "La movilidad evoluciona constantemente, y las baterías de litio son fundamentales para la electrificación de la propulsión. Esta ponencia analizará el presente y futuro de las baterías en vehículos ligeros, abordando su evolución tecnológica y las cadenas de valor a nivel global. La información a presentar proviene de las bases de datos de S&P Global Mobility, que ofrecen datos valiosos y actualizados sobre las tendencias y actores del mercado, permitiendo una comprensión profunda de su impacto en la industria automotriz y sectores adyacentes.",
        "description_en": "Mobility is constantly evolving, and lithium batteries are fundamental to the electrification of propulsion. This presentation will analyze the present and future of batteries in light vehicles, addressing their technological evolution and value chains at a global level. The information to be presented comes from S&P Global Mobility databases, which provide valuable and up-to-date data on market trends and players, allowing for a deep understanding of their impact on the automotive industry and adjacent sectors.",
        "time": "17:25 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Hugo Cruz",
                "position": "Analista Senior",
                "position_en": "Senior Analyst",
                "company": "S&P Global Mobility",
                "bio": "Hugo Cruz es un Analista Senior en S&P Global Mobility, donde trabaja en el equipo de Baterías. El investiga las estrategias de electrificación de los fabricantes de automóviles, las tendencias en tecnología de baterías y sus cadenas de suministro, desde la extracción de minerales hasta su instalación en vehículos eléctricos. Con 15 años de experiencia en los sectores automotriz, energía y electrónica, Hugo ha ocupado cargos en ingeniería, investigación, emprendimiento y políticas públicas. Tiene un Maestría en Ciencias en Energía Sustentable por la Universidad de Delft (Países Bajos) y una Ingeniería en Electrónica por la UNAM (México), así como certificaciones en finanzas, análisis de datos y gestión de proyectos (PMP).",
                "bio_en": "Hugo Cruz is a Senior Analyst at S&P Global Mobility, where he works on the Batteries team. He researches automakers' electrification strategies, battery technology trends, and their supply chains, from mineral extraction to installation in electric vehicles. With 15 years of experience in the automotive, energy, and electronics sectors, Hugo has held roles in engineering, research, entrepreneurship, and public policy. He holds a Master of Science in Sustainable Energy from Delft University (Netherlands) and a degree in Electronics Engineering from UNAM (Mexico), as well as certifications in finance, data analysis, and project management (PMP).",
                "image": "/img/speakers/hugo_cruz.png",
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
        "title": "Navegando el futuro de la manufactura: Aprovechando la madurez digital y la IA para obtener una ventaja competitiva",
        "title_en": "Navigating the Future of Manufacturing: Leveraging Digital Maturity and AI for Competitive Advantage",
        "description": "En su empresa, su objetivo es crear mejores productos, vender más y aumentar la rentabilidad. Sin embargo, el caos, la incertidumbre y la IA añaden presión. Las fuerzas externas actúan como barreras en el sector manufacturero. Los líderes deben seguir las tendencias para dirigir sus organizaciones eficazmente. La escasez global de talento, con más de 5 millones de puestos vacantes, las interrupciones en la cadena de suministro y la volatilidad macroeconómica plantean desafíos. Sin embargo, convertir las debilidades en fortalezas y conectar los procesos fallidos, al tiempo que se aprovecha la IA, puede ofrecer una ventaja competitiva. En esta sesión, compartiremos por qué su organización necesita alcanzar una mayor madurez digital y le proporcionaremos el plan para empezar.",
        "description_en": "In your company, your goal is to create better products, sell more, and increase profitability. However, chaos, uncertainty, and AI add pressure. External forces act as barriers in the manufacturing sector. Leaders must follow trends to effectively lead their organizations. The global talent shortage, with over 5 million vacancies, supply chain disruptions, and macroeconomic volatility pose challenges. However, turning weaknesses into strengths and connecting failed processes while leveraging AI can offer a competitive advantage. In this session, we will share why your organization needs to achieve greater digital maturity and provide you with the plan to get started.",
        "time": "11:20 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Bassanio Peters",
                "position": "Sr. Market Development Mgr",
                "position_en": "Sr. Market Development Mgr",
                "company": "Autodesk",
                "bio": "Bassanio Peters es Gerente Senior de Desarrollo de Mercado y líder global para el negocio de Datos y Procesos en Autodesk. Bassanio es un líder innovador con más de 15 años de experiencia en la elaboración de estrategias y ejecución en la industria de la ingeniería y la fabricación.",
                "bio_en": "Bassanio Peters is a Senior Market Development Manager and global leader for the Data and Process business at Autodesk. Bassanio is an innovative leader with over 15 years of experience in strategy development and execution in the engineering and manufacturing industry.",
                "image": "/img/speakers/bassanio_peters.jpeg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Abraham Pineda",
                "position": "Technical Sales Specialist",
                "position_en": "Technical Sales Specialist",
                "company": "Autodesk",
                "bio": "Abraham Pineda Especialista en Diseño y Fabricación de Productos en Autodesk. Ayuda a los equipos de nivel C a transformar y desarrollar procesos, automatizar flujos de trabajo y acelerar la innovación. Experto en PLM, PDM, CAD y CAM. Apasionado por resolver lo imposible con tecnología.",
                "bio_en": "Abraham Pineda is a Product Design and Manufacturing Specialist at Autodesk. He helps C-level teams transform and develop processes, automate workflows, and accelerate innovation. Expert in PLM, PDM, CAD, and CAM. Passionate about solving the impossible with technology.",
                "image": "/img/speakers/abraham_pineda.jpg",
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
        "time": "12:10 hrs",
        "duration": "45 min",
        "speakers": [
            {
                "id": "1",
                "name": "Roberto Tepoz",
                "position": "System & Architecture Senior Engineer",
                "position_en": "System & Architecture Senior Engineer",
                "company": "Schneider Electric",
                "bio": "Ingeniero Mecánico Eléctrico graduado del Instituto Tecnológico y de Estudios Superiores de Monterrey con un Master en Industria 4.0 y Automatización de Procesos por la Universidad Politécnica de Catalunya. Cuenta con certificaciones de Green Belt Six Sigma, Cyberseguridad - ISA, Telecomunicaciones",
                "bio_en": "Ingeniero Mecánico Eléctrico graduado del Instituto Tecnológico y de Estudios Superiores de Monterrey con un Master en Industria 4.0 y Automatización de Procesos por la Universidad Politécnica de Catalunya. Cuenta con certificaciones de Green Belt Six Sigma, Cyberseguridad - ISA, Telecomunicaciones",
                "image": "/img/speakers/default.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Erandi Bañuelos",
                "position": "Offer Category Manager Services",
                "position_en": "Ofter Category Manager Services",
                "company": "Schneider Electric",
                "bio": "Egresada de la universidad nacional autónoma de Mexico, con más de una década de experiencia en ventas, ingeniería y gestión de servicios. Actualmente se desempeña como Category Manager de Power Services en Schneider Electric, donde ha liderado estrategias comerciales y relaciones con clientes clave. Su carrera incluye roles como especialista en ventas de campo y representante de servicios, consolidando su experiencia en soluciones eléctricas. ",
                "bio_en": "Graduate of the National Autonomous University of Mexico, with over a decade of experience in sales, engineering, and service management. She currently serves as Power Services Category Manager at Schneider Electric, where she has led commercial strategies and key customer relationships. Her career includes roles as a field sales specialist and service representative, consolidating her expertise in electrical solutions.",
                "image": "/img/speakers/ErandiBañuelos.jfif",
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
        "title": "La piedra angular de la industria está en la educación ",
        "title_en": "The Cornerstone of Industry is in Education",
        "description": "Mitsubishi Electric",
        "description_en": "Mitsubishi Electric",
        "time": "13:00 hrs",
        "duration": "45 min",
        "speakers": []
    },
    
    {
        "title": "Transformación inteligente: Ciberseguridad como ventaja competitiva en la Industria 4.0",
        "title_en": "Intelligent Transformation: Cybersecurity as a Competitive Advantage in Industry 4.0",
        "description": "La Ciberseguridad Industrial ya no es solo una medida defensiva: es un habilitador clave de la innovación en la era de la Industria 4.0. Esta conferencia explora cómo una estrategia robusta de Seguridad ICS/OT permite a las organizaciones manufactureras adoptar tecnologías emergentes, mejorar la resiliencia operativa y acelerar la transformación digital. Se abordarán casos reales, marcos normativos relevantes y recomendaciones prácticas para integrar la ciberseguridad como parte del diseño de procesos industriales inteligentes. Dirigida a líderes de manufactura, esta charla ofrece una visión estratégica sobre cómo la protección es parte de la innovación.",
        "description_en": "Industrial Cybersecurity is no longer just a defensive measure: it is a key enabler of innovation in the Industry 4.0 era. This presentation explores how a robust ICS/OT Security strategy enables manufacturing organizations to adopt emerging technologies, enhance operational resilience, and accelerate digital transformation. Real cases, relevant regulatory frameworks, and practical recommendations for integrating cybersecurity as part of the design of intelligent industrial processes will be addressed. Aimed at manufacturing leaders, this talk offers a strategic vision on how protection is part of innovation.",
        "time": "13:50 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Alessandro Galvao do Vale",
                "position": "Coordinador CoE Seguridad IoT/OT",
                "position_en": "IoT/OT Security CoE Coordinator",
                "company": "SCITUM TELMEX",
                "bio": "Licenciado en Administración por la UFRJ, actualmente coordina el Centro de Excelencia en Seguridad IoT/OT en Scitum, liderando estrategias para proteger entornos industriales. Con más de 28 años de experiencia internacional en tecnología, ha colaborado con empresas globales en múltiples sectores. Es CISSP, miembro de ISA y especialista en Ciberseguridad Industrial, integrando marcos como ISA/IEC 62443, NIST SP800-82 e ISO/IEC 27019. Su enfoque une visión técnica y de negocio, identificando el impacto de la ciberseguridad en la operación y competitividad. Ha sido ponente en eventos de alto nivel en México y Latinoamérica y promueve la adopción de buenas prácticas, el desarrollo de capacidades locales y la expansión de servicios especializados en Seguridad IoT/OT desde Scitum.",
                "bio_en": "Bachelor in Administration from UFRJ, he currently coordinates the IoT/OT Security Center of Excellence at Scitum, leading strategies to protect industrial environments. With over 28 years of international experience in technology, he has collaborated with global companies across multiple sectors. He is CISSP, a member of ISA and a specialist in Industrial Cybersecurity, integrating frameworks such as ISA/IEC 62443, NIST SP800-82 and ISO/IEC 27019. His approach combines technical and business vision, identifying the impact of cybersecurity on operation and competitiveness. He has been a speaker at high-level events in Mexico and Latin America and promotes the adoption of best practices, the development of local capabilities and the expansion of specialized services in IoT/OT Security from Scitum.",
                "image": "/img/speakers/Alessandro_Galvao.png",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
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
                "company": "Industria Nacional de Autopartes",
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
        "title": "ITMujeres - Mujeres en las Fábricas del Futuro: dando forma a industrias inclusivas",
        "title_en": "ITMujeres - Women in the Factories of the Future: Shaping Inclusive Industries",
        "description": "",
        "description_en": "",
        "time": "16:00 hrs",
        "duration": "60 min",
        "speakers": [
            {
                "id": "1",
                "name": "Azul Ogazón - Moderadora",
                "position": "Deputy General Manager ",
                "position_en": "Deputy General Manager",
                "company": "Italian German Exhibition Company Mexico ",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/azul_ogazon.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "4",
                "name": "María De Haas Matamoros",
                "position": "Directora General de Coordinación Tecnica en la Oficina del Secretario ",
                "position_en": "General Director",
                "company": "Secretaría de Economía",
                "bio": "María Araceli De Haas Matamoros es licenciada en Derecho por la Universidad del Valle de México, maestra en Asuntos Internacionales con la especialidad en Política y Seguridad Internacional por la Universidad Anáhuac y Doctorante en Administración Pública por la Universidad Anáhuac. Cuenta con el Programa para Altos Ejecutivos por Harvard Kennedy School de Washington, Estados Unidos, así como los diplomados en: Innovación Tecnológica en el Siglo XXI por el Tecnológico de Monterrey, en Relaciones Internacionales y Diplomacia Mexicana por el Instituto Matías Romero, en Técnica Parlamentaria en el Centro de Investigación y Docencia Económicas y más de 50 cursos, talleres y seminarios. Con respecto a su experiencia profesional en el servicio público, actualmente es Directora General en las Oficinas del Secretario en la Secretaría de Economía. Anteriormente asumió los cargos de: Directora General de Relaciones Institucionales y Programas Sociales en el Grupo Aeroportuario de la Ciudad de México de la Secretaría de Marina; Directora General de Asuntos Especiales en la Secretaría de Relaciones Exteriores; Directora de Área en la Secretaría de Relaciones Exteriores; Secretaria Técnica de una Comisión Bicameral en el Congreso de la Unión, en la LXIV (64) Legislatura y asesora parlamentaria, en el Congreso de la Unión, LXIV (64) Legislatura.",
                "bio_en": "María Araceli De Haas Matamoros holds a degree in Law from the Universidad del Valle de México, a master's degree in International Affairs with a specialization in International Politics and Security from the Universidad Anáhuac, and is a Doctorate candidate in Public Administration from the Universidad Anáhuac. She has completed the Executive Program for Senior Executives at Harvard Kennedy School in Washington, United States, as well as diplomas in: Technological Innovation in the 21st Century from Tecnológico de Monterrey, International Relations and Mexican Diplomacy from Instituto Matías Romero, Parliamentary Technique at the Center for Research and Teaching in Economics, and more than 50 courses, workshops, and seminars. Regarding her professional experience in public service, she is currently the General Director in the Offices of the Secretary at the Ministry of Economy. Previously, she held positions such as: General Director of Institutional Relations and Social Programs at the Mexico City Airport Group of the Ministry of the Navy; General Director of Special Affairs at the Ministry of Foreign Affairs; Area Director at the Ministry of Foreign Affairs; Technical Secretary of a Bicameral Commission in the Congress of the Union during the LXIV (64th) Legislature, and parliamentary advisor in the Congress of the Union, LXIV (64th) Legislature.",
                "image": "/img/speakers/Mariia_De_Haas_Matamoros.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Daniela Rivas",
                "position": "Vicepresidenta",
                "position_en": "Vice President ",
                "company": "Power Products & Power Systems para México y Centroamérica ",
                "bio": "Daniela Rivas de la Llata es Licenciada en Relaciones Internacionales por la Universidad de las Américas, Puebla (UDLAP), con una especialidad en Negociación Internacional. Actualmente, se desempeña como Vicepresidenta de la unidad de negocios de Power Products & Power Systems para México y Centroamérica en Schneider Electric, consolidando así una destacada carrera profesional en el sector eléctrico. Forma parte del Staff Ejecutivo en Schneider Electric, reportando directamente a la Presidencia y Dirección General del país. Con 17 años de experiencia, Daniela ha desarrollado su carrera en áreas de logística, planeación, Project Management, Desarrollo de negocios, y Desarrollo de Canales, trabajando en compañías globales como Bombardier Aerospace y Bombardier Transportation antes de unirse a Schneider Electric. En los 9 años que lleva en Schneider Electric, ha ocupado cargos relevantes que le han permitido estar en contacto con socios comerciales y clientes finales, identificando desafíos y oportunidades para la organización que hoy representa. Anteriormente, se desempeñó como Directora de Administración de Canales y Operaciones de Ventas para México y Centroamérica. La participación de las mujeres en el sector eléctrico es crucial para lograr un desarrollo sostenible y equitativo. A pesar de representar el 48% de la fuerza laboral mundial, las mujeres solo representan el 22% en el sector del petróleo y gas, y el 32% en energías renovables en México, la participación de las mujeres en el sector energético es del 25%, mientras que en el sector eléctrico es del 17% en Schneider Electric, el 49.5% de las personas que laboran son mujeres, gracias a políticas de equidad, diversidad e inclusión que se han implementado durante mucho tiempo como Vicepresidenta de la Unidad de Negocios de Power Products & Power Systems, Daniela tiene la oportunidad de seguir impulsando a las generaciones futuras, promoviendo la inclusión femenina en roles estratégicos y de toma de decisiones dentro de la industria. Su verdadero propósito es construir, influir y compartir todo lo que ha aprendido, teniendo un compromiso sólido con otras mujeres de su generación y las que vienen detrás de ella. Trabajar en empresas cuyo objetivo es mejorar la calidad de vida de las personas y cuidar del medio ambiente inspira su misión en la vida.",
                "bio_en": "Daniela Rivas de la Llata holds a degree in International Relations from Universidad de las Américas, Puebla (UDLAP), with a specialization in International Negotiation. She currently serves as Vice President of the Power Products & Power Systems business unit for Mexico and Central America at Schneider Electric, thus consolidating an outstanding professional career in the electrical sector. She is part of the Executive Staff at Schneider Electric, reporting directly to the Presidency and General Management of the country. With 17 years of experience, Daniela has developed her career in areas of logistics, planning, Project Management, Business Development, and Channel Development, working in global companies such as Bombardier Aerospace and Bombardier Transportation before joining Schneider Electric. In the 9 years she has been at Schneider Electric, she has held relevant positions that have allowed her to be in contact with business partners and end customers, identifying challenges and opportunities for the organization she represents today. Previously, she served as Director of Channel Management and Sales Operations for Mexico and Central America. Women's participation in the electrical sector is crucial to achieving sustainable and equitable development. Despite representing 48% of the global workforce, women only represent 22% in the oil and gas sector, and 32% in renewable energy in Mexico, women's participation in the energy sector is 25%, while in the electrical sector it is 17% at Schneider Electric, 49.5% of the people who work are women, thanks to equity, diversity and inclusion policies that have been implemented for a long time as Vice President of the Power Products & Power Systems Business Unit, Daniela has the opportunity to continue driving future generations, promoting female inclusion in strategic and decision-making roles within the industry. Her true purpose is to build, influence and share everything she has learned, having a solid commitment to other women of her generation and those who come after her. Working in companies whose objective is to improve people's quality of life and care for the environment inspires her mission in life",
                "image": "/img/speakers/Daniela_Rivas.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Valeria Rivera",
                "position": "Directora de Comunicación y Desarrollo de Negocio",
                "position_en": "Director of Communication and Business Development",
                "company": "Siemens México, Centroamérica y el Caribe ",
                "bio": "Valeria cuenta con una amplia trayectoria profesional de más de 11 años, en los que ha desempeñado diversos cargos como Manager de Estrategia y Desarrollo de Negocio y Directora de Estrategia Corporativa. Es Administradora de Empresas, graduada en el Instituto Politécnico Nacional y cuenta con una Maestría en Comunicación Corporativa y Digital por la EAE Business School. Actualmente es Directora de Comunicación Corporativa y Desarrollo de Negocios para Siemens México, Centroamérica y el Caribe.",
                "bio_en": "Valeria has a broad professional background of more than 11 years, during which she has held various positions such as Strategy and Business Development Manager and Director of Corporate Strategy. She is a Business Administrator, graduated from the National Polytechnic Institute, and has a Master's degree in Corporate and Digital Communication from EAE Business School. She is currently the Director of Corporate Communication and Business Development for Siemens Mexico, Central America and the Caribbean.",
                "image": "/img/speakers/valeriarivera.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },  
               
        ]
    },
    {
        "title": "ITMujeres: Más Allá de la Resiliencia: Descubre el Poder de la Antifragilidad para Crecer Sin Límites",
        "title_en": "ITMujeres: Beyond Resilience: Discover the Power of Antifragility to Grow Without Limits",
        "description": "",
        "description_en": "",
        "time": "17:00 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Claudia Guerrero",
                "position": "Líder de Producto de Tecnología de Servicios para Clientes",
                "position_en": "Customer Services Technology Product Leader",
                "company": "GE Aerospace / Society of Women Engineers",
                "bio": "Claudia Guerrero es una profesional con 18 años de experiencia en GE Aerospace, donde ha destacado en diversos roles como líder de equipos, soporte al cliente, integración de sistemas y diseño. Desde que se unió a GE en 2007, ha ocupado posiciones clave, incluyendo Líder de Módulos de Sistemas CFM & CF34, Gerente de Subsección CF34, y Líder de Contratos Técnicos de Servicios. Su trayectoria refleja un compromiso constante con la excelencia y la innovación. Claudia es Embajadora de Society of Women Engineers en México y presidenta de la filial de Querétaro, promoviendo la inclusión y el empoderamiento de mujeres en STEM. Con habilidades de liderazgo, certificación e integración de sistemas, es un modelo a seguir para ingenieras en ascenso. Claudia es madre de dos hijos, apasionada por el triatlón, el senderismo y el mar. Es ingeniera en Mecatrónica por el ITESM y cuenta con estudios en Ingeniería Automotriz en Italia y Alemania, actualmente está cursando su maestría en Ingeniería Aeronáutica.",
                "bio_en": "Claudia Guerrero is a professional with 18 years of experience at GE Aerospace, where she has excelled in various roles such as team leader, customer support, systems integration, and design. Since joining GE in 2007, she has held key positions, including CFM & CF34 Systems Module Leader, CF34 Subsection Manager, and Technical Services Contracts Leader. Her career reflects a consistent commitment to excellence and innovation. ",
                "image": "/img/speakers/Claudia_Guerrero.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "ITMujeres: Abrazando tu Historia: Mujeres Ingenieras que Redefinen el Futuro",
        "title_en": "ITMujeres: Embracing Your Story: Women Engineers Redefining the Future",
        "description": "GE Aerospace / Society of Women Engineers",
        "description_en": "GE Aerospace / Society of Women Engineers",
        "time": "17:30 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Montserrat Ramírez",
                "position": "Gerente Senior de Investigación y Desarrollo",
                "position_en": "Senior Manager of Research and Development",
                "company": "PepsiCo",
                "bio": "Montserrat Ramirez Costa es Gerente Senior de Investigación y Desarrollo en PepsiCo, con más de 20 años de experiencia liderando estrategias de innovación en la industria de alimentos y bebidas. Su formación como Licenciada en Tecnología de Alimentos por la Universidad Iberoamericana y su Maestría en Mercadotecnia por el Tecnológico de Monterrey le han permitido integrar ciencia, negocio y tendencias de consumo en soluciones de alto impacto.",
                "bio_en": "Montserrat Ramirez Costa is a Senior Manager of Research and Development at PepsiCo, with over 20 years of experience leading innovation strategies in the food and beverage industry. Her background as a Bachelor of Food Technology from Universidad Iberoamericana and her Master's degree in Marketing from Tecnológico de Monterrey have enabled her to integrate science, business, and consumer trends into high-impact solutions.",
                "image": "/img/speakers/Montserrat_Ramirez.jpeg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Claudia Guerrero",
                "position": "Líder de Producto de Tecnología de Servicios para Clientes",
                "position_en": "Customer Services Technology Product Leader",
                "company": "GE Aerospace / Society of Women Engineers",
                "bio": "Claudia Guerrero es una profesional con 18 años de experiencia en GE Aerospace, donde ha destacado en diversos roles como líder de equipos, soporte al cliente, integración de sistemas y diseño. Desde que se unió a GE en 2007, ha ocupado posiciones clave, incluyendo Líder de Módulos de Sistemas CFM & CF34, Gerente de Subsección CF34, y Líder de Contratos Técnicos de Servicios. Su trayectoria refleja un compromiso constante con la excelencia y la innovación. Claudia es Embajadora de Society of Women Engineers en México y presidenta de la filial de Querétaro, promoviendo la inclusión y el empoderamiento de mujeres en STEM. Con habilidades de liderazgo, certificación e integración de sistemas, es un modelo a seguir para ingenieras en ascenso. Claudia es madre de dos hijos, apasionada por el triatlón, el senderismo y el mar. Es ingeniera en Mecatrónica por el ITESM y cuenta con estudios en Ingeniería Automotriz en Italia y Alemania, actualmente está cursando su maestría en Ingeniería Aeronáutica.",
                "bio_en": "Claudia Guerrero is a professional with 18 years of experience at GE Aerospace, where she has excelled in various roles such as team leader, customer support, systems integration, and design. Since joining GE in 2007, she has held key positions, including CFM & CF34 Systems Module Leader, CF34 Subsection Manager, and Technical Services Contracts Leader. Her career reflects a consistent commitment to excellence and innovation.",
                "image": "/img/speakers/Claudia_Guerrero.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Daniela Espino",
                "position": "Líder Lean y de Operaciones para Motores Aeroderivados",
                "position_en": "Lean and Operations Leader for Aeroderivative Engines",
                "company": "GE Aerospace",
                "bio": "Ingeniera en Mecatrónica egresada del Tecnológico de Monterrey, cuenta con más de 17 años de experiencia en la industria aeroespacial, desempeñando diferentes roles en empresas globales como GE Aerospace y Safran Aircraft Engines A lo largo de su trayectoria, Daniela ha liderado equipos en diseño mecánico y manufactura, consolidando una visión integral de los procesos de ingeniería y desarrollo de producto. Su experiencia abarca desde el proceso de diseño de componentes hasta la optimización de procesos productivos, siempre con un enfoque en la innovación, la calidad y la mejora continua. Actualmente se desempeña como Líder Lean y de Operaciones para motores aeroderivados en GE Aerospace, donde impulsa el trabajo colaborativo, las actividades oprerativas y la mejora continua entre equipos multidisciplinarios. Además de sus responsabilidades laborales, Daniela es líder del ERG Pride Alliance en GE Aerospace en Querétaro, desde donde promueve iniciativas que fortalecen la visibilidad y los derechos de la comunidad LGBTIQ+ en el ámbito laboral. pasionada por el desarrollo de las mujeres en STEM, Daniela forma parte de la Society of Women Engineers (SWE) Querétaro, donde contribuye a inspirar, acompañar y abrir espacios para que más mujeres se desarrollen en carreras científicas y tecnológicas.",
                "bio_en": "A Mechatronics Engineer graduated from Tecnológico de Monterrey, she has over 17 years of experience in the aerospace industry, holding various roles in global companies such as GE Aerospace and Safran Aircraft Engines. Throughout her career, Daniela has led teams in mechanical design and manufacturing, consolidating a comprehensive vision of engineering processes and product development. Her experience ranges from the component design process to the optimization of production processes, always with a focus on innovation, quality, and continuous improvement. She currently serves as Lean and Operations Leader for aeroderivative engines at GE Aerospace, where she promotes collaborative work, operational activities, and continuous improvement among multidisciplinary teams. In addition to her work responsibilities, Daniela is the leader of the Pride Alliance ERG at GE Aerospace in Querétaro, where she promotes initiatives that strengthen the visibility and rights of the LGBTIQ+ community in the workplace. Passionate about the development of women in STEM, Daniela is part of the Society of Women Engineers (SWE) Querétaro, where she contributes to inspiring, supporting, and creating spaces for more women to develop in scientific and technological careers.",
                "image": "/img/speakers/Daniela_Espino.jpeg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "4",
                "name": "Claudia Rodríguez - Moderadora",
                "position": "Executive Director of Tech Automation Exhibitions MX",
                "position_en": "Executive Director of Tech Automation Exhibitions MX",
                "company": "IGECO",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/Claudia_Rodríguez.jpeg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "ITMujeres: Ecosistemas Inteligentes: Mujeres Liderando la Digitalización y la Innovación en la  Industria",
        "title_en": "ITMujeres: Intelligent Ecosystems: Women Leading Digitalization and Innovation in the Industry",
        "description": "GE Aerospace / Society of Women Engineers",
        "description_en": "GE Aerospace / Society of Women Engineers",
        "time": "18:00 hrs",
        "duration": "60 min",
        "speakers": [
            {
                "id": "1",
                "name": "Fernando Ibarra",
                "position": "Presidente",
                "position_en": "President",
                "company": "Alianza 4 Cero",
                "bio": "Fernando Ibarra cuenta con más de 30 años de experiencia en roles de creciente responsabilidad en las industrias de inyección de plástico, mecanizado y estampado, abarcando sectores automotriz, dispositivos médicos, electrodomésticos y electrónicos. Ha liderado la dirección estratégica de diversas empresas a través de planificación de negocios, análisis de mercado y clientes, y modelado financiero. A lo largo de su carrera, ha ocupado cargos como Director General, Vicepresidente de Operaciones, Vicepresidente de Desarrollo Estratégico y Gerente General. Actualmente es Presidente del Clúster Industria 4.0 de San Luis Potosí, Director de la Cámara de Comercio e Industria Alemana-Mexicana en México y Vicepresidente del comité de PYMES y Cadenas de Valor de CONCAMIN México 4.0. También se desempeña como Asesor Senior de la Secretaría de Desarrollo Económico del Estado de San Luis Potosí y ha sido miembro del consejo directivo del Clúster Automotriz de San Luis Potosí. Cuenta con experiencia internacional en países como Estados Unidos, China, Corea, Canadá, República Dominicana y Colombia. Es Ingeniero en Producción Industrial y posee certificación Master Black Belt en Six Sigma.",
                "bio_en": "Fernando Ibarra has over 30 years of experience in roles of increasing responsibility in the plastic injection, machining, and stamping industries, covering automotive, medical devices, appliances, and electronics sectors. He has led the strategic direction of various companies through business planning, market and customer analysis, and financial modeling. Throughout his career, he has held positions such as General Director, Vice President of Operations, Vice President of Strategic Development, and General Manager. He is currently President of the Industry 4.0 Cluster of San Luis Potosí, Director of the German-Mexican Chamber of Commerce and Industry in Mexico, and Vice President of the SME and Value Chains committee of CONCAMIN Mexico 4.0. He also serves as Senior Advisor to the Secretariat of Economic Development of the State of San Luis Potosí and has been a member of the board of directors of the Automotive Cluster of San Luis Potosí. He has international experience in countries such as the United States, China, Korea, Canada, the Dominican Republic, and Colombia. He is an Industrial Production Engineer and holds a Master Black Belt certification in Six Sigma.",
                "image": "/img/speakers/Fernando_Ibarra.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Leslie Alonso",
                "position": "Head of IT Region Américas",
                "position_en": "Head of IT Region Américas",
                "company": "Draexlmaier Group",
                "bio": "Leslie Alonso Ferro Ing. Industrial por el instituto Nacional de México con MBA en curso del tecnológico de Monterrey, más de 21 años de experiencia en logística, ventas y tecnologías de la información para empresas como Cemex, Nestlé, Valeo, Bosch Americas y Bosch Stuttgart en Alemania. Actualmente ocupa la posición de CIO para la región de Américas para la empresa alemana Draexlmaier de giro automotriz premium. es catedrática universitaria de materias como equipos de alto desempeño, preside además el comité de CIOS para el clúster automotriz Alianza 4.0 en San Luis Potosí y es parte honoraria de la fundación Mariposas de acero para fomentar carreras STEM en las mujeres. Triatleta, trotamundos, amante de la lectura, el vino y el café. Madre de 2 hijos de 23 y 20 años que son su equipo de alto desempeño más exitoso.",
                "bio_en": "Leslie Alonso Ferro Industrial Engineer from the National Institute of Mexico with an MBA in progress from the Monterrey Institute of Technology, more than 21 years of experience in logistics, sales, and information technologies for companies such as Cemex, Nestlé, Valeo, Bosch Americas, and Bosch Stuttgart in Germany. She currently holds the position of CIO for the Americas region for the German premium automotive company Draexlmaier. She is a university professor of subjects such as high-performance teams, also chairs the CIO committee for the Alianza 4.0 automotive cluster in San Luis Potosí and is an honorary member of the Mariposas de acero foundation to promote STEM careers",
                "image": "/img/speakers/leslie_alfonso.png",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Sofía Escoto ",
                "position": "Data Science Specialist ",
                "position_en": "Data Science Specialist ",
                "company": "Bayer de Mexico",
                "bio": "FieldView CX & Product Manager para FieldView México, con 20 años de experiencia aplicando tecnología y análisis espacial para impulsar estrategias innovadoras, sostenibles y rentables. En Bayer lidero un equipo multidisciplinario que transforma la agricultura de precisión en México, promoviendo una cultura digital centrada en el agricultor y en la gestión inteligente de recursos. Bióloga por la Facultad de Ciencias y maestra en Ciencias, ambos títulos emitidos por la UNAM. Me he especializado en el análisis geoespacial aplicado a la gestión y evaluación de riego medioambiental, en programas impartidos por la UNAM, CentroGEO de CONACyT y MIT. Mi trayectoria profesional inició en 2005 como capturista, evolucionando a analista de datos biológicos y de riesgo ambiental en la Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO). En 2013, me incorporé a Monsanto México como Coordinadora de Sistemas de Información Geográfica (SIG), donde desarrollé el sistema que respalda los permisos de liberación de semillas biotecnológicas para el norte de Latinoamérica. He liderado la creación de GEODaaS (Geodata as a Service), un servicio innovador de gestión y análisis de información geoespacial que transforma datos en valor estratégico, facilitando la toma de decisiones para equipos internos y agricultores. Como Especialista en Ciencia de Datos para Bayer, fui responsable de la implementación de la plataforma de agricultura digital FieldView en su etapa precomercial en México (2019-2024), sentando las bases para su adopción y lanzamiento comercial en el 2024 Como CX & Product Manager en FieldView México, diseño la estrategia y evolución del producto digital para responder a las necesidades de la agricultura en el país, impulsando la adopción tecnológica en el sector. Lidero la optimización del customer journey local, alineado con la estrategia global, y coordino la integración con equipos comerciales para ofrecer soluciones innovadoras que generen valor y maximicen la satisfacción del cliente, al tiempo que fortalecemos el posicionamiento y valor de los productos de Bayer.",
                "bio_en": "FieldView CX & Product Manager for FieldView Mexico, with 20 years of experience applying technology and spatial analysis to drive innovative, sustainable, and profitable strategies. At Bayer, I lead a multidisciplinary team that transforms precision agriculture in Mexico, promoting a digital culture focused on the farmer and intelligent resource management. I am a Biologist from the Faculty of Sciences and hold a Master's degree in Sciences, both degrees issued by UNAM. I have specialized in geospatial analysis applied to environmental irrigation management and evaluation, in programs offered by UNAM, CentroGEO of CONACyT, and MIT. My professional career began in 2005 as a data entry clerk, evolving into a biological data and environmental risk analyst at the National Commission for the Knowledge and Use of Biodiversity (CONABIO). In 2013, I joined Monsanto Mexico as Geographic Information Systems (GIS) Coordinator, where I developed the system that supports the release permits for biotech seeds for northern Latin America. I have led the creation of GEODaaS (Geodata as a Service), an innovative service for managing and analyzing geospatial information that transforms data into strategic value, facilitating decision-making for internal teams and farmers. As a Data Science Specialist for Bayer, I was responsible for implementing the FieldView digital agriculture platform during its pre-commercial phase in Mexico (2019-2024), laying the groundwork for its adoption and commercial launch in 2024. As CX & Product Manager at FieldView Mexico, I design the strategy and evolution of the digital product to respond to the needs of agriculture in the country, driving technological adoption in the sector. I lead the optimization of the local customer journey, aligned with the global strategy, and coordinate integration with commercial teams to offer innovative solutions that generate value and maximize customer satisfaction while strengthening Bayer's product positioning and value.",
                "image": "/img/speakers/sofia_escoto.png",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
]

const stage_2_day_3: Program[] = [
    {
        "title": "Cero error humano  -  Redes para centros de datos confiables y seguras",
        "title_en": "Zero human error - Networks for reliable and secure data centers",
        "description": "",
        "description_en": "",
        "img": "",
        "time": "11:10 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Alfredo Ramos  ",
                "position": "Director de Desarrollo de Negocios IP",
                "position_en": "Director of IP Business Development",
                "company": "Nokia",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/Alfredo_Ramos.png",
                "email": "",
                "phone": "",
                "moderador": false
            }, 
            {
                "id": "2",
                "name": "Karla Beltrán  ",
                "position": "Directora de Preventas Redes Ópticas",
                "position_en": "Director of Optical Networks Pre-sales",
                "company": "Nokia",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/Karla_Beltrán_Nokia.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
        ]
    },
    {
        "title": "Telemetría Industrial y la expansión de la superficie de ataque",
        "title_en": "Industrial Telemetry and the Expansion of the Attack Surface",
        "description": "Fortinet",
        "description_en": "Fortinet",
        "img": "",
        "time": "11:45 hrs",
        "duration": "30 min",
        "speakers": [
            {
                "id": "1",
                "name": "Jade Tamayo",
                "position": "Operational Technology Business Development Manager",
                "position_en": "Operational Technology Business Development Manager",
                "company": "Fortinet",
                "bio": "Jade Tamayo es miembro del equipo especializado en Tecnologías Operativas de Fortinet. Egresada de la Universidad Nacional Autonomá de México, con más de 6 años en consultoría en seguridad para Infraestructuras Críticas y ciberseguridad. Ha colaborado con entidades gubernamentales, privadas para diseño de estrategias de ciberseguridad, gestión de proyectos y análisis de riesgo. ",
                "bio_en": "Jade Tamayo is a member of Fortinet's Operational Technologies specialized team. A graduate of the National Autonomous University of Mexico, with more than 6 years in security consulting for Critical Infrastructures and cybersecurity. She has collaborated with government entities, private sector for the design of cybersecurity strategies, project management, and risk analysis.",
                "image": "/img/speakers/Jade_Tamayo- Fortinet.png",
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
                "name": "Javier Arribas Quintana",
                "position": "Ministro Consejero",
                "position_en": "Counselor Minister",
                "company": "Delegación de la Unión Europea en México ",
                "bio": "Javier Arribas Quintana se desempeña en la Delegación de la Unión Europea en México como Ministro Consejero para la sostenibilidad y la transición energética. Javier ha estado trabajando en la Comisión Europea desde 1993. Recientemente, Javier trabajó como experto senior en la Dirección General de Medio Ambiente (DG ENV) donde cubrió temas relacionados con el comercio y la sostenibilidad, las relaciones con América Latina, la cooperación con el Programa de Medio Ambiente de Naciones Unidas (PNUMA) y la Asamblea de las Naciones Unidas para el Medio Ambiente (UNEA). Javier también ha sido miembro del board del Grupo de Trabajo Conjunto sobre Comercio y Medio Ambiente de la OCDE (JWPTE). En puestos anteriores, cubrió una serie de cuestiones relacionadas con el comercio, los servicios, el mercado interior y el medio ambiente. Se desempeñó como Consejero Financiero de la UE en la Delegación de la UE en China (Beijing) de 2007 a 2012, donde cubrió temas de regulación financiera y acceso al mercado, mercados de capital, banca, seguros y contratación pública. Entre el 2008 y 2018 ha sido ponente ocasional en la Universidad de Zhejiang (Hangzhou) y en el Instituto de Empresa Business School (Shanghai). Desde 2021, Javier también da conferencias sobre temas relacionados con la agenda verde europea y el Global Gateway en el Centre International de Formation Européenne (CIFE). Es Licenciado en Ciencias Políticas (por la Universidad Complutense de Madrid) y Derecho (por la UNED) y Máster en Estudios Europeos (por la Universidad Católica de Lovaina, UCL, 1992; y el Colegio de Europa, 1993). Habla español, inglés, francés e italiano.",
                "bio_en": "Javier Arribas Quintana is serving at the Delegation of the European Union in Mexico, as Minister Counsellor for sustainability and the energy transition. Javier has been working at the European Commission since 1993. Most recently, he was a Senior Expert at the Directorate-General for the Environment (DG ENV) where he covered issues related to trade and sustainability, relations with Latino America, cooperation with the UN Environment Programme (UNEP) and the UN Environment Assembly (UNEA). Javier was also EU’s bureau member of the OECD Joint Working Party on Trade and Environment. In previous positions, he covered a number of trade, services, internal market and environment related issues. He served as the EU Financial Counsellor at the EU Delegation in China (Beijing) from 2007 to 2012, where he covered financial regulatory and market access issues, capital markets, banking, insurance and public procurement. From 2008 to 2018 he has been occasional lecturer at Zhejiang University (Hangzhou) and at Instituto de Empresa Business School (Shanghai). Since 2021, Javier has been also lecturing on green agenda and global gateway related issues at the Centre International de Formation Européenne (CIFE). He holds University degrees on Political Sciences (Universidad Complutense, Madrid) and Law (UNED) and Master degrees in European Studies (from the Catholic University of Louvain, UCL, 1992; and the College of Europe, 1993). He is fluent in Spanish, English, French and Italian.",
                "image": "/img/speakers/Javier_Arribas.png",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "3",
                "name": "Ekaterina Fedotova",
                "position": "Directora Comercial",
                "position_en": "Commercial Director",
                "company": "ENHO Energy Home",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/Ekaterina_Fedotova.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "4",
                "name": "Diana Ávalos",
                "position": "Directora General ",
                "position_en": "General Director",
                "company": "Asociación Mexicana de Impulso al Vehículo Eléctrico",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/diana_avalos.jpg",
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
        "title": "Del residuo al recurso: cómo escalar el reciclaje de baterías en América Latina",
        "title_en": "From Waste to Resource: How to Scale Battery Recycling in Latin America",
        "description": "La transición hacia la movilidad eléctrica trae consigo un nuevo reto: el manejo seguro y eficiente del final de vida de las baterías. En este panel, especialistas de la industria, explorarán el estado actual y las soluciones para convertir baterías en insumos valiosos dentro de una economía circular. Discutiremos avances tecnológicos, modelos de recolección y logística específicos para distintos territorios, y los incentivos regulatorios y de mercado necesarios para construir cadenas de valor locales. También abordaremos casos prácticos y oportunidades de inversión para desarrollar capacidad de reciclaje en México y la región",
        "description_en": "The transition to electric mobility brings with it a new challenge: the safe and efficient management of end-of-life batteries. In this panel, industry specialists will explore the current state and solutions to turn batteries into valuable inputs within a circular economy. We will discuss technological advances, collection and logistics models specific to different territories, and the regulatory and market incentives needed to build local value chains. We will also address practical cases and investment opportunities to develop recycling capacity in Mexico and the region.",
        "time": "14:15 hrs",
        "duration": "40 min",
        "speakers": [
            {
                "id": "3",
                "name": "Eduardo Arredondo - Moderador",
                "position": "Associate Founder",
                "position_en": "Associate Founder",
                "company": "Hyvel",
                "bio": "",
                "bio_en": "",
                "image": "/img/speakers/Eduardo_Arredondo.jpg",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "1",
                "name": "Alejandro Oseguera",
                "position": "CEO and Business Development",
                "position_en": "CEO and Business Development",
                "company": "ENHO Energy Home",
                "bio": "Fundador y CEO de ENHO (Energy Home) Líder en infraestructura de carga +150kw/hr para vehículos eléctricos en México Nacido en 1988, es un emprendedor mexicano con alma de inventor. Hijo de arquitectos, creció rodeado de creatividad, visión empresarial y una sensibilidad profunda hacia la arquitectura y diseño. Estudió Diseño Industrial en CDMX en la Universidad Iberoamericana y se especializó en Arquitectura con estudios en el Politécnico de Milán, Italia, e Innovación and Design Thinking en CEDIM, Mty. En 2012 fundó su primera empresa, Grupo Autor, lo que más adelante se convirtió en Obras de Autor, posicionándose como referente nacional en la construcción de agencias automotrices para firmas como Nissan, Peugeot, Chevrolet, Ford, GWM, BYD, Geely y Changan. Su experiencia lo llevó a fundar Energy Home (ENHO), una empresa que nació instalando cargadores en distribuidores automotrices para autos eléctricos, y evolucionó hacia el desarrollo de infraestructura nacional de carga, siendo un puente para iniciar colaboraciones entre grupos automotrices, empresarios y gobierno, con el firme objetivo de contribuir a que México cumpla con los compromisos internacionales en la reducción de emisiones de CO2. con los compromisos internacionales en la reducción de emisiones de CO2. ENHO es hoy una empresa pionera con el único modelo de negocio escalable, circular y centrado en ofrecer una solución definitiva a la infraestructura de carga con un plan de expansión para cubrir las capitales del territorio nacional, los principales corredores carreteros, así como todos los pueblos mágicos. Su principal diferenciador es el diseño e instalación de infraestructura de carga con supercargadores de 150 kWh en adelante, integrados con un software de gestión energética inteligente en colaboración con el líder en tecnología Huawei. Además, ha creado los ENHO Hubs, estaciones de carga que combinan funcionalidad con experiencia: espacios con cafetería, coworking y áreas de exhibición de productos de movilidad eléctrica, diseñados para ofrecer una experiencia de carga segura, cómoda y productiva —una sala de espera con servicios adaptada a las necesidades del mercado mexicano. Alejandro es CEO, fundador y director general, y lidera un equipo sólido con visión global. Lo acompañan Ekaterina Fedotova, directora comercial experta en relaciones México-China, y José Manuel Aldrete Audiffred, director operativo con trayectoria técnica de alto nivel. Se define como un líder inspirador, honesto y transformador. Quienes lo rodean creen en sus ideas porque las hace realidad. Cree en México, en la industria privada, en las nuevas generaciones y en construir un país más sostenible y más justo. Su lema es claro: “Los sueños no solo se piensan, se construyen”.",
                "bio_en": "Founder and CEO of ENHO (Energy Home) Leader in +150kw/hr charging infrastructure for electric vehicles in Mexico Born in 1988, he is a Mexican entrepreneur with the soul of an inventor. Son of architects, he grew up surrounded by creativity, business vision, and a deep sensitivity towards architecture and design. He studied Industrial Design in CDMX at the Universidad Iberoamericana and specialized in Architecture with studies at the Politecnico di Milano, Italy, and Innovation and Design Thinking at CEDIM, Mty. In 2012 he founded his first company, Grupo Autor, which later became Obras de Autor, positioning itself as a national reference in the construction of automotive agencies for firms such as Nissan, Peugeot, Chevrolet, Ford, GWM, BYD, Geely, and Changan. His experience led him to found Energy Home (ENHO), a company that started by installing chargers in automotive dealerships for electric cars and evolved into the development of national charging infrastructure, being a bridge to initiate collaborations between automotive groups, entrepreneurs, and government, with the firm objective of contributing to Mexico meeting international commitments in CO2 emissions reduction. with international commitments in CO2 emissions reduction. ENHO is now a pioneering company with the only scalable, circular business model focused on offering a definitive solution to charging infrastructure with an expansion plan to cover the capitals of the national territory, the main highway corridors, as well as all magical towns. Its main differentiator is the design and installation of charging infrastructure with superchargers from 150 kWh onwards, integrated with intelligent energy management software in collaboration with technology leader Huawei. In addition, it has created ENHO Hubs, charging stations that combine functionality with experience: spaces with coffee shops, coworking areas, and exhibition areas for electric mobility products, designed to offer a safe, comfortable, and productive charging experience —a waiting room with services adapted to the needs of the Mexican market. Alejandro is CEO, founder, and general director, leading a solid team with a global vision. He is accompanied by Ekaterina Fedotova, commercial director expert in Mexico-China relations, and José Manuel Aldrete Audiffred, operations director with high-level technical trajectory. He defines himself as an inspiring, honest, and transformative leader. Those around him believe in his ideas because he makes them a reality. He believes in Mexico, in private industry, in new generations, and in building a more sustainable and fairer country. His motto is clear: “Dreams are not only thought, they are built.”",
                "image": "/img/speakers/alejandrooseguera.png",
                "email": "",
                "phone": "",
                "moderador": false
            },
            {
                "id": "2",
                "name": "Vladimir García",
                "position": "Lead-Acid Battery Materials Expert North America",
                "position_en": "Lead-Acid Battery Materials Expert North America",
                "company": "Clarios",
                "bio": "Dr. Vladimir García Hernández es un reconocido especialista con una sólida trayectoria académica y profesional en el sector automotriz. Es Ingeniero Químico Industrial por la Universidad de las Américas Puebla (UDLA) y Doctor en Ciencia de Materiales por la Universidad Autónoma de Nuevo León (UANL). Su formación se complementa con un diplomado en mandos intermedios por ICAMI, fortaleciendo sus capacidades de liderazgo y gestión estratégica. Con más de dos décadas de experiencia, el Dr. García Hernández ha sido pieza clave en el desarrollo e innovación de materiales para baterías plomo-acido, colaborando estrechamente con universidades, centros de investigación, clientes y proveedores. Su participación en proyectos académicos de licenciatura y posgrado ha contribuido significativamente al avance tecnológico del sector, consolidando puentes entre la academia y la industria en el norte del país. Durante su estancia como expatriado en Glendale, Wisconsin, representando a Clarios, amplió su perspectiva global y red de colaboración, experiencia que hoy aplica como responsable del desarrollo de materiales para la región de Norteamérica. Su liderazgo ha sido fundamental en iniciativas de innovación dentro del Clúster Automotriz de Nuevo León, donde promueve activamente la competitividad y el progreso tecnológico de la industria. Apasionado por la excelencia y la innovación, el Dr. García Hernández es una figura influyente en el ecosistema automotriz de Norteamérica. Fuera del ámbito profesional, encuentra en la cocina un espacio de creatividad y conexión familiar, reflejo de su enfoque integral y humano.",
                "bio_en": "Dr. Vladimir García Hernández is a renowned specialist with a solid academic and professional background in the automotive sector. He is an Industrial Chemical Engineer from the Universidad de las Américas Puebla (UDLA) and holds a PhD in Materials Science from the Universidad Autónoma de Nuevo León (UANL). His education is complemented by a diploma in middle management from ICAMI, strengthening his leadership and strategic management skills. With over two decades of experience, Dr. García Hernández has been a key player in the development and innovation of lead-acid battery materials, working closely with universities, research centers, clients, and suppliers. His involvement in undergraduate and postgraduate academic projects has significantly contributed to the technological advancement of the sector, building bridges between academia and industry in the northern part of the country. During his time as an expatriate in Glendale, Wisconsin, representing Clarios, he expanded his global perspective and collaboration network, experience that he now applies as head of materials development for the North America region. His leadership has been fundamental in innovation initiatives within the Nuevo León Automotive Cluster, where he actively promotes competitiveness and technological progress in the industry. Passionate about excellence and innovation, Dr. García Hernández is an influential figure in the North American automotive ecosystem. Outside of his professional field, he finds creativity and family connection in cooking, reflecting his comprehensive and human approach.",
                "image": "/img/speakers/vladimir_garcia.webp",
                "email": "",
                "phone": "",
                "moderador": false
            },
            
        ]
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
            {
                "id": "5",
                "name": "Felix Steinberg",
                "position": "Project Director",
                "position_en": "Project Director",
                "company": "CATAL1.5T - Latin America Platform",
                "bio": "Felix Steinberg dirige la plataforma CATAL1.5T en América Latina, un acelerador de startups de ClimateTech. En la GIZ impulsa mecanismos financieros innovadores y ecosistemas sostenibles para la innovación climática",
                "bio_en": "Felix Steinberg leads the CATAL1.5T platform in Latin America, a ClimateTech startup accelerator. At GIZ, he promotes innovative financial mechanisms and sustainable ecosystems for climate innovation.",
                "image": "/img/speakers/Felix_Steinberg.webp",
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