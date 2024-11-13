// sync.js
import sequelize from './conection/config/database.js';
import Usuario from './conection/models/usuario.js';

async function syncDatabase() {
  try {
    await sequelize.sync({ force: false }); // Si pones 'force: true', destruirá las tablas existentes
    console.log('Base de datos sincronizada');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}

syncDatabase();
