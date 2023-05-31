import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'aymen';
  isHidden = false;
  // Attributs => Etat => State

  // Méthodes => Comportement
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeName(newName: string) {
    this.name = newName;
  }
}
