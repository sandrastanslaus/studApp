import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, Loading} from "ionic-angular";
import {StudentRegistration} from "../student-registration/student-registration";
import {Auth} from "../../providers/auth";
//import {Attendance} from "../attendance/attendance";
import {Nfc} from "../nfc/nfc";
//import {HomePage} from "../home/home";
//import {Nfc} from "../nfc/nfc";



@Component({
  selector: 'page-student-login',
  templateUrl: 'student-login.html',
  providers:[Auth]
 })
export class StudentLogin {
  loginData = {
    email: '',
    password: ''
  }
  loading : Loading;
  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private alert: AlertController  , private userservice: Auth) {
  }
  login () {

    this.userservice.loginUser(this.loginData.email, this.loginData.password)
      .then( authData => {
        let loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
          content: 'Logging you in'
        });
        loading.dismiss().then(

          () => {
            this.navCtrl.setRoot(Nfc);
          });
      }, error => {
        let loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
          content: 'Logging you in'
        })
        loading.dismiss().then( () => {
          let alert = this.alert.create({
            message: error.message,
            buttons: [
              {
                text: 'OK',
                role: 'cancel'
              }
            ]
          });
          alert.present()
        });
      });
  }
  signup() {
    this.navCtrl.push(StudentRegistration, { email: this.loginData.email });
  }
}
