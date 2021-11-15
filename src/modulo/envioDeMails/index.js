import EnviadorDeMails from './EnviadorDeMails.js'

import { emailConfig } from './config.js'

const edm = new EnviadorDeMails(emailConfig)

export function getEnviadorDeMails() {
    return edm
}