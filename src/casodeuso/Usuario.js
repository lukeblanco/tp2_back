import  TokenGenerator  from '../modulo/autenticacion/tokenGenerator.js';
import { getUsuariosDao } from '../daos/index.js';

const usuarioDao = getUsuariosDao()
const generadorDeTokens = new TokenGenerator()

export async function logIn(user) {
    const confirmUser = usuarioDao.confirmUser(user)

    if(confirmUser) {
    const token = generadorDeTokens.generateToken({
        id: confirmUser.id
    })
    return {confirmUser , token }
    }
    else{
        res.status(401).json(confirmUser)
    }
}

export async function validateToken(req, res, next) {
    const token = req.headers[ 'access-token' ];
    const validToken = generadorDeTokens.validateToken(token);
    if(!validToken.error){
        next()
    }
    else{
        res.status(401).json(validToken.message);
    }
}


export async function getAll(token) {

    const validToken = generadorDeTokens.validateToken(token);
    if(!validToken.error){
        const allUsers= usuarioDao.getAll();
        return allUsers
    }
    return validToken.message
}

export async function logOut() {
    return generadorDeTokens.deleteToken()
}