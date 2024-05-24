import mysql from 'mysql2/promise';
import 'dotenv/config';


const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

const hableError = (error) => {

  if (error.sqlState === '23000') {
    return {
      status: false,
      message: 'Ya existe un usuario con este correo electrónico o teléfono por favor intenta con otro.',      
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
        age,
        linkedin,
        company,
        industry,
        position,
        country,
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
      }) {
        const connection = await mysql.createConnection(config)
        try {      
          const [result] = await connection.query(
            'INSERT INTO users (uuid, name, paternSurname, maternSurname, email, phone, typeRegister, genre, age, linkedin, company, industry, position, country, city, address, colonia, postalCode, webPage, phoneCompany, eventKnowledge, productInterest, levelInfluence, wannaBeExhibitor ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [
                uuid,             
                name,
                paternSurname,
                maternSurname,
                email,
                phone,
                typeRegister,
                genre,
                age,
                linkedin,
                company,
                industry,
                position,
                country,
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
          await connection.end() // Close the connection
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
}