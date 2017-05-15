import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {HomePage} from "../pages/home/home";
//import {TeacherRegistration} from "../pages/teacher-registration/teacher-registration";
//import {StudentRegistration} from "../pages/student-registration/student-registration";
//import {StudentLogin} from "../pages/student-login/student-login";
import {HomePage} from "../pages/home/home";


@Component({
  templateUrl: 'app.html',

})
export class MyApp {
  rootPage:any = HomePage;


 constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
