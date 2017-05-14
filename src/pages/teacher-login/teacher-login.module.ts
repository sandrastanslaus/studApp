import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { TeacherLogin } from './teacher-login';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    TeacherLogin,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(TeacherLogin),
  ],
  exports: [
    TeacherLogin
  ]
})
export class TeacherLoginModule {}
