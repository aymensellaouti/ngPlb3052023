import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'red';
  // Ce que je veux gérer comme propriété
  @HostBinding('style.backgroundColor')
  color = this.out;
  constructor() {}
  ngOnInit(): void {
    this.color = this.out;
  }
  // Quel event je gére et comme je réagis par rapport à ces events
  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.color = this.out;
  }
}
