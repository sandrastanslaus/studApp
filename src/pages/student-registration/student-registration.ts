import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, AlertController, Loading} from 'ionic-angular';
import { Auth } from "../../providers/auth";
//import {Attendance} from "../attendance/attendance";
import {Nfc} from "../nfc/nfc";
@Component({
  selector: 'page-student-registration',
  templateUrl: 'student-registration.html',
  providers:[Auth]
})
export class StudentRegistration {
  signupData = {
    email: '',
    password: '',
    ConPassword: '',
    studentid: ''
  }
  loading: Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public authProvider: Auth,
              public loadingCtrl: LoadingController) {

    this.signupData.email = this.navParams.get('email');
  }

  signup() {
    if (this.signupData.password !== this.signupData.ConPassword) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Your password and your re-entered password does not match.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    this.authProvider.signUpStudent(this.signupData.email, this.signupData.password, this.signupData.studentid)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(Nfc);
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: 'Ok',
                role: 'Cancel'
              }
            ]
          });
          alert.present();
        });
      });
        this.loading = this.loadingCtrl.create();
        this.loading.present();
  }

}
