// config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('globostudio', 'root', '1234', {
  host: 'localhost',  // o el host de tu base de datos
  dialect: 'mysql',
});

export default sequelize;











