import mysql from 'mysql2/promise';
import 'dotenv/config';


const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

const hableError = (error) => {

  if (error?.sqlState === '23000') {
    return {
      status: false,
      message: 'Ya existe un usuario registrado con este correo electrónico o teléfono por favor regresa a tu información personal e intenta con otro.',
    }
  }


  return {
    status: false,
    message: 'Error al guardar tus datos, por favor intenta de nuevo.',
  }
}

export class RegisterModel {

  static async create_user ({
      uuid,             
      name,
      paternSurname,
      maternSurname,
      email,
      phone,
      typeRegister,
      genre,
      nacionality,
      code_invitation,

      company,
      industry,
      position,
      area,
      country,
      municipality,
      state,
      city,
      address,
      colonia,
      postalCode,
      webPage,
      phoneCompany,

      eventKnowledge,
      productInterest,
      levelInfluence,
      wannaBeExhibitor,
      alreadyVisited,
    }) {
      const connection = await mysql.createConnection(config)
      try {      
        const [result] = await connection.query(
          'INSERT INTO users (uuid, name, paternSurname, maternSurname, email, phone, typeRegister, genre, nacionality, code_invitation, company, industry, position, area, country, municipality, state, city, address, colonia, postalCode, webPage, phoneCompany, eventKnowledge, productInterest, levelInfluence, wannaBeExhibitor, alreadyVisited ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
          [
            uuid,             
            name,
            paternSurname,
            maternSurname,
            email,
            phone,
            typeRegister,
            genre,
            nacionality,
            code_invitation,
    
            company,
            industry,
            position,
            area,
            country,
            municipality,
            state,
            city,
            address,
            colonia,
            postalCode,
            webPage,
            phoneCompany,
    
            eventKnowledge,
            productInterest,
            levelInfluence,
            wannaBeExhibitor,
            alreadyVisited,   
          ]
        )
                                
        return {
          status: true,
          insertId: result.insertId,
          ...result,
        }
      }catch (error) {
        console.log(error)
        return hableError(error)          
      }
      finally {
        await connection.end()
      }
  }

  static async save_order (user_id, paypal_id_order,paypal_id_transaction, total) {
    const connection = await mysql.createConnection(config)
    try {      
      const [registers] = await connection.query(
        'INSERT INTO users_vip (user_id, paypal_id_order, paypal_id_transaction, total) VALUES (?,?,?,?)',
        [
          user_id,
          paypal_id_order,
          paypal_id_transaction,              
          total
        ]
      )
      return registers
    } finally {
      await connection.end() // Close the connection
    }
  }

  static async get_postal_code ({cp}) {
    const connection = await mysql.createConnection(config)
    try {      
      const [result] = await connection.query(
        'SELECT * FROM postal_code WHERE d_CP = ? OR d_codigo = ?',
        [
          cp,
          cp
        ]
      )
      if (result.length === 0) {
        return {
          status: false,
          message: 'Código postal no encontrado, por favor verifica tu código postal.',    
        }
      }else{
        return {
          status: true,
          result
        }                
      }
    } finally {
      await connection.end() // Close the connection
    }
  }
  
	static async get_user_by_email(email, requireNonVip = false) {
		const connection = await mysql.createConnection(config)
		try {
			const [users] = await connection.query(
				'SELECT * FROM users WHERE email = ?',
				[email]
			)
			if (users.length === 0) {
				return {
          status: false,
				  error: 'No se encontró el usuario',
				}
			}
      if (requireNonVip) {
        const [vipUsers] = await connection.query(
          'SELECT * FROM users_vip WHERE user_id = ?',
          [users[0].id]
        )
        if (vipUsers.length > 0) {
          return {
            status: false,
            error: 'Ya eres usuario VIP',
          }
        }
      }
			return {
        status: true,
				user: users[0],
			}
		} finally {
			await connection.end()
		}
	}

  // Create student register
  static async create_user_futuristic ({
    uuid,             
    name,
    paternSurname,
    maternSurname,
    email,
    phone,
    typeRegister,
    genre,
    nacionality,    

    institution,
    level_education,
    semestres,    
    country,
    municipality,
    state,
    city,
    address,
    colonia,
    postalCode,
    webPage,
    schoolPhone,

    eventKnowledge,
    hour_date_1,
    hour_date_2,
    hour_date_3,   
  }) {
    const connection = await mysql.createConnection(config)
    try {      
      const [result] = await connection.query(
        'INSERT INTO users_students (uuid, name, paternSurname, maternSurname, email, phone, typeRegister, genre, nacionality, institution, level_education, semestres, country, municipality, state, city, address, colonia, postalCode, webPage, schoolPhone, eventKnowledge, hour_date_1, hour_date_2, hour_date_3 ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)',
        [
          uuid,             
          name,
          paternSurname,
          maternSurname,
          email,
          phone,
          typeRegister,
          genre,
          nacionality,          
  
          institution,
          level_education,
          semestres, 
          country,
          municipality,
          state,
          city,
          address,
          colonia,
          postalCode,
          webPage,
          schoolPhone,
  
          eventKnowledge,
          hour_date_1,
          hour_date_2,  
          hour_date_3,                  
        ]
      )
                              
      return {
        status: true,
        insertId: result.insertId,
        ...result,
      }
    }catch (error) {
      console.log(error)
      return hableError(error)          
    }
    finally {
      await connection.end()
    }
  }

}