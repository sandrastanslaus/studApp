import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {HomePage} from '../pages/home/home';
import {StudentLogin} from "../pages/student-login/student-login";
import {Http} from "@angular/http";
import {NFC} from "@ionic-native/nfc";
//import { TabsPage } from '../pages/tabs/tabs';
//import { Auth } from '../providers/auth';
//import { Main } from '../pages/main/main';
//import {main} from "@angular/compiler-cli/src/main";

@Component({
  templateUrl: 'app.html',
  providers: [Http]
})
export class MyApp {
  rootPage:any = NFC;

 constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
