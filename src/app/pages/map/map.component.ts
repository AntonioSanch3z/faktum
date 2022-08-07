import { AfterViewInit, Component } from '@angular/core';
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import ImageWMS from "ol/source/ImageWMS";
import { Image } from "ol/layer";
import {Attribution, defaults as defaultControls} from 'ol/control';

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

    
  }
}
