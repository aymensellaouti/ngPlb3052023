import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv.model';
import { MES_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-cv-infos',
  templateUrl: './cv-infos.component.html',
  styleUrls: ['./cv-infos.component.css'],
})
export class CvInfosComponent {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {
    console.log(activatedRoute.snapshot);
    // Je récupére mon id
    const id = this.activatedRoute.snapshot.params['id'];
    // Je chercher le cv de cet id la
    // Si le cv existe je l'affiche
    this.cv = this.cvService.getCvById(+id);
    // Sinon je redirige vers la page de la liste des cvs
    if (!this.cv) {
      this.router.navigate([MES_ROUTES.cv]);
    }
  }
  onDelete() {
    if(this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([MES_ROUTES.cv]);
    }
  }
}
