import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  tareas: { nombre: string | null; fecha: string | null; descripcion: string | null; completada: boolean }[] = [];

  tarea = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    descripcion: new FormControl('')
  });

  nTarea() {
    if (this.tarea.valid) {
      const nuevaTarea = {
        nombre: this.tarea.value.nombre!,
        fecha: this.tarea.value.fecha!,
        descripcion: this.tarea.value.descripcion!,
        completada: false
      };
      this.tareas.push(nuevaTarea);

      this.tarea.reset();
    }
  }

  constructor() {}
}
