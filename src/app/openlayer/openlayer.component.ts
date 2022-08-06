import { Component, OnInit } from '@angular/core';
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import ImageWMS from "ol/source/ImageWMS";
import { Image } from "ol/layer";

@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer.component.html',
  styleUrls: ['./openlayer.component.css']
})
export class OpenlayerComponent implements OnInit {

  public map!: Map;

  constructor() { }

  ngOnInit(): void {
        // this.map = new Map({
    //   layers: [
    //     new TileLayer({
    //       source: new OSM(),
    //     }),
    //   ],
    //   target: 'map',
    //   view: new View({
    //     center: [0, 0],
    //     zoom: 2, maxZoom: 18,
    //   }),
    // });


    const Mivista = new View({
      center: fromLonLat([-0.37739,39.46975]),
      zoom: 8,
    });

    const cv = new Image({
      source: new ImageWMS({
        url: "http://localhost:8080/geoserver/wms",
        params: {
          LAYERS: "cv1",
          FORMAT: "image/png",
        },
      }),
    });

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }), cv
      ],
      // renderer: "canvas",
      view: Mivista,
    });
    Mivista.setZoom(7);
  }

}