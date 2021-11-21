import { Component, ElementRef, OnInit } from '@angular/core';
import { Region } from '../../models/region.model';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  isPerRegionDataLoading = true;
  regionData = {} as Region;
  private elementRef!: ElementRef;
  private regionDataEl!: HTMLDivElement;

  constructor(private elRef: ElementRef) {
    this.elementRef = elRef;
   }

  ngOnInit(): void {
    this.regionDataEl = this.elementRef.nativeElement.querySelector(".region-data");
  }

  get regionDataLength() {
    return Object.keys(this.regionData).length;
  }

  goToRegionData() {
    this.regionDataEl.style.display = 'block';
    this.regionDataEl.scrollIntoView({ behavior: "smooth" });
  }
}
