import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() bgColor: string;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
   }

   ngOnInit() {
     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.bgColor || 'pink')
   }

   @HostListener('click')
   elementClick() {
     alert('clicked')
   }
}
