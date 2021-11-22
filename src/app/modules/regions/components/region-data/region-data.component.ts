import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Region } from '../../models/region.model';
import { NgxCaptureService } from 'ngx-capture';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-region-data',
  templateUrl: './region-data.component.html',
  styleUrls: ['./region-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionDataComponent implements OnInit, OnDestroy {
  private elementRef!: ElementRef;
  private destroy$ = new Subject();
  @Input() regionData = {} as Region;
  @Output() regionDataHandler = new EventEmitter();

  constructor(private elRef: ElementRef, private captureService: NgxCaptureService) {
    this.elementRef = elRef;
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  takeScreenshot() {
    const element = document.createElement('a');
    this.elementRef.nativeElement.querySelectorAll(".action-btn").forEach((btn: SVGElement) => btn.style.display = 'none');

    this.captureService.getImage(this.elementRef.nativeElement, true)
    .pipe(takeUntil(this.destroy$))
    .subscribe(img => {
      element.href = img;
      element.setAttribute("download", "region_data.png");
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      this.elementRef.nativeElement.querySelectorAll(".action-btn").forEach((btn: SVGElement) => btn.style.display = 'initial');
    })
  }
}
