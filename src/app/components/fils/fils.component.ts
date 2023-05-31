import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  @Input() message = '';
  @Output() sendMessageToDad = new EventEmitter<string>();
  // Todo Créer un event

  // Todo 2 Emettre l'event (quand ca dépende de vous)
  // Todo 3 passer la data dans l'event émis
  sendEvent() {
    this.sendMessageToDad.emit('cc papa');
  }
}
