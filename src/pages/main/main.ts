import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Attendance} from "../attendance/attendance";
import {HomePage} from "../home/home";
import {TeacherLogin} from "../teacher-login/teacher-login";
//import {HomePage} from "../home/home";




@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {
  public event = {
  }
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {}


  goback(){
    this.navCtrl.setRoot(HomePage);
  }

showConfirm(){
    let confirm = this.alertCtrl.create({
  title: 'Confirmation',
  message:'Please have you confirmed the date? Also have you confirmed the student?',
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
}
