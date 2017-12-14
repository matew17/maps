import { Marcador } from './interfaces/marcador.interface';
import { MapasService } from 'app/services/mapas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat = 6.225110;
  lng = -75.573970;
  zoom = 16;
  draggable = '1';
  marcadorSel: any = null;

  constructor(public ms: MapasService) {
    this.ms.cargarMarcadores();
  }

  clickMapa(event) {
    console.log(event);
    const marcador: Marcador = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      titulo: 'sin titulo',
      draggable: true
    }

    this.ms.insertarMarcador(marcador);
  }

  clickMarcador(marcador: Marcador, i: number) {
    console.log(marcador, i);
    this.marcadorSel = marcador;
    if (this.marcadorSel.draggable) {
      this.draggable = '1';
    } else {
      this.draggable = '0';
    }
  }

  dragEndMarcador(marcador: Marcador, event) {
    console.log(marcador, event);
    marcador.lat = event.coords.lat;
    marcador.lng = event.coords.lng;
    this.ms.guardarMarcadores();
  }

  borrarMarcador(i: number) {
    this.ms.borrarMarcador(i);
    this.marcadorSel = null;
  }

  cambiarDraggable() {
    console.log(this.draggable);
    if (this.draggable === '1') {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }
  }

}
