export class Usuario {

    public id_user: number
    public name: string
    public surename: string
    public mail: string
    public url: string
    public password: string

    constructor(
        id_user: number, name: string, surename: string,
        mail: string, url: string, password: string)
        {
            this.id_user = id_user,
            this.name = name,
            this.surename = surename,
            this.mail = mail,
            this.url = url,
            this.password = password

        }


}
