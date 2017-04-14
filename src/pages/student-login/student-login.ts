import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlertController, LoadingController, NavController} from "ionic-angular";
import {StudentRegistration} from "../student-registration/student-registration";
//import {Auth} from "../../providers/auth";


@Component({
  selector: 'page-student-login',
  templateUrl: 'student-login.html',
})
export class StudentLogin {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private alert: AlertController) {}

  onGoToStudentRegistration(){
      this.navCtrl.push(StudentRegistration)
    }

  onStudentLogin(form: NgForm){
    console.log(form.value);
    const loader = this.loadingCtrl.create({
      content: 'Logging In'
    });
    loader.present();
    // this.auth.login(form, "/login.php")
    //   .subscribe(
    //     (data) => {
    //       form.reset();
    //       loader.dismiss();
    //
    //       console.log('Success');
    //       console.log(data);
    //     },
    //     error => {
    //       loader.dismiss();
    //       const alert = this.alert.create({
    //         title: "Sorry, Login Failed",
    //         message: error.json().error,
    //         buttons: ['OK']
    //       });
    //       alert.present();
    //     }
    //   );

  }



}
