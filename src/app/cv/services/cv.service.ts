import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  private selectCvSubject$ = new Subject<Cv>();
  selectCv$ = this.selectCvSubject$.asObservable();
  constructor(private http: HttpClient) {
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
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }
  deleteCv(id: number): Observable<any> {
    return this.http.delete<any>(API.cv + id);
  }
  addCv(cv: Cv): Observable<Cv> {

    return this.http.post<Cv>(API.cv, cv);
  }
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv) {
    this.selectCvSubject$.next(cv);
  }
}
