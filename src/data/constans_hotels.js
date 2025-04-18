const hotels = [
    {
      src: '/img/hoteles/Courtyard_by_Marriott.webp',
      name: 'Courtyard by Marriott',
      address: 'Blvd. Francisco Villa 102 Col. Oriental, 37510 León, Gto.',
      rate_es: 'Tarifa desde $1,589.00 MXN + imp. en ocupación sencilla o doble sin desayuno',
      rate_en: 'Rate from $1,589.00 MXN + tax in single or double occupancy without breakfast.',
      phone_international: 'International: 844-683-8959',
      phone_mexico: 'México: 477 295 9400',
      celular: '',
      email: 'enrique.guzman2@courtyard.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '2 min',
      start: 5
    },
    {
      src: '/img/hoteles/Holiday_Inn_Centro_de_Convenciones.webp',
      name: 'Holiday Inn Centro de Convenciones',
      address: 'Blvd. Adolfo López Mateos 2501, Las Bugambilias, 37270 León, Gto.',
      rate_es: 'Tarifa desde $1,160.00 MXN + imp. en ocupación sencilla o doble sin desayuno.',
      rate_en: 'Rate from $1,160.00 MXN + tax in single or double occupancy without breakfast.',
      phone_international: '',
      phone_mexico: 'México: 477 710 0040',
      celular: ' 477 2947148 Valeria Orozco',
      email: 'ventas.ap@hotelesbjx.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '7 min',
      start: 4
    },
    {
      src: '/img/hoteles/Hampton_Inn_by_Hilton.webp',
      name: 'Hampton Inn by Hilton',
      address: 'Blvd. Adolfo López Mateos 1717, Los Gavilanes, 37270 León, Gto.',
      rate_es: 'Tarifa desde $1,250.00 MXN + imp. en ocupación sencilla o doble con desayuno ',
      rate_en: 'Rate from $1,250.00 MXN + tax in single or double occupancy with breakfast.',
      phone_international: '',
      phone_mexico: 'México: 477 740 3219',
      celular: '',
      email: 'dai.hernandez@hilton.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '12 min',
      start: 5
    },
    {
      src: '/img/hoteles/Plaza_Hotel_Radisson_Poliforum.webp',
      name: 'Plaza Hotel Radisson Poliforum',
      address: 'Blvd. Adolfo López Mateos 2611 Ote, Barrio de Guadalupe, 37280 León, Gto.',
      rate_es: 'Tarifa desde $1,280.00 MXN + imp. en ocupación estándar sin desayuno ',
      rate_en: 'Rate from $1,280.00 MXN + tax in standard occupancy without breakfast',
      phone_international: '',
      phone_mexico: 'México: 477 710 0022',
      celular: '',
      email: '',
      cc:'',
      code: 'HANNOVER',
      time_walk: '13 min',
      start: 5
    },
    {
      src: '/img/hoteles/Holiday_Inn_Plaza_del_Zapato.webp',
      name: 'Holiday Inn Plaza del Zapato',
      address: 'Blvd. Adolfo López Mateos 1308, Los Gavilanes, 37270 León, Gto.',
      rate_es: 'Tarifa desde $1,155.00 MXN + imp. en ocupación sencilla o doble sin desayuno',
      rate_en: 'Rate from $1,155.00 MXN + tax in single or double occupancy without breakfast.',
      phone_international: '',
      phone_mexico: 'México: 477 710 00 03',
      celular: '',
      email: 'ventas.7@hotelesbjx.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '14 min',
      start: 4
    },
    {
      src: '/img/hoteles/Hotel_Sleep_Inn_Antares_Leon.webp',
      name: 'Hotel Sleep Inn Antares León',
      address: 'Blvd. Adolfo López Mateos 2500 Interior 3, Col. San Isidro de Jerez, 37530, León, Gto.',
      rate_es: 'Tarifa desde $ 820.00 MXN + imp en ocupación sencilla con desayuno',
      rate_en: 'Rate from $ 820.00 MXN + tax in single occupancy with breakfast',
      phone_international: '',
      phone_mexico: 'México: 477 101 6900',
      celular: '',
      email: 'gerencia.ventas@sleepinnleonantares.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '31 min',
      start: 4
    },
    {
      src: '/img/hoteles/Hotel_Hotsson_Leon.webp',
      name: 'Hotel Hotsson León',
      address: 'Blvd. Adolfo López Mateos 1102, Los Gavilanes, 37266 León, Gto.',
      rate_es: 'Tarifa desde $2,721.00  MXN Incluye imp. en ocupación estándar sencilla con desayuno',
      rate_en: 'Rate from $2,721.00 MXN Includes tax in standard single occupancy with breakfast.',
      phone_international: '',
      phone_mexico: 'México: 477 719 8004',
      celular: '',
      email: 'fromero@hotsson.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '20 min',
      start: 5
    },
    {
      src: '/img/hoteles/hotsson-smart.jpg',
      name: 'Hotel Hotsson Smart León',
      address: 'Blvd. Adolfo López Mateos 2510, Centro Max, 37530 León, Gto.',
      rate_es: 'Tarifa desde $1,516.00  MXN Incluye imp. en ocupación estándar sencilla sin desayuno',
      rate_en: 'Rate from $1,516.00  MXN Includes tax in standard single occupancy without breakfast.',
      phone_international: '',
      phone_mexico: 'México: 477 719 8010',
      celular: '',
      email: 'bloyola@hotssonsmart.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '32 min',
      start: 4
    },
    {
      src: '/img/hoteles/hotelNoite.webp',
      name: 'Hotel Noite León',
      address: 'Blvd. Adolfo López Mateos 2114, Parque los Manzanares 37510 León, Gto.',
      rate_es: 'Tarifa desde $1,560.00  MXN + imp. en ocupación sencilla o doble con desayuno',
      rate_en: 'Rate from $1,560.00  MXN + tax in standard single or double occupancy with breakfast.',
      phone_international: '',
      phone_mexico: 'México: 52 442 317 0737',
      celular: '',
      email: 'c.acevedo@hnoite.com',
      cc:'',
      code: 'HANNOVER',
      time_walk: '17 min',
      start: 4
    }
  ]
  
export function Start(numberStart) {
    let startIcon = ''
    for (let i = 0; i < numberStart; i++) {
      startIcon += `<svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          `
    }

    return startIcon
  }

  export  {hotels} 