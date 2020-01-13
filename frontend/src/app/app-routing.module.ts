import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowResultComponent } from './pages/show-result/show-result.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'home-page',
    component : HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component : RegisterComponent
  },
  {
    path: 'show-result',
    component: ShowResultComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component : NotFoundComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
