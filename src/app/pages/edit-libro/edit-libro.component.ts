import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroServiceService } from 'src/shared/libro-service.service';

@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.component.html',
  styleUrls: ['./edit-libro.component.css']
})
export class EditLibroComponent implements OnInit {

  public mylibro:Libro;

  constructor(public librosService : LibroServiceService) { }


  updateBook(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string){
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)
    console.log(precioNum);
    

    let newBook = new Libro (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto);

    console.log('controler');
    console.log(newBook);

    this.librosService.editLibro(newBook);
  }

  ngOnInit(): void {
  }

}
