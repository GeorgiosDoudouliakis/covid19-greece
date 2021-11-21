import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appArrowVisibility]'
})
export class ArrowVisibilityDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window: scroll') onScroll() {
    if(window.scrollY > 150) {
      this.renderer.addClass(this.elRef.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
    }
  }
}
