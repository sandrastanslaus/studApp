import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Attendance } from './attendance';

@NgModule({
  declarations: [
    Attendance,
  ],
  imports: [
    IonicPageModule.forChild(Attendance),
  ],
  exports: [
    Attendance
  ]
})
export class AttendanceModule {}
