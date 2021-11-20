import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import * as olProj from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Text from 'ol/style/Text';
import View from 'ol/View';
import { PerRegionDataService } from '../../services/per-region-data/per-region-data.service';
import { Region } from '../../models/region.model';
import { fromLonLat } from 'ol/proj';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import GeoJSON from "ol/format/GeoJSON";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
  map!: Map;
  regions: Region[] = [];
  private readonly destroy$ = new Subject<void>();
  @Output() isPerRegionDataLoading = new EventEmitter();
  @Output() regionDataHandler = new EventEmitter();

  constructor(private perRegionDataService: PerRegionDataService) {}

  ngOnInit() {
    this.perRegionDataService.getPerRegionData().pipe(
      finalize(() => {
        this.isPerRegionDataLoading.emit(false);
        this.initializeMap();
        this.initializePoints();
        this.initializeMapClickEvent();
      }),
      takeUntil(this.destroy$)
    ).subscribe((regions) => (this.regions = [...regions]));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeMap() {
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

  private initializePoints() {
    this.regions.forEach(region => {
      let points:Feature[] = [];
      const pointFeature = new Feature({
        geometry: new Point(fromLonLat([region.longtitude, region.latitude])),
        size: 20,
        name: region.area_gr
      });

      pointFeature.setProperties({ ...region });

      points = [...points, pointFeature];

      const vectorSource = new VectorSource({
        format: new GeoJSON(),
        features: points,
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: this.styleFunction(region.total_cases.toString()),
      });

      this.map.addLayer(vectorLayer);
    })
  }

  private styleFunction(cases: string) {
    return new Style({
      image: new CircleStyle({
        radius: 20,
        fill: new Fill({ color: '#00D1B2' }),
        stroke: new Stroke({ color: 'white', width: 1 }),
      }),
      text: new Text({
        text: cases,
        fill: new Fill({ color: 'white' }),
      }),
    });
  }

  private initializeMapClickEvent() {
    this.map.on('click', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, feature => feature);
      const featureGeoType = feature?.getGeometry();
      if(feature && featureGeoType instanceof Point) {
        console.log(feature.getProperties());
        this.regionDataHandler.emit(feature.getProperties());
      }
    })
  }
}