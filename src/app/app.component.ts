import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'plbForma31052023';
  tab: number[] = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 20)
  );

}
