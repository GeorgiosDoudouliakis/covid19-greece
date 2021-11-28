import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGoToNews]'
})
export class GoToNewsDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') goToNews() {
    document.querySelector('.latest-covid-news')?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window: scroll') onScroll() {
    if(window.scrollY > 750) {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'flex');
    }
  }
}
