import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import * as olProj from 'ol/proj';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Text from 'ol/style/Text';
import View from 'ol/View';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
  map!: Map;

  constructor() {}

  ngOnInit() {
    this.map = new Map({
      target: 'map-container',
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([23.727539, 37.983810]),
        zoom: 6
      })
    });
  }
}