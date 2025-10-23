import mysql from "mysql2/promise";
import "dotenv/config";

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const hableError = (error) => {
  if (error?.sqlState === "23000") {
    return {
      status: false,
      message:
        "Ya existe un usuario registrado con este correo electrónico o teléfono por favor regresa a tu información personal e intenta con otro.",
    };
  }

  return {
    status: false,
    message: "Error al guardar tus datos, por favor intenta de nuevo.",
  };
};

export class RegisterModel {
  static async create_user({
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
    const connection = await mysql.createConnection(config);
    try {
      const [result] = await connection.query(
        "INSERT INTO users (uuid, name, paternSurname, maternSurname, email, phone, typeRegister, genre, nacionality, code_invitation, company, industry, position, area, country, municipality, state, city, address, colonia, postalCode, webPage, phoneCompany, eventKnowledge, productInterest, levelInfluence, wannaBeExhibitor, alreadyVisited ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
      );

      return {
        status: true,
        uuid,
        insertId: result.insertId,
        ...result,
      };
    } catch (error) {
      console.log(error);
      return hableError(error);
    } finally {
      await connection.end();
    }
  }

  static async create_student({
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
    const connection = await mysql.createConnection(config);
    try {
      const [result] = await connection.query(
        "INSERT INTO users_students (uuid, name, paternSurname, maternSurname, email, phone, typeRegister, genre, nacionality, code_invitation, company, industry, position, area, country, municipality, state, city, address, colonia, postalCode, webPage, phoneCompany, eventKnowledge, productInterest, levelInfluence, wannaBeExhibitor, alreadyVisited ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
      );

      if (result.affectedRows === 0) {
        return {
          status: false,
          message: "Error al guardar tus datos, por favor intenta de nuevo.",
        };
      }

      

      return {
        status: true,
        uuid,
        insertId: result.insertId,
        ...result,
      };
    } catch (error) {
      console.log(error);
      return hableError(error);
    } finally {
      await connection.end();
    }
  }

  static async save_order(user_id, paypal_id_order, paypal_id_transaction, id_code = 0) {
    const connection = await mysql.createConnection(config);
    try {
      const [registers] = await connection.query(
        "INSERT INTO users_vip (user_id, paypal_id_order, paypal_id_transaction, id_code) VALUES (?,?,?,?)",
        [user_id, paypal_id_order, paypal_id_transaction, id_code]
      );
      return registers;    
    } catch (error) {
      console.log(error);
      return hableError(error);
    }finally {
      await connection.end(); // Close the connection
    }
  }

  static async get_user_by_id(id) {
    const connection = await mysql.createConnection(config);
    try {
      const [users] = await connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id]
      );
      if (users.length === 0) {
        return {
          status: false,
          error: "No se encontró el usuario",
        };
      }

      return {
        status: true,
        user: users[0],
      };
    } finally {
      await connection.end();
    }
  }

  static async get_postal_code({ cp }) {
    const connection = await mysql.createConnection(config);
    try {
      const [result] = await connection.query(
        "SELECT * FROM postal_code WHERE d_CP = ? OR d_codigo = ?",
        [cp, cp]
      );
      if (result.length === 0) {
        return {
          status: false,
          message:
            "Código postal no encontrado, por favor verifica tu código postal.",
        };
      } else {
        return {
          status: true,
          result,
        };
      }
    } finally {
      await connection.end(); // Close the connection
    }
  }
  

  static async get_postal_code({ cp }) {
    const connection = await mysql.createConnection(config);
    try {
      const [result] = await connection.query(
        "SELECT * FROM postal_code WHERE d_CP = ? OR d_codigo = ?",
        [cp, cp]
      );
      if (result.length === 0) {
        return {
          status: false,
          message:
            "Código postal no encontrado, por favor verifica tu código postal.",
        };
      } else {
        return {
          status: true,
          result,
        };
      }
    } finally {
      await connection.end(); // Close the connection
    }
  }

  //esta funcion es para el directorio digital
  static async verify_user_register(email) {
    const connection = await mysql.createConnection(config);
    try {
      const [users] = await connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

      if (users.length === 0) {
        return {
          status: false,
          error: "No se encontró el usuario",
        };
      }

      return {
        status: true,
        ...users[0],
      };
    } finally {
      await connection.end();
    }
  }

