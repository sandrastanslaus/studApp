import { Component } from '@angular/core';
import {NavController, LoadingController, AlertController} from "ionic-angular";
import {TeacherRegistration} from "../teacher-registration/teacher-registration";
//import {Main} from "../main/main";
import {Auth} from "../../providers/auth";
import {Main} from "../main/main";


@Component({
  selector: 'page-teacher-login',
  templateUrl: 'teacher-login.html',
  providers:[Auth]
})
export class TeacherLogin {
loginData = {
  email: '',
  password: ''
}
  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController, private userservice: Auth, private alertCtrl: AlertController) {

  }
login () {

    this.userservice.loginUser(this.loginData.email, this.loginData.password)
      .then( authData => {
        let loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
          content: 'Logging you in'
        })
        loading.dismiss().then(

          () => {
            this.navCtrl.setRoot(Main);
          });
      }, error => {
        let loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
          content: 'Logging you in'
        })
        loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
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
  this.navCtrl.push(TeacherRegistration, { email: this.loginData.email });
}

}
