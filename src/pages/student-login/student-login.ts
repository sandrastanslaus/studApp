import { Component } from '@angular/core';
//import {NgForm} from "@angular/forms";
import {AlertController, LoadingController, NavController} from "ionic-angular";
import {StudentRegistration} from "../student-registration/student-registration";
import {Auth} from "../../providers/auth";
import {Http, HttpModule } from '@angular/http';
import {Nfc} from "../nfc/nfc";
//import {HTTP} from "@ionic-native/http";
//import {Auth} from "../../providers/auth";


@Component({
  selector: 'page-student-login',
  templateUrl: 'student-login.html',
  providers: [ HttpModule ]
 })
export class StudentLogin {
  usercreds ={
    name: '',
    password: ''
  };
  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private alert: AlertController, public authservice: Auth, public http: Http) {}

  onGoToStudentRegistration(){
      this.navCtrl.push(StudentRegistration)
    }

  onStudentLogin(user){
    //console.log(form.value);
    this.authservice.authenticate(user).then(data => {
      if(data) {
        this.navCtrl.setRoot(Nfc);
      }
    })
    const loader = this.loadingCtrl.create({
      content: 'Logging In'
    });
    loader.present();


  }



}
