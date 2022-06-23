import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroServiceService } from 'src/shared/libro-service.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
 
  public mylibro:Libro;

  constructor(private librosService : LibroServiceService) { }


  createBook(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string){
    
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)

    let newBook = new Libro (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto)

    this.librosService.addLibro(newBook);
   
  }

  ngOnInit(): void {
  }

}
