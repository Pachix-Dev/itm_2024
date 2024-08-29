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
    programEducation,   
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
    areaInterest,
    hour_date_1,   
  }) {
    const connection = await mysql.createConnection(config)
    try {      
      const [result] = await connection.query(
        'INSERT INTO users_students (uuid, name, paternSurname, maternSurname, email, phone, typeRegister, genre, nacionality, institution, level_education, semestres, programEducation, country, municipality, state, city, address, colonia, postalCode, webPage, schoolPhone, eventKnowledge, areaInterest, hour_date_1 ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?)',
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
          programEducation,
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
          areaInterest,
          hour_date_1                         
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

  // create user amof
  static async create_user_amof ({
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
        'INSERT INTO users (uuid, name, paternSurname, maternSurname, email, phone, typeRegister, genre, nacionality, code_invitation, company, industry, position, area, country, municipality, state, city, address, colonia, postalCode, webPage, phoneCompany, eventKnowledge, productInterest, levelInfluence, wannaBeExhibitor, alreadyVisited, user_amof ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)',
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
          "si"   
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

  // get product to calculate total
  static async get_products () {
    const connection = await mysql.createConnection(config)
    try {      
      const [result] = await connection.query(
        'SELECT * FROM oktoberfest_products'
      )
      return {
        status: true,
        result
      }
    }catch (error) {
      console.log(error)
      return {
        status: false,        
      }   
    }
     finally {
      await connection.end() // Close the connection
    }
  }

  // create user oktoberfest
  static async save_order_oktoberfest ({      
      name,      
      email,
      phone,
      company,
      hour,
      comments,
      paypal_id_order, 
      paypal_id_transaction,
      total,
    }) {
      const connection = await mysql.createConnection(config)
      try {      
        const [result] = await connection.query(
          'INSERT INTO oktoberfest_orders ( name, email, phone, company, hour, comments, paypal_id_order, paypal_id_transaction, total ) VALUES (?,?,?,?,?,?,?,?,?)',
          [                                   
            name,      
            email,
            phone,
            company,
            hour,
            comments,
            paypal_id_order, 
            paypal_id_transaction, 
            total,             
          ]
        )
                                
        return {
          status: true,          
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

  // check sales limit no more than 30 by schedule
  static async check_sales_limit (hour) {
    const connection = await mysql.createConnection(config)
    try {      
      const [result] = await connection.query(
        'SELECT * FROM oktoberfest_orders WHERE hour = ?',
        [hour]
      )      
      if (result.length >= 30) {
        return {
          status: false,
          message: 'Lo sentimos, ya no hay lugares disponibles para esta hora.',
        }
      }
      return {
        status: true,
        message: 'Lugares disponibles.',
      }
    }catch (error) {
      console.log(error)
      return {
        status: false,        
      }   
    }
     finally {
      await connection.end() // Close the connection
    }
  }


  // endpoints for scanner
  static async get_info_user (uuid) {
    const connection = await mysql.createConnection(config)
    try {      
      const [result] = await connection.query(
        'SELECT name, paternSurname, maternSurname, company, position,  phone, email FROM users WHERE uuid = ?',
        [uuid]
      )
      if (result.length === 0) {
        return {
          status: false,
          message: 'No se encontró el usuario',
        }
      }
      return {
        status: true,
        result
      }
    }catch (error) {
      console.log(error)
      return {
        status: false,        
      }   
    }
     finally {
      await connection.end() // Close the connection
    }
  }
}