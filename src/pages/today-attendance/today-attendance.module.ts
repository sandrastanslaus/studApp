import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayAttendance } from '../../pages/today-attendance/today-attendance';

@NgModule({
  declarations: [
    TodayAttendance,
  ],
  imports: [
    IonicPageModule.forChild(TodayAttendance),
  ],
  exports: [
    TodayAttendance
  ]
})
export class TodayAttendanceModule {}
