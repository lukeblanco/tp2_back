import emailer from './EnviadorDeMails.js'
import {emailConfig} from './config.js'

const edm = new emailer(emailConfig)

const mensaje = {
    destinatario: 'djc3fmppdil3wuc2@ethereal.email',
    asunto: 'test adjunto',
    contenido: 'test',
    path: ''

}

try {
    await edm.enviar(mensaje)
    console.log('mail enviado')
} catch (error) {
    console.log(error)
}

