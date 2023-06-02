import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvInfosComponent } from './cv-infos.component';

describe('CvInfosComponent', () => {
  let component: CvInfosComponent;
  let fixture: ComponentFixture<CvInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
