import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private elementRef!: ElementRef;
  private menu!: HTMLElement;
  private navbarBurger!: HTMLElement;

  constructor(private elRef: ElementRef) { 
    this.elementRef = elRef;
  }

  ngOnInit(): void {
    this.menu = this.elementRef.nativeElement.querySelector(".navbar-burger");
    this.navbarBurger = this.elementRef.nativeElement.querySelector(".navbar-menu");
  }

  closeMenu() {
    if(this.menu.classList.contains('is-active')) {
      this.menu.classList.remove('is-active');
      this.navbarBurger.classList.remove('is-active');
    }
  }

  handleMenu() {
    this.menu.classList.toggle('is-active');
    this.navbarBurger.classList.toggle('is-active');
  }
}