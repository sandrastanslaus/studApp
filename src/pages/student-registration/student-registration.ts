import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
// import { Auth } from "../../providers/auth";
@Component({
  selector: 'page-student-registration',
  templateUrl: 'student-registration.html',
})
export class StudentRegistration {
  // constructor(){
  // }
  onStudentRegister(form: NgForm) {
   // this.auth.StudentRegister(form.value.name, form.value.username, form.value.password )
     // .then(data => console.log(data))
      //.catch(error => console.log(error));
   console.log(form.value);
  }

}
