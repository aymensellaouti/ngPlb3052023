import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe((cv) => (this.cv = cv));
  }
  embaucher() {
    if(this.cv) {
      if (!this.embaucheService.embaucher(this.cv)) {
        this.toastr.warning(`Le cv de ${this.cv.name} est déjà sélectionné`);
      } else {
        this.toastr.success(`Le cv de ${this.cv.name} est sélectionné avec succès`);
      }
    }
  }
}
