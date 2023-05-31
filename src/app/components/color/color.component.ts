import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  defaultColor = 'red';
  color = this.defaultColor;

  changeColor(newColor: string): void {
    this.color = newColor;
  }

  reset(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }
}
