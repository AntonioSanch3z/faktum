import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    /*document.querySelector('#1')?.addEventListener('click', () => {
      document.querySelector
    })*/
    function changeMapId(clicked_id: number) {
      var getId = document.getElementsByClassName('changeMap')[0].id;
      getId = 'map' + Number('clicked_id');
      console.log(getId)
      }
      
    const map0 = new Map('map0').setView([39.46, -0.37], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: 'Sin estilo',
    }).addTo(map0);

    const map1 = new Map('map1').setView([39.46, -0.37], 13);
    tileLayer(
      'http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv1&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers',
      {
        maxZoom: 20,
        attribution: 'Dia uno',
      }
    ).addTo(map1);

    const map2 = new Map('map2').setView([39.46, -0.37], 13);
    tileLayer(
      'http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv2&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers',
      {
        maxZoom: 20,
        attribution: 'Dia dos',
      }
    ).addTo(map2);

    const map3 = new Map('map3').setView([39.46, -0.37], 13);
    tileLayer(
      'http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv3&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers',
      {
        maxZoom: 20,
        attribution: 'Dia tres',
      }
    ).addTo(map3);

  }
}

/*
prueba
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

cv4/5 (sin estilo)
http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv4&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers

cv1 (diaUno)
http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv1&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers

cv2 (diaDos)
http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv2&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers

cv3 (diaTres)
http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv3&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers


El bloqueo de lectura entre orígenes (CORB) ha bloqueado la respuesta entre orígenes 
http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv4&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers
 con tipo MIME text/html. Consulte https://www.chromestatus.com/feature/5629709824032768 
 para obtener más detalles.
*/
