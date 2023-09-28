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
import { VideoPopupComponent } from './shared/video-popup/video-popup.component';
import {HttpClientModule} from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#080808",
  "bgsOpacity": 0.2,
  "bgsPosition": "bottom-right",
  "bgsSize": 30,
  "bgsType": "ball-spin-clockwise",
  "blur": 200,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#ff3030",
  "fgsPosition": "center-center",
  "fgsSize": 80,
  "fgsType": "three-bounce",
  "gap": 20,
  "logoPosition": "center-center",
  "logoSize": 200,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(24,24,24,0.99)",
  "pbColor":  "#ff3030",
  "pbDirection": "ltr",
  "pbThickness": 2,
  "hasProgressBar": true,
  "text": "loading.....",
  "textColor": "#999e99",
  "textPosition": "center-center",
  "maxTime": -100,
  "minTime": 1000,

};
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
    CoursesComponent,
    VideoPopupComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
     NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule, // import this module for showing loader automatically when navigating between app routes
    NgxUiLoaderHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
