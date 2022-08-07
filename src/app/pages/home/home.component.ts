import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Map } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //private map!: L.Map;

  constructor() { }

  ngOnInit(): void {
    var url0 = '/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv4&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng';
    var url1= '/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv1&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng';
    var url2 = '/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv2&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng';
    var url3 = '/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv3&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng';

    const map = new Map('map').setView([39.46, -0.37], 8);
    L.tileLayer(url0, { maxZoom: 25, attribution: 'Sin estilo', tileSize: 579 }).addTo(map);
  }

  /*mapURLBase:string = '/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv4&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng';
  mapURL:string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.46975, -0.37739],
      zoom: 8
    });

     const tiles = L.tileLayer(this.mapURL, {
       maxZoom: 25,
       minZoom: 3,
       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
     });
     tiles.addTo(this.map);

    const base = L.tileLayer(this.mapURLBase, {
      crossOrigin:true,
      tileSize: 579
    });
    base.addTo(this.map);
  }*/

}


/* 
    const map0 = new Map('map0').setView([39.46, -0.37], 13);
    L.tileLayer(url0, { maxZoom: 20, attribution: 'Sin estilo' }).addTo(map0);

    const map1 = new Map('map1').setView([39.46, -0.37], 13);
    var map1Layer = L.tileLayer(url1, { maxZoom: 20, attribution: 'Día uno' }).addTo(map1);

    var boton0 = document.getElementById('0')
    boton0!.addEventListener("click", function() {
      map1.removeLayer(map1Layer);
      map1Layer = L.tileLayer(url0, { maxZoom: 20, attribution: 'Sin estilo' }).addTo(map1);
    })

    var boton1 = document.getElementById('1')
    boton1!.addEventListener("click", function() {
      map1.removeLayer(map1Layer);
      map1Layer = L.tileLayer(url1, { maxZoom: 20, attribution: 'Día uno' }).addTo(map1);
    })

    var boton2 = document.getElementById('2')
    boton2!.addEventListener("click", function() {
      map1.removeLayer(map1Layer);
      map1Layer = L.tileLayer(url2, { maxZoom: 20, attribution: 'Día dos' }).addTo(map1);
    })

    var boton3 = document.getElementById('3')
    boton3!.addEventListener("click", function() {
      map1.removeLayer(map1Layer);
      map1Layer = L.tileLayer(url3, { maxZoom: 20, attribution: 'Día tres' }).addTo(map1);
    })
*/