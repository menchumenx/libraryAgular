export class Usuario {

    constructor(public id_user: number, public name: string, 
                public surename: string, public mail: string, 
                public url: string, public password: string)
        {
            this.id_user = id_user,
            this.name = name,
            this.surename = surename,
            this.mail = mail,
            this.url = url,
            this.password = password

        }


}
