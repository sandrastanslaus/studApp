import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";

//pages and services
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {StudentLogin} from "../pages/student-login/student-login";
//import {WelcomePage} from "../pages/welcome-page/welcome-page";
import {TeacherLogin} from "../pages/teacher-login/teacher-login";
import {StudentRegistration} from "../pages/student-registration/student-registration";
import {TeacherRegistration} from "../pages/teacher-registration/teacher-registration";
//import {DataService} from "../services/data";
import { Auth } from "../providers/auth";
import {Main} from "../pages/main/main";
import {Nfc} from "../pages/nfc/nfc";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StudentLogin,
    TeacherLogin,
    StudentRegistration,
    TeacherRegistration,
    Main,
    Nfc
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StudentLogin,
    TeacherLogin,
    StudentRegistration,
    TeacherRegistration,
    Main,
    Nfc

  ],
  providers: [
    Auth,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
