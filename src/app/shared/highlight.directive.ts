import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fpHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() fpHighlight: string;
  @Input() fpHighlightBgColor: string;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
   }

   ngOnInit() {
     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.fpHighlightBgColor || 'pink')
   }

   @HostListener('click')
   elementClick() {
     console.log('clicked')
   }

   @HostListener('mouseover')
   highlightElement() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.fpHighlight || 'lightblue')
   }

   @HostListener('mouseout')
   removeHighlightElement() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.fpHighlightBgColor || 'pink')
   }
}
