import { Component } from '@angular/core';
import {Ndef, NFC} from "@ionic-native/nfc";
import { Platform} from 'ionic-angular'
@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
})
export class Nfc {
  constructor(private nfc: NFC, private ndef: Ndef, private platform: Platform) {
    platform.ready().then(() => {

      // let message = this.ndef.textRecord('hello world');
      //  this.nfc.share([message]).then(onSuccess).catch(error);
    });
  }


}
