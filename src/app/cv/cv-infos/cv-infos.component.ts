import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv-infos',
  templateUrl: './cv-infos.component.html',
  styleUrls: ['./cv-infos.component.css']
})
export class CvInfosComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot);
  }

}
