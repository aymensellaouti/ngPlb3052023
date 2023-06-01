import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  color = '';

  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  changeColor(newColor: string): void {
    this.color = newColor;
  }

  reset(colorInput: HTMLInputElement) {
    this.color = colorInput.value;
    colorInput.value = '';
  }
}
