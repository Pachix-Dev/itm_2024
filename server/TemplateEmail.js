
const email_template = async ({ name, paternSurname, maternSurname}) => {          
    
    return (
   `<table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px; width: 100%; margin: 0px auto; background-color: #000000;color: #ffffff;">
   <tbody>
     <tr style="width: 100%;">
       <td>
         <table align="center" width="70%" role="presentation" cellspacing="0" cellpadding="0" border="0">
           <tbody>
             <tr>
               <td>
                 <div style="text-align: center">                   
                     <img src="https://industrialtransformation.mx/headerITMmail.webp" alt="logo" style="width: 500px;">                 
                     <table width="100%">
                       <tbody>
                         <tr>   
                           <td width="100%">
                             <h2 style="margin:0;font-weight:bold;text-transform: uppercase;">
                               BIENVENIDO, ${name} ${paternSurname} ${maternSurname} TU PRE REGISTRO FUE REALIZADO CON ÉXITO.
                             </h2>
                             <p>GRACIAS POR FORMAR PARTE DE <span style="color:#E94568;font-weight:bold;">ITM 2024</span>,</p>                    
                           </td>                          
                         <tr>
                       <tbody>                     
                     </table>
                     <div  style="text-align: justify;">
                        Industrial Transformation Mexico es un evento interesante e inclusivo en el que los actores clave y los grupos objetivo se reúnen para crear redes y oportunidades de intercambio de conocimientos para el éxito empresarial.                     
                     </div>                     
                     <p style="font-weight:bold;font-size:20px">TE AÑADIR AL CALENDARIO</p>
                     <div style="text-align:center;padding:20px">
                       <a style="background-color: #0E2242;color:white;padding:20px;border-radius:20px;margin:20px;" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240608T180000Z%2F20240610T000000Z&details=Evento%20dise%C3%B1ado%20para%20el%20disfrute%20y%20el%20aprendizaje%20alrededor%20de%20esta%20bebida%20universal.%20Re%C3%BAne%20a%20expertos%2C%20amantes%20del%20vino%20y%20vi%C3%B1edos%20en%20un%20ambiente%20festivo%20y%20educativo.%20Es%20la%20plataforma%20perfecta%20para%20mostrar%20tus%20vinos%20y%20conectarte%20con%20nuevos%20consumidores%20y%20profesionales%20del%20sector.%0A&location=Distrito%20Le%C3%B3n%20MX%2C%20instalaciones%20de%20la%20feria&text=VIVE%20EL%20VINO"
                       target="_blank">                        
                         Google
                       </a>
                       <a style="background-color: #0E2242;color:white;padding:20px;border-radius:20px;" href="https://outlook.live.com/calendar/0/action/compose?allday=false&body=Evento%20dise%C3%B1ado%20para%20el%20disfrute%20y%20el%20aprendizaje%20alrededor%20de%20esta%20bebida%20universal.%20Re%C3%BAne%20a%20expertos%2C%20amantes%20del%20vino%20y%20vi%C3%B1edos%20en%20un%20ambiente%20festivo%20y%20educativo.%20Es%20la%20plataforma%20perfecta%20para%20mostrar%20tus%20vinos%20y%20conectarte%20con%20nuevos%20consumidores%20y%20profesionales%20del%20sector.%0A&enddt=2024-06-09T18%3A00%3A00&location=Distrito%20Le%C3%B3n%20MX%2C%20instalaciones%20de%20la%20feria&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-06-08T12%3A00%3A00&subject=VIVE%20EL%20VINO"
                       target="_blank">                       
                         Outlook
                       </a>
                     </div>                   
                     <div style="margin-top:10px;text-align:center;padding:20px;">
                       <a style="background-color: #0E2242;color:white;padding:20px;border-radius:20px;margin:20px;" href="https://calendar.yahoo.com/?desc=Evento%2520dise%25C3%25B1ado%2520para%2520el%2520disfrute%2520y%2520el%2520aprendizaje%2520alrededor%2520de%2520esta%2520bebida%2520universal.%2520Re%25C3%25BAne%2520a%2520expertos%252C%2520amantes%2520del%2520vino%2520y%2520vi%25C3%25B1edos%2520en%2520un%2520ambiente%2520festivo%2520y%2520educativo.%2520Es%2520la%2520plataforma%2520perfecta%2520para%2520mostrar%2520tus%2520vinos%2520y%2520conectarte%2520con%2520nuevos%2520consumidores%2520y%2520profesionales%2520del%2520sector.%250A&dur=false&et=20240610T000000Z&in_loc=Distrito+Le%C3%B3n+MX%2C+instalaciones+de+la+feria&st=20240608T180000Z&title=VIVE%2520EL%2520VINO&v=60"
                       target="_blank">
                         
                       <i>Y!</i> Yahoo!
                       </a>
                       
                       <a style="background-color: #0E2242;color:white;padding:20px;border-radius:20px;" href="https://viveelvino.igeco.mx/descarga.ics"
                       donwload>                        
                         iCalendar
                       </a>
                     </div>                    
                   </div>
                 </div>
               </td>              
             </tr>
           </tbody>
         </table>
         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="padding: 30px 30px 40px;">
           <tbody>
             <tr>
               <td>                
                 <p style="font-size: 15px; line-height: 21px; margin: 16px 0px;font-weight: bold;">INSTRUCCIONES PARA TU VISITA:
                 </p>
                 <ul>
                 <li>
                    IMPORTANTE: Es indispensable llevar tu pre-registro impreso o en formato digital para agilizar tu acceso al evento.
                  </li>
                  <li>
                    Recuerda llevar tu credencial oficial de empresa o negocio para verificar tus datos.
                  </li>
                  <li>
                    Tu acceso es único e intransferible y debe estar visible durante toda tu visita.
                  </li>
                  <li>
                    En caso de perder tu gafete, no habrá reimpresiones en el piso expositor. Por lo cual, se tendrá que generar una compra de boleto para su ingreso con un costo de $300 MXN.
                  </li>                  
                 </ul>
                 <hr style="width: 100%; border-top: 1px solid rgb(214, 216, 219); border-right: none rgb(214, 216, 219); border-bottom: none rgb(214, 216, 219); border-left: none rgb(214, 216, 219); border-image: initial; margin: 30px 0px;">
                 <p style="font-size: 12px; line-height: 15px; margin: 4px 0px; color: rgb(145, 153, 161);text-align:center;">
                   <strong>IGECO</strong>, Blvrd Francisco Villa 102-piso 14, Oriental, 37510 León, Guanajuato México.
                 </p>                              
               </td>
             </tr>
           </tbody>
         </table>
       </td>
     </tr>
   </tbody>
  </table>`
    )
  }
  
  export {email_template}
  