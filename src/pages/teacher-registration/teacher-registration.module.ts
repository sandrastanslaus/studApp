import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { TeacherRegistration } from './teacher-registration';

@NgModule({
  declarations: [
    TeacherRegistration,
  ],
  imports: [
    IonicPageModule.forChild(TeacherRegistration),
  ],
  exports: [
    TeacherRegistration
  ]
})
export class TeacherRegistrationModule {}

