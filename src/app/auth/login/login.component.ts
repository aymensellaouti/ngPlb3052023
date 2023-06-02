import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MES_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.id);
        this.toastr.success('Bienvenu chez vous');
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Veuille vérifier vos credentials');
      }
    })
  }
}
