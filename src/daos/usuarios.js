export default class UsuariosDao {
    constructor() {
        this.usuarios = [
            {
                userName:"demian1",
                id: 1,
                password:"1"
            },
            {
                userName:"demian2",
                id: 2,
                password:"2"
            }
        ]
    }
    confirmUser(user) {
        const validUser = this.usuarios.find(u => u.userName == user.userName)
        if(validUser.password === user.password){
            return {userName:validUser.userName, id:validUser.id}
        }
        else {
            return false
        }
    }

    findAll() {
        return this.usuarios
    }

    getAll() {
        this.usuarios.forEach(function(u){ delete u.password });
        return this.usuarios
    }
}