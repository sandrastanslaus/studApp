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
 public mydata: any;
 data: any;
  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private alert: AlertController, public authservice: Auth, public app: App) {
    this.data = {};
    this.data.username="";
    this.data.password="";
  }

  onGoToStudentRegistration(){
      this.navCtrl.push(StudentRegistration)
    }

  onStudentLogin(){
    let username = this.data.username;
    let password = this.data.password;
    let data = {username, password};
    this.authservice.postLogin(data)
      .subscribe(data => {
        this.mydata = data;
        this.app.getRootNav().setRoot(Nfc);

      }, Error => {
        console.log(Error.json().error);
      }
      );
  //   const loader = this.loadingCtrl.create({
  //     content: 'Logging In'
  //   });
  //   loader.present();
    }



}
