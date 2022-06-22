import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public mylibros:Libro[]
 

  constructor() { 

    this.mylibros = [
            new Libro(1,'Mi vecino Totoro','Manga','Miyazaki',7,'https://m.media-amazon.com/images/I/81UbyXk3DAL._SL1500_.jpg'),
            new Libro(2,'El castillo Ambulante', 'Manga', 'Miyazaki', 15, 'https://img2.rtve.es/imagenes/portada-castillo-ambulante-corazon-pesada-carga/1593422086154.jpg'),
            new Libro(3,'El viaje de Chihiro', 'Manga', 'Miyazaki', 13, 'https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg'),
            new Libro(4,'Kiki aprendiz de bruja', 'Manga', 'Miyazaki', 6, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/nicky-aprendiz-bruja-portada-1858271.jpg?itok=mBit3DEX'),

            new Libro(1,'Mi vecino Totoro','Manga','Miyazaki',7,'https://m.media-amazon.com/images/I/81UbyXk3DAL._SL1500_.jpg'),
            new Libro(2,'El castillo Ambulante', 'Manga', 'Miyazaki', 15, 'https://img2.rtve.es/imagenes/portada-castillo-ambulante-corazon-pesada-carga/1593422086154.jpg'),
            new Libro(3,'El viaje de Chihiro', 'Manga', 'Miyazaki', 13, 'https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg'),
            new Libro(4,'Kiki aprendiz de bruja', 'Manga', 'Miyazaki', 6, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/nicky-aprendiz-bruja-portada-1858271.jpg?itok=mBit3DEX'),
          ]
    // this.mylibros = []

  }
  
  // metodos ---------------------------------------
    
  updateBook(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string){
    
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)

    let newBook = new Libro (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto)

    this.mylibros.push(newBook);
  }




  ngOnInit(): void {
  }

}
