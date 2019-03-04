import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { InboxComponent } from './components/shared/inbox/inbox.component';
import { SentComponent } from './components/shared/sent/sent.component';
import { DeletedComponent } from './components/shared/deleted/deleted.component';
import { NewComponent } from './components/shared/new/new.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './components/shared/landingpage/landingpage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'landing', component: LandingpageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'Inbox', component: InboxComponent},
  { path: 'Sent', component: SentComponent},
  { path: 'Deleted', component: DeletedComponent},
  { path: 'New', component: NewComponent},
  { path: 'Profile', component: ProfileComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
