import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  today = new Date();
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
    new Cv(
      3,
      'sellaouti',
      'skander',
      '',
      'eleve',
      '123',
      4
    ),
    new Cv(
      4,
      'sellaouti',
      'skander',
      '             ',
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
