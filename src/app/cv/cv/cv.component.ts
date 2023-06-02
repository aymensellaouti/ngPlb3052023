import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/say-hello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  // selectedCv: Cv | null = null;
  today = new Date();
  nbClick = 0;
  cvs: Cv[] = [];
  constructor(
    private logger: LoggerService,
    private sayHello: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.logger.log('cc je suis le cvComponent');
    this.sayHello.hello();
    this.toastr.info('Bienvenu dans notre cvTech');
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs
      },
      error: (e) => {
        this.toastr.error(
          `Erreur De chargement, les données sont fake, veuillez contacter l'admin`
        );
        this.cvs = this.cvService.getFakeCvs();
      }
    });
    this.cvService.selectCv$
    .pipe(distinctUntilChanged())
    .subscribe(
      () => this.nbClick++
    )
  }
  // selectCv(cv: Cv): void {
  //   this.selectedCv = cv;
  //   console.log('cvComponent : ', cv);
  //   this.todoService.logTodos();
  // }
}
