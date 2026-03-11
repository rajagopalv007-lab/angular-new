import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HighlightDirective {

  private el = inject(ElementRef);

  appHighlight = input('');

  constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  onMouseEnter() {
    this.highlight(this.appHighlight());
  }
  onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
