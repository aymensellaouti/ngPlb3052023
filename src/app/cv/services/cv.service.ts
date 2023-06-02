import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
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
      new Cv(3, 'sellaouti', 'skander', '', 'eleve', '123', 4),
      new Cv(4, 'sellaouti', 'skander', '             ', 'eleve', '123', 4),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id ) ?? null;
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
