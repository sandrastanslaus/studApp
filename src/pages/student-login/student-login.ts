import { Component } from '@angular/core';
//import {NgForm} from "@angular/forms";
import {AlertController, LoadingController, NavController, App} from "ionic-angular";
import {StudentRegistration} from "../student-registration/student-registration";
import {Auth} from "../../providers/auth";
import {HomePage} from "../home/home";
import {Nfc} from "../nfc/nfc";



@Component({
  selector: 'page-student-login',
  templateUrl: 'student-login.html',
 // providers: [ HttpModule ]
 })
export class StudentLogin {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private alert: AlertController  , public app: App) {

  }

  onGoToStudentRegistration(){
      this.navCtrl.push(StudentRegistration)
    }
}
