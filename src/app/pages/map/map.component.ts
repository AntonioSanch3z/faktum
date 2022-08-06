import { AfterViewInit, Component } from '@angular/core';
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import ImageWMS from "ol/source/ImageWMS";
import { Image } from "ol/layer";
import LayerGroup from 'ol/layer/Group';
import {Attribution, defaults as defaultControls} from 'ol/control';

//import * as L from 'leaflet';
//import { Map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  public map!: Map;

  constructor() { }


  ngAfterViewInit() {
    /*this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([-0.37739,39.46975]),
        zoom: 8, maxZoom: 18,
      }),
    });*/

    const vlcLayer = new TileLayer({source: new OSM()})
    const vlcLayer1 = new TileLayer({source: new OSM()})

    const Mivista = new View({
      center: fromLonLat([-0.37739,39.46975]),
      zoom: 7,
    });

    const attribution = new Attribution({
      collapsible: false,
    });

    const cv0 = new Image({
      source: new ImageWMS({
        url: "http://localhost:8080/geoserver/wms",
        params: {
          LAYERS: "cv4",
          FORMAT: "image/png",
        },
      }),
    });

    const cv1 = new Image({
      source: new ImageWMS({
        url: "http://localhost:8080/geoserver/wms",
        params: {
          LAYERS: "cv1",
          FORMAT: "image/png",
        },
      }),
    });

    const cv2 = new Image({
      source: new ImageWMS({
        url: "http://localhost:8080/geoserver/wms",
        params: {
          LAYERS: "cv2",
          FORMAT: "image/png",
        },
      }),
    });

    const cv3 = new Image({
      source: new ImageWMS({
        url: "http://localhost:8080/geoserver/wms",
        params: {
          LAYERS: "cv3",
          FORMAT: "image/png",
        },
      }),
    });

    const map0 = new Map({
      target: "map0",
      layers: [vlcLayer, cv0],
      /*controls: ol.control.defaults({
          attributionOptions: {
            target: document.getElementById('myattribution'),
            className: 'myCustomClass'
          }
        }),*/
      view: Mivista,
    });

    const map1 = new Map({
      target: "map1",
      layers: [vlcLayer1, cv1],
      view: Mivista,
    });

    var boton0 = document.getElementById('0')
    boton0!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv1);
      map1.removeLayer(cv2);
      map1.removeLayer(cv3);
      map1.addLayer(cv0);
    })

    var boton1 = document.getElementById('1')
    boton1!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv1);
      map1.removeLayer(cv2);
      map1.removeLayer(cv3);
      map1.addLayer(cv1);
    })

    var boton2 = document.getElementById('2')
    boton2!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv2);
      map1.removeLayer(cv1);
      map1.removeLayer(cv3);
      map1.addLayer(cv2);
    })

    var boton3 = document.getElementById('3')
    boton3!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv1);
      map1.removeLayer(cv2);
      map1.removeLayer(cv3);
      map1.addLayer(cv3);
    })


    /*const map = new Map({
      target: 'map',
      layers: [
        new LayerGroup({
          layers: [vlcLayer1, cv1, cv2, cv3],
        }),
      ],
      view: Mivista,
    });

    function bindInputs(layerid, layer) {
      const visibilityInput = $(layerid + ' input.visible');
      visibilityInput.on('change', function () {
        layer.setVisible(this.checked);
      });
      visibilityInput.prop('checked', layer.getVisible());

      function setup(id, group) {
        group.getLayers().forEach(function (layer, i) {
          const layerid = id + i;
          bindInputs(layerid, layer);
          if (layer instanceof LayerGroup) {
            setup(layerid, layer);
          }
        });
      }
      setup('#layer', map.getLayerGroup());*/


    
    /*var url0 = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png';
    var url1 = 'http://localhost:8080/geoserver/tfg/wms?service=WMS&version=1.1.0&request=GetMap&layers=tfg%3Acv2&bbox=-1.540045738220215%2C37.82905197143555%2C0.702328443527222%2C40.8033561706543&width=579&height=768&srs=EPSG%3A4326&styles=&format=image%2Fpng';
    var url2 = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
    var url3 = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';

      
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
    })*/

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

*/
