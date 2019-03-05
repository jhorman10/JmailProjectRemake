import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/shared/landingpage/landingpage.component';
import { HomeComponent } from './components/shared/home/home.component';
import { HOME_ROUTES } from './components/shared/home/home.routes';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'landing', component: LandingpageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'Profile', component: ProfileComponent },
  {
    path: 'home', 
    component: HomeComponent,
    children: HOME_ROUTES
  },
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: '**', pathMatch: 'full', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
