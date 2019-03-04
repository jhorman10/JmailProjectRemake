import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { InboxComponent } from './components/shared/inbox/inbox.component';
import { DeletedComponent } from './components/shared/deleted/deleted.component';
import { SentComponent } from './components/shared/sent/sent.component';
import { NewComponent } from './components/shared/new/new.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NavbartopComponent } from './components/shared/navbartop/navbartop.component';
import { LandingpageComponent } from './components/shared/landingpage/landingpage.component';
import { SearchComponent } from './components/shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    InboxComponent,
    DeletedComponent,
    SentComponent,
    NewComponent,
    HomeComponent,
    NavbartopComponent,
    LandingpageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
