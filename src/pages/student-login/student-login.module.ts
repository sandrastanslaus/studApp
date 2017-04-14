import { NgModule } from '@angular/core';
import {  IonicPageModule } from 'ionic-angular';
import { StudentLogin } from './student-login';

@NgModule({
  declarations: [
    StudentLogin,
  ],
  imports: [
    IonicPageModule.forChild(StudentLogin),
  ],
  exports: [
    StudentLogin
  ]
})
export class StudentLoginModule {}
