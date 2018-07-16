import { Directive, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appClosePopup]'
})
export class ClosePopupDirective {
  constructor(
    private el: ElementRef,
    private router: Router
  ) {}
  @HostListener('click', ['$event'])
  onClick({ target: { id = '' }}) {
    if (id === 'outwrap') {
      this.router.navigate([{ outlets: { popup: null }}]);
    }
  }
}