  // check code cortesia
  static async check_code_cortesia(code_cortesia) {
    const connection = await mysql.createConnection(config);
    try {
      // Verifica si el código existe en codigos_cortesia
      const [result] = await connection.query(
        'SELECT * FROM codigos_cortesia WHERE code = ?',
        [code_cortesia]
      );
      
      if (result.length === 0) {
        return {
          status: false,
          message: "Código invalido",
        };
      }

      // Cuenta cuántas veces se ha usado el código en users_vip
      const [countResult] = await connection.query(
        'SELECT COUNT(*) as count FROM users_vip WHERE id_code = ?',
        [result[0].id]
      );

      if (countResult[0].count >= result[0].max_use) {
        return {
          status: false,
          message: "Código invalido",
        };
      }

      return {
        status: true,
        result: result[0],
      };

    } finally {
      await connection.end(); // Close the connection
    }
  }

  
  static async get_all_users_to_send() {
    const emails = [
    'alan.alcala@anahuac.mx',
    'alexander.marcelino@anahuac.mx',
    'alfonso.viveros@anahuac.mx',
    'alfredo.sotodo@anahuac.mx',
    'ixchel.hernandez@anahuac.mx',
    'ana.ruiz07@anahuac.mx',
    'ana.mora10@anahuac.mx',
    'amorales14@anahuac.mx',
    'avelazquez2005@anahuac.mx',
    'andrea.geron@anahuac.mx',
    'angel.gonzalez08@anahuac.mx',
    '00520648@anahuac.mx',
    'tristan.serrato@anahuac.mx',
    'yazid.jimenez@anahuac.mx',
    'aranza.ortega@anahuac.mx',
    'arleth.castillo@anahuac.mx',
    'axel.hernandez19@anahuac.mx',
    'brandon.castro@anahuac.mx',
    'cbravo@anahuac.mx',
    'ivan_palacios@anahuac.mx',
    'carlos_mendez@anahuac.mx',
    'daniela.arellanos@anahuac.mx',
    'danna.castro@anahuac.mx',
    'david.villanueva@anahuac.mx',
    'david.perdomo@anahuac.mx',
    'diego.loman@anahuac.mx',
    'eduardo.sierra@anahuac.mx',
    'emiliano.ochoa@anahuac.mx',
    'emiliano.robles15@anahuac.mx',
    'emiliano.sosa@anahuac.mx',
    'enrique_rivera@anahuac.mx',
    'erick.hernandez05@anahuac.mx',
    'erick.velasco@anahuac.mx',
    'esther.velasco@anahuac.mx',
    'fkuri@anahuac.mx',
    'favio.matus@anahuac.mx',
    'gael.aguilarpa@anahuac.mx',
    'gerson_rivera@anahuac.mx',
    'giovanni.garcia@anahuac.mx',
    'gonzalo_jacome@anahuac.mx',
    '00413700@anahuac.mx',
    'hanna.olvera@anahuac.mx',
    'humberto_garcia@anahuac.mx',
    'ian.salgado@anahuac.mx',
    'iker.perez@anahuac.mx',
    'isaac.medina@anahuac.mx',
    'ivana_ramirez@anahuac.mx',
    'jeyli.rangel@anahuac.mx',
    'jorge.chagoya@anahuac.mx',
    'jcuevas@anahuac.mx',
    'jose_colorado@anahuac.mx',
    'jose.fornaguera@anahuac.mx',
    'juan.hernandez13@anahuac.mx',
    'julissa.lopezmo@anahuac.mx',
    'karim.pacheco07@anahuac.mx',
    'sofia.morales@anahuac.mx',
    'kate.naranjo@anahuac.mx',
    'luis.laraag@anahuac.mx',
    'Imarin@anahuac.mx',
    'luis.alvarez2005@anahuac.mx',
    'luna.solis01@anahuac.mx',
    'luz_maldonado@anahuac.mx',
    'lyelcia.garcia@anahuac.mx',
    'manuel.galicia@anahuac.mx',
    'maria.gonzalez21@anahuac.mx',
    'morozco23@anahuac.mx',
    'mariana.bonilla16@anahuac.mx',
    'mauro.pereira@anahuac.mx',
    'miguel.hernandez22@anahuac.mx',
    'nvelez@anahuac.mx',
    'orlandoni.galvan@anahuac.mx',
    'perla_romero@anahuac.mx',
    'rodrigo.ramirez@anahuac.mx',
    'rodrigo.rodriguez06@anahuac.mx',
    'rodrigo.talavera06@anahuac.mx',
    'rosalba.cordova@anahuac.mx',
    'santiago.escamilla@anahuac.mx',
    'santiago.olvera@anahuac.mx',
    'sergio_galvan@anahuac.mx',
    'sergio.rojas@anahuac.mx',
    'daniela_melo@anahuac.mx',
    'dayenu.vargas@anahuac.mx',
    'stella_hernandez@anahuac.mx',
    'valentino.rojas@anahuac.mx',
    'xvalerio@anahuac.mx',
    'antonio_aviles@anahuac.mx',
    'leonardo.callesba@anahuac.mx',
    'Isabel.gendronle@anahuac.mx',
    'hector.fanghanel35@anahuac.mx',
    'juan.olivaca@anahuac.mx'
    ];

      try {
      // Crear placeholders para la consulta
      const placeholders = emails.map(() => '?').join(',');
      
      const [rows] = await connection.query(`
        SELECT 
          id AS user_id,
          users.*
        FROM users
        WHERE email IN (${placeholders})
      `, emails);
      
      return rows;
    } finally {
      await connection.end();
    }
  }
}
