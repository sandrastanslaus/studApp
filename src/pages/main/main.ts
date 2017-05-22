import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Attendance} from "../attendance/attendance";
import * as firebase from 'firebase';
import {HomePage} from "../home/home";
//import {HomePage} from "../home/home";
//import {TeacherLogin} from "../teacher-login/teacher-login";
//import {HomePage} from "../home/home";





@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {
  public event = {}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Please have you confirmed the date? Also have you confirmed the student?',
      buttons: [
        {
          text: 'Yes, I have confirmed',
          handler: () => {
            this.navCtrl.push(Attendance);
            console.log('Yes clicked');
          }
        },
        {
          text: 'No, I haven`t',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  logoutUser(): firebase.Promise<void> {
      this.navCtrl.setRoot(HomePage);
    return firebase.auth().signOut();
    //this.navCtrl.setRoot(HomePage);
  }
}
