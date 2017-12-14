import { Marcador } from './../interfaces/marcador.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class MapasService {
  marcadores: Marcador[] = [];

  constructor() {
    const nuevoMarcador: Marcador = {
      lat: 6.225110,
      lng: -75.573970,
      titulo: 'Trabajo',
      draggable: true
    }

    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }

}
