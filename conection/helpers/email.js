import nodemailer from 'nodemailer';

// Email de confirmación de cuenta para adopción de mascotas
export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    // Información del email
    const inf = await transport.sendMail({
        from: '"Adopciones Mascotas" <no-reply@adopcionesmascotas.com>',
        to: email,
        subject: "Adopciones Mascotas - Confirma tu cuenta",
        text: "Confirma tu cuenta en Adopciones Mascotas",
        html: `
            <p>Hola ${nombre}, gracias por registrarte en Adopciones Mascotas.</p>
            <p>Tu cuenta casi está lista. Solo necesitas confirmar tu correo haciendo clic en el siguiente enlace:</p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a>

            <p>Si no solicitaste esta cuenta, por favor ignora este mensaje.</p>
        `,
    });
};

// Email para restablecer la contraseña en Adopciones Mascotas
export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Información del email
    const inf = await transport.sendMail({
        from: '"Adopciones Mascotas" <no-reply@adopcionesmascotas.com>',
        to: email,
        subject: "Adopciones Mascotas - Restablece tu contraseña",
        text: "Restablece tu contraseña en Adopciones Mascotas",
        html: `
            <p>Hola ${nombre}, has solicitado restablecer tu contraseña en Adopciones Mascotas.</p>
            <p>Haz clic en el siguiente enlace para generar una nueva contraseña:</p>
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer contraseña</a>

            <p>Si no solicitaste este cambio, por favor ignora este mensaje.</p>
        `,
    });
};
