import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroServiceService } from 'src/shared/libro-service.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public mylibros:Libro[]
  // public mylibro:Libro;
 
  constructor(public librosService: LibroServiceService) { 
    this.mylibros = librosService.getAll()
  }
  
  // metodos ---------------------------------------
  searchRef(id_Book:string){

    if(id_Book != ''){

      let id = parseInt(id_Book)
      console.log(id);
      
      this.mylibros = [this.librosService.getOne(id)]

      console.log(this.mylibros);
      
      
    } else {
      console.log("Pasa por aqui");
      this.mylibros = this.librosService.getAll()
      console.log(this.mylibros);
    }
  }


  deleteBook(idBook:number):void{
  
    console.log(idBook);
    
    this.librosService.delereLibro(idBook);
    this.mylibros = this.librosService.getAll();

  }


  ngOnInit(): void {
  }

}
