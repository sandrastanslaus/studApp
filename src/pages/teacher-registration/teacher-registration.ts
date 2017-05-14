import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, AlertController, Loading} from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import {Auth} from "../../providers/auth";
import {Main} from "../main/main";



@Component({
  selector: 'page-teacher-registration',
  templateUrl: 'teacher-registration.html',
  providers:[Auth]
})
export class TeacherRegistration {
  signupData = {
    email: '',
    password: '',
    course: '',
    ConPassword: '',
    name: ''
  }

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public authProvider: Auth,
              public loadingCtrl: LoadingController) {

    this.signupData.email = this.navParams.get('email');
  }

  signup(){
    if(this.signupData.password !== this.signupData.ConPassword) {
        let  alert = this.alertCtrl.create({
          title: 'Error',
          message: 'Your password and your re-entered password does not match.',
          buttons: ['OK']
        });
        alert.present();
        return;
    }
    //firebase Signup
    this.authProvider.signUpUser(this.signupData.email, this.signupData.password, this.signupData.course, this.signupData.name)
      .then(() => {
          this.loading.dismiss().then( () => {
            this.navCtrl.setRoot(Main);
          });
      }, (error) => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{
              text: 'Ok',
              role: 'Cancel'
            }]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
  }
}

