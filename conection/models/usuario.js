// models/Usuario.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcryptjs';

// Definimos el modelo de Usuario con Sequelize
const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true
  },
  confirmado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true,
});

// Hook para encriptar la contraseña antes de guardarla en la base de datos
Usuario.beforeSave(async (usuario, options) => {
  if (usuario.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password, salt);
  }
});

// Método para verificar la contraseña
Usuario.prototype.comprobarPassword = async function(passwordFormulario) {
  return await bcrypt.compare(passwordFormulario, this.password);
};

export default Usuario;


