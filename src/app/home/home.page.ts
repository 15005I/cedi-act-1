import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Definir la interfaz para la tarea
interface Tarea {
  nombre: string | null;
  fecha: string | null;
  descripcion: string | null;
  completada: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  // Lista de tareas tipada correctamente como Tarea[]
  tareas: Tarea[] = [];

  // Formulario para crear una nueva tarea
  tarea = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    descripcion: new FormControl('')
  });

  // Método para agregar una nueva tarea a la lista
  nTarea() {
    if (this.tarea.valid) {
      // Crear un nuevo objeto tarea
      const nuevaTarea: Tarea = {
        nombre: this.tarea.value.nombre,
        fecha: this.tarea.value.fecha,
        descripcion: this.tarea.value.descripcion,
        completada: false // Valor inicial para completada
      };

      // Agregar la nueva tarea al arreglo tareas
      this.tareas.push(nuevaTarea);

      // Limpiar el formulario después de agregar la tarea
      this.tarea.reset();
    }
  }

  constructor() {}
}
