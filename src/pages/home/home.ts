import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StudentLogin} from "../student-login/student-login";
import {TeacherLogin} from "../teacher-login/teacher-login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToStudentLogin(){
    this.navCtrl.push(StudentLogin);
  }

  onGoToTeacherLogin(){
    this.navCtrl.push(TeacherLogin);
  }

}
