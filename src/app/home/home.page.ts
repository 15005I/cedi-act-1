import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage{
  usuario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    edad: new FormControl('', Validators.required),
    aceptar: new FormControl('', Validators.requiredTrue)
  });
  guardarDatos(){
    console.log(this.usuario.value);
  }
  
  constructor(){}
}