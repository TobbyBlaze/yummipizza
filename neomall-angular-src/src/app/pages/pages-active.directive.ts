import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '.nav-link'
})
export class PagesActiveDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('click')
  onClick(){
    this.renderer.addClass(this.elRef.nativeElement, 'active');
  }

}
