import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public miUser:Usuario

  constructor() { 

      this.miUser = new Usuario (1, 'Menchu', 'Martin',
                    'menchu@gmail.com','','12345678')
      console.log(this.miUser);
                    
  }


  // metodos
 updateProfile(name:string, surename:string, mail:string, url:string){
    if(name == ''){
      name = null
    } else{
      this.miUser.name = name;
    }
    if(surename == ''){
      surename = null
    } else {
      this.miUser.surename = surename;
    }

    if(mail == ''){
      mail = null
    } else {
      this.miUser.mail = mail;
    }

    if(url == ''){
      url = null
    } else {
      this.miUser.url = url;
    }
  }


  ngOnInit(): void {
  }

}
