import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-to-news-section',
  templateUrl: './go-to-news-section.component.html',
  styleUrls: ['./go-to-news-section.component.scss']
})
export class GoToNewsSectionComponent implements OnInit {
  private elementRef: ElementRef;

  constructor(private elRef: ElementRef) {
    this.elementRef = elRef;
   }

  ngOnInit(): void {
    if(window.matchMedia('(min-width: 769px)').matches) {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }
}