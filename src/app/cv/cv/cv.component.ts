import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'rotating_card_profile2.png',
      'teacher',
      '123',
      40
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      'rotating_card_profile3.png',
      'eleve',
      '123',
      4
    ),
  ];
  selectCv(cv: Cv): void {
    this.selectedCv = cv;
    console.log("cvComponent : ", cv);
  }
}
