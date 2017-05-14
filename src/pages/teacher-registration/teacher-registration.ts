import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-teacher-registration',
  templateUrl: 'teacher-registration.html',
  providers:[AngularFireAuth]
})
export class TeacherRegistration {
  signupData = {
    email: '',
    password: '',
    course: '',
    ConPassword: ''
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, ) {
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
    //firebase Signup code

  }

  // signUpTeacher() {
  //   this.userservice.signUpTeach(this.emailField, this.passwordField, this.name, this.selectCourse).
  //     then(authData => {
  //     //success
  //     console.log();
  //     this.navCtrl.setRoot(Main)
  //   }, error => {
  //       alert("Error Logging in "+ error.message);
  //    })
  //     let loader = this.loading.create({
  //       dismissOnPageChange: true,
  //     });
  //     loader.present();
  //
  // }
  //   // onAddTeacher(form: NgForm){
  //   //   console.log(form);
  //   // }
  // }
}

