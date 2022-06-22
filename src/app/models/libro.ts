

export class Libro {
  
    public id_usuario: number

    constructor( public id_libro:number, public titulo:string, public tipoLibro: string,
                public autor:string, public precio: number, public foto: string)
                
                {
                    this.id_libro = id_libro
                    this.id_usuario = 0
                    this.titulo = titulo,
                    this.tipoLibro = tipoLibro,
                    this.autor = autor,
                    this.precio = precio,
                    this.foto = foto

                }
}
