import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { CvInfosComponent } from './cv/cv-infos/cv-infos.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  // /cv
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddCvComponent, canActivate: [AuthGuard] },
  { path: 'cv/:id', component: CvInfosComponent },
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(
    m => m.TodoModule
  )},
  { path: 'login', component: LoginComponent },
  { path: 'color', component: ColorComponent },
  { path: 'word', component: MiniWordComponent },
  { path: ':qqeChose', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
