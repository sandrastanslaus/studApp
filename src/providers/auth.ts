import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {NavController} from "ionic-angular";
import * as firebase from 'firebase';


@Injectable()
export class Auth {

  //private data: any;
  public fireAuth: any;
  public userProfile: any;
    constructor( private navCtrl: NavController)
    {
      this.fireAuth = firebase.auth();
      this.userProfile = firebase.database().ref('Teacher');
    }

    loginUser (email: string, password: string): firebase.Promise<any> {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    }

//for teacher
    signUpUser (email: string, password: string, course: string, name: string, title: string): firebase.Promise<any> {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( newUser => {
          firebase.database().ref('/Teacher').child(newUser.uid)
            .set({ email: email,
                    name: name,
                    course: course,
                    title: title
            })
        })
    }

    //for Student registration
  signUpStudent (email: string, password: string, studentid: string): firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( newUser => {
        firebase.database().ref('/Student').child(newUser.uid)
          .set({ email: email,
            studentid: studentid
          })
      })
  }


    resetPassword(email: string): firebase.Promise<void> {
      return firebase.auth().sendPasswordResetEmail(email);
    }

    logoutUser(): firebase.Promise<void> {
      return firebase.auth().signOut();
    }

  }




