import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { Nfc } from './nfc';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    Nfc,
  ],
  imports: [

    BrowserModule,
    IonicModule,
    IonicPageModule.forChild(Nfc),
  ],
  exports: [
    Nfc
  ]
})
export class NfcModule {}
