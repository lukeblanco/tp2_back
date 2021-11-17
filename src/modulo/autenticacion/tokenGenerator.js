import {ACCESS_TOKEN_SECRET, EXPIRATION_TIME} from '../../../config.js'

//const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'

export default class TokenGenerator {
    constructor() {
        this.lastToken;
        this.actualToken;
        this.blackList = []
    }
    generateToken(username,res) {
        const user = { name: username }
        this.actualToken = this.generateAccessToken(user)
        this.lastToken = this.actualToken;
        return { accessToken: this.actualToken }
    }

    generateAccessToken(user) {
        return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "10m" })
    }

    validateToken(token) {
        let error = { error: false, message:"token valido" };

        if (token == null  ||  token == undefined ) {
            error = {error:"true", message:"token no valido(null, undefined)"}
            return error
        }

        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
            if (err){
                if(token === this.lastToken){
                      error = { error:true, message: "token expirado" };
                }
                else{ error = { error: true, message: "token no valido(incorrecto)" };}
             return error;
            } 
        })
        if(this.blackList.find(t => t === token)){
            console.log("entro")
           return  { error:true, message: "sesion desloguiada, token invalido" };
        }

        if(this.actualToken != token){
            error = { error: true, message: "token no valido(incorrecto)" };
        }
        return error;
    }

    deleteToken() {
        this.lastToken = undefined
        console.log(this.actualToken,"actual token")
        this.blackList.push(this.actualToken)
        return({message:"usuario desloguiado y token borrado"})
      }

}