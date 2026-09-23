import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class Hover {

  constructor( private el: ElementRef) { 
    // alert('Hover Directive is called');
  }

 @HostListener('mouseenter') onMouseEnter() {
  // alert('Mouse Entered');
       this.highlight('lightblue');  
 }

 @HostListener('mouseleave') onMouseLeave() {
  // alert('Mouse Left');
      this.highlight(null);
 }

 private highlight(color: string | null) {
  this.el.nativeElement.style.backgroundColor = color;
 }

}
