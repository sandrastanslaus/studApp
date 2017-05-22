import { Component } from '@angular/core';

import {NavController} from "ionic-angular";
import * as firebase from 'firebase';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class Nfc {
  constructor(public navCtrl: NavController) {}


  logoutUser(): firebase.Promise<void> {
    this.navCtrl.setRoot(HomePage);
    return firebase.auth().signOut();
  }
}
