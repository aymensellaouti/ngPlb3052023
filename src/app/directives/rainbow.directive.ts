import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input [appRainbow]',
})
export class RainbowDirective {
  // Quels propriétés je vais gérer
  @HostBinding('style.color')
  color = 'black';
  @HostBinding('style.borderColor')
  bc = 'black';
  constructor() {}
  // Quels events je vais gérer et quoi faire
  @HostListener('keyup')
  OnKeyUp() {
    this.color = this.bc = this.getRandomColor();
  }
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
}
