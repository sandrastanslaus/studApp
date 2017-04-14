import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { Nfc } from './nfc';

@NgModule({
  declarations: [
    Nfc,
  ],
  imports: [
    IonicPageModule.forChild(Nfc),
  ],
  exports: [
    Nfc
  ]
})
export class NfcModule {}
