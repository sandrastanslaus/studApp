import { Component } from '@angular/core';
import {HomePage} from "../home/home";
import {NavController} from "ionic-angular";
//import { NFC} from "@ionic-native/nfc";
//import { Platform} from 'ionic-angular'
@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class Nfc {
  constructor(public navCtrl: NavController) {}

    goback(){
      this.navCtrl.setRoot(HomePage);
    }
    // platform.ready().then(() => {



   // });
  //}


}
