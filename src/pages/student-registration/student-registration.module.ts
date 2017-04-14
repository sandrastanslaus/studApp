import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { StudentRegistration } from './student-registration';

@NgModule({
  declarations: [
    StudentRegistration,
  ],
  imports: [
    IonicPageModule.forChild(StudentRegistration),
  ],
  exports: [
    StudentRegistration
  ]
})
export class StudentRegistrationModule {}
