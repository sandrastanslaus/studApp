import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { TeacherLogin } from './teacher-login';

@NgModule({
  declarations: [
    TeacherLogin,
  ],
  imports: [
    IonicPageModule.forChild(TeacherLogin),
  ],
  exports: [
    TeacherLogin
  ]
})
export class TeacherLoginModule {}
