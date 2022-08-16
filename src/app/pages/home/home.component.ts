import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Map } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    var mapURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var baseUrl0 = '/tfg/wms?';

    const map = new Map('map', { zoomControl: false, doubleClickZoom: false, scrollWheelZoom: false, 
      touchZoom: false, attributionControl: false, dragging: false }).setView([39.36975, -0.37739], 8);
    L.tileLayer(mapURL).addTo(map);
    L.tileLayer.wms(baseUrl0, { layers: 'tfg:cv4', format: 'image/png', transparent: true, opacity: 1 }).addTo(map);
  }

}