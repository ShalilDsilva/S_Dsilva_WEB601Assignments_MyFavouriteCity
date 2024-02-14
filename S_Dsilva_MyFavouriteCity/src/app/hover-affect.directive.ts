import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() style: string = '';
  private originalBorderStyle: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.originalBorderStyle = this.el.nativeElement.style.border;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyle();
  }

  private applyStyle() {
    switch (this.style) {
      case 'underline':
        this.el.nativeElement.style.textDecoration = 'underline';
        break;
      case 'bold':
        this.el.nativeElement.style.fontWeight = 'bold';
        break;
      case 'border':
        this.el.nativeElement.style.border = '1px solid pink';
        break;
      default:
        break;
    }
  }

  private removeStyle() {
    switch (this.style) {
      case 'underline':
        this.el.nativeElement.style.textDecoration = 'none';
        break;
      case 'bold':
        this.el.nativeElement.style.fontWeight = 'normal';
        break;
      case 'border':
        this.el.nativeElement.style.border = this.originalBorderStyle;
        break;
      default:
        break;
    }
  }
}
