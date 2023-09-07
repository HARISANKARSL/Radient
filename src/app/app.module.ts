import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { CoverComponent } from './shared/cover/cover.component';
import { EmailComponent } from './shared/email/email.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { SocialComponent } from './shared/social/social.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FacilitiesComponent,
    FacultiesComponent,
    FooterComponent,
    NavbarComponent,
    TopnavComponent,
    CoverComponent,
    EmailComponent,
    MenuComponent,
    PhoneComponent,
    SocialComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
