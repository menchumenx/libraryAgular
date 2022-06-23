import { Injectable } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroServiceService {

  private arrLibros: Libro[]

  constructor() {
    this.arrLibros = [
          new Libro(1,'Mi vecino Totoro','Manga','Miyazaki',7,'https://m.media-amazon.com/images/I/81UbyXk3DAL._SL1500_.jpg'),
          new Libro(2,'El castillo Ambulante', 'Manga', 'Miyazaki', 15, 'https://img2.rtve.es/imagenes/portada-castillo-ambulante-corazon-pesada-carga/1593422086154.jpg'),
          new Libro(3,'El viaje de Chihiro', 'Manga', 'Miyazaki', 13, 'https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg'),
          new Libro(4,'Kiki aprendiz de bruja', 'Manga', 'Miyazaki', 6, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/nicky-aprendiz-bruja-portada-1858271.jpg?itok=mBit3DEX'),

          new Libro(5,'Mi vecino Totoro','Manga','Miyazaki',7,'https://m.media-amazon.com/images/I/81UbyXk3DAL._SL1500_.jpg'),
          new Libro(6,'El castillo Ambulante', 'Manga', 'Miyazaki', 15, 'https://img2.rtve.es/imagenes/portada-castillo-ambulante-corazon-pesada-carga/1593422086154.jpg'),
          new Libro(7,'El viaje de Chihiro', 'Manga', 'Miyazaki', 13, 'https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg'),
          new Libro(8,'Kiki aprendiz de bruja', 'Manga', 'Miyazaki', 6, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/nicky-aprendiz-bruja-portada-1858271.jpg?itok=mBit3DEX'),
    ];
   }


  //  METODOS -----------------

  // Mostrar todos 
  getAll():Libro[]{
    return this.arrLibros
  }

  // Mostrar 1 libro
  getOne(id_Libro:number):Libro{
    let respuesta:Libro = null;

    // for (let i = 0; i < this.arrLibros.length; i++){

    //   if(this.arrLibros[i].id_libro == id_Libro){
    //     respuesta = this.arrLibros[i];

    //   } 

    // }

    let filtrado: Libro[] = this.arrLibros.filter((libro) => libro.id_libro == id_Libro)
    if (filtrado.length > 0)
      respuesta = filtrado[0]

    console.log(respuesta);
    return respuesta;

}

//añade un libro
addLibro(newlibro:Libro):void{

  this.arrLibros.push(newlibro);

  console.log('libro añadido');
  console.log(newlibro);

  
}


// edita un libro
editLibro(libro:Libro):Boolean{
  let respuesta:boolean = false;
  console.log(libro.precio);
  

  for(let i= 0; i < this.arrLibros.length; i++){

    if(this.arrLibros[i].id_libro == libro.id_libro){

      this.arrLibros[i].titulo = libro.titulo != "" ? libro.titulo : this.arrLibros[i].titulo;

      if (libro.titulo != "") this.arrLibros[i].tipoLibro = libro.tipoLibro;

      this.arrLibros[i].autor = libro.autor != '' ? libro.autor : this.arrLibros[i].autor

      // para los numero no fuenciona -- buscar solucion
      this.arrLibros[i].precio = libro.precio != NaN ? libro.precio : this.arrLibros[i].precio

      this.arrLibros[i].foto = libro.foto != '' ? libro.foto : this.arrLibros[i].foto
      
      console.log('libro editado');
      respuesta = true;

    } 

  }

  console.log(this.arrLibros);
  return respuesta;
}


// elimina un libro
delereLibro(id_Libro:number):Boolean{

  let respuesta:Boolean;

  if(id_Libro){

    // for(let i = 0; i < this.arrLibros.length; i++){

    //   if(id_Libro == this.arrLibros[i].id_libro){
    //     this.arrLibros.splice(i,1)

    //     console.log('libro borrado');
    //     respuesta = true
        
    //   } 
    // }

    console.log(this.arrLibros);
    this.arrLibros = this.arrLibros.filter( book => book.id_libro != id_Libro);
    console.log(this.arrLibros);
  } else{
    console.log('no ID');
    respuesta= false;
  }

  return respuesta;
}


}














      // if(this.arrLibros[i].titulo != null || this.arrLibros[i].titulo != ''){
      //   this.arrLibros[i].titulo == libro.titulo;
      // }else {
      //   this.arrLibros[i].titulo == this.arrLibros[i].titulo;
      // }

      // if(this.arrLibros[i].tipoLibro != null || this.arrLibros[i].tipoLibro != ''){
      //   this.arrLibros[i].tipoLibro == libro.tipoLibro;
      // }else {
      //   this.arrLibros[i].tipoLibro == this.arrLibros[i].tipoLibro;
      // }

      // if(this.arrLibros[i].autor != null || this.arrLibros[i].autor != ''){
      //   this.arrLibros[i].autor == libro.autor;
      // }else {
      //   this.arrLibros[i].autor == this.arrLibros[i].autor;
      // }

      // if(this.arrLibros[i].precio != null ){
      //   this.arrLibros[i].precio == libro.precio;
      // }else {
      //   this.arrLibros[i].precio == this.arrLibros[i].precio;
      // }

      // if(this.arrLibros[i].foto != null || this.arrLibros[i].foto!= ''){
      //   this.arrLibros[i].foto == libro.foto;
      // }else {
      //   this.arrLibros[i].foto == this.arrLibros[i].foto;
      // }
