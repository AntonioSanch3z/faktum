import { AfterViewInit, Component } from '@angular/core';
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import ImageWMS from "ol/source/ImageWMS";
import { Image } from "ol/layer";
import Attribution from 'ol/control/Attribution';
import {defaults} from 'ol/control';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  constructor() { }


  ngAfterViewInit() {

    const vlcLayer = new TileLayer({source: new OSM()})
    const vlcLayer1 = new TileLayer({source: new OSM()})

    /* ---------- Views ---------- */
    const Mivista = new View({
      center: fromLonLat([-0.37739,39.46975]),
      zoom: 7,
    });

    const Mivista1 = new View({
      center: fromLonLat([-0.37739,39.46975]),
      zoom: 7,
    });

    /* ---------- Attributions ---------- */
    const attribution0 = new Attribution({
      collapsible: true,
      label: '0',
      tipLabel: 'Sin estilo',
    });

    const attribution1 = new Attribution({
      collapsible: true,
      label: '1',
      tipLabel: 'Día uno',
    });

    const attribution2 = new Attribution({
      collapsible: true,
      label: '2',
      tipLabel: 'Día dos',
    });

    const attribution3 = new Attribution({
      collapsible: true,
      label: '3',
      tipLabel: 'Día tres',
    });

    /* ---------- Layers ---------- */
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

    /* ---------- Maps ---------- */
    new Map({
      target: "map0",
      layers: [vlcLayer, cv0],
      view: Mivista,
      controls: defaults({ attribution: false }).extend([attribution0]),
    });

    const map1 = new Map({
      target: "map1",
      layers: [vlcLayer1, cv1],
      view: Mivista1,
      controls: defaults({ attribution: false }).extend([attribution1]),
    });
    
    /* ---------- Buttons ---------- */
    var boton0 = document.getElementById('0')
    boton0!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv1);
      map1.removeLayer(cv2);
      map1.removeLayer(cv3);
      map1.addLayer(cv0);
      map1.addControl(attribution0);
    })

    var boton1 = document.getElementById('1')
    boton1!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv1);
      map1.removeLayer(cv2);
      map1.removeLayer(cv3);
      map1.addLayer(cv1);
      map1.addControl(attribution1);
    })

    var boton2 = document.getElementById('2')
    boton2!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv2);
      map1.removeLayer(cv1);
      map1.removeLayer(cv3);
      map1.addLayer(cv2);
      map1.addControl(attribution2);      
    })

    var boton3 = document.getElementById('3')
    boton3!.addEventListener("click", function() {
      map1.removeLayer(cv0);
      map1.removeLayer(cv1);
      map1.removeLayer(cv2);
      map1.removeLayer(cv3);
      map1.addLayer(cv3);
      map1.addControl(attribution3);
    })
    
  }
}
