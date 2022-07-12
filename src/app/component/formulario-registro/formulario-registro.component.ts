import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  public user : Usuario

  constructor() { }

  ngOnInit(): void {
  }

}
