const mysql = require('mysql2');

// Crea la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',      // El host de tu base de datos, normalmente es 'localhost'
  user: 'root',           // El usuario de tu base de datos
  password: '1234',       // La contraseña de tu base de datos
  database: 'globostudio' // El nombre de tu base de datos
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err.stack);
    return;
  }
  console.log('Conectado a MySQL con ID:', connection.threadId);
});

// Exporta la conexión correctamente
module.exports = connection;


//********************************CONSULTA******************************************* */


// El ID del usuario que deseas consultar
const userId = 1;  // Cambia esto por el id_user que deseas buscar

// Realizar una consulta para obtener un solo usuario por su id_user
connection.query('SELECT id_user, name FROM user WHERE id_user = ?', [userId], (err, results) => {
  if (err) {
    console.error('Error en la consulta: ' + err.stack);
    return;
  }

  if (results.length > 0) {
    console.log('Usuario encontrado:');
    console.log(results[0]); // Muestra el primer (y único) resultado
  } else {
    console.log('No se encontró un usuario con ese ID.');
  }
});