import nodemailer from 'nodemailer';

export default class EnviadorDeMails {
    
    constructor(config) {
        this.transporter = nodemailer.createTransport(config)
        this.DIRECCION_DESDE = config.auth.user
    }

    async enviar({ destinatario, asunto, contenido, path }) {
        const mailOptions = {
            from: this.DIRECCION_DESDE,
            to: destinatario,
            subject: asunto,
            text: contenido,
            attachments: [
                {
                    filename: 'output.pdf',
                    path: path
                }
            ]
        }
        try {
            await this.transporter.sendMail(mailOptions);
        } catch (error) {
            throw new Error(error);
        } 
    }
}
