import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Nfc} from "../nfc/nfc";



@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {
  public event = {
  }
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }
showConfirm(){
    let confirm = this.alertCtrl.create({
  title: 'Confirmation',
  message:'Please have you confirmed the date? Also have you confirmed the student?',
  buttons: [
    {
      text: 'Yes, I have confirmed',
      handler: () => {
        this.navCtrl.push(Nfc);
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
