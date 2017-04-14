import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NavController} from "ionic-angular";
import {TeacherRegistration} from "../teacher-registration/teacher-registration";
import {Main} from "../main/main";

@Component({
  selector: 'page-teacher-login',
  templateUrl: 'teacher-login.html',
})
export class TeacherLogin {

  constructor(public navCtrl: NavController) {

  }
  onGoToMain(){
    this.navCtrl.push(Main)
  }
  onGoToTeacherRegistration(){
    this.navCtrl.push(TeacherRegistration)
  }


  onAddTeacher(form: NgForm){
    console.log(form);
  }

}
