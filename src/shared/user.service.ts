import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})


export class UserService {

  private urlRegistro = 'http://localhost:3000/registro';
  private urlLogin = 'http://localhost:3000/login';
  public logueado : boolean
  public usuario : Usuario

  constructor(private http: HttpClient) 
  {
    this.logueado = false;
  }


  // METODOS ---------------------------------------------

  // register(usuario:Usuario). Llamará al endpoint POST "/registro"
  register(usuario:Usuario){

    console.log(usuario);
    return this.http.post(this.urlLogin, usuario);
    
  }

  // login(usuario:Usuario). Lamará al endpoint POST "/login”
  login(usuario:Usuario){

    console.log(usuario);
    return this.http.post(this.urlRegistro, usuario)
    
  }
}
