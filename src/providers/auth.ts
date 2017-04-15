import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import {DataService} from "../services/data";
//import {NgForm} from "@angular/forms";

@Injectable()
export class Auth {
  isLoggedin: boolean;
  AuthToken;
  constructor(public http: Http ) {
    this.http = http;
    this.isLoggedin = false;
    this.AuthToken = null;
  }

  storeUserCredentials(token) {
    window.localStorage.setItem('Sandra', token);
    this.useCredentials(token);
  }

  useCredentials(token) {
    this.isLoggedin = true;
    this.AuthToken = token;
  }

  loadUserCredentials() {
    let token = window.localStorage.getItem('Sandra');
    this.useCredentials(token);
  }

  destroyUserCredentials() {
    this.isLoggedin = false;
    this.AuthToken = null;
    window.localStorage.clear();
  }

  authenticate(user) {
    let creds = "username=" + user.username + "&password=" + user.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post('http://localhost:3306/webapp/register.php', creds, {headers: headers}).subscribe(data => {
              if(data.json().success){
                resolve(true);
              }
              else
                resolve(false);
        });
    });
  }

  getinfo() {
    return new Promise(resolve => {
      let headers = new Headers();
      this.loadUserCredentials();
      console.log(this.AuthToken);
      headers.append('Authorization', 'Bearer ' +this.AuthToken);
      this.http.get('http://localhost:3306/webapp/login.php', {headers: headers}).subscribe(data => {
              if(data.json().success)
                resolve(data.json());
              else
                resolve(false);
      });
    })
  }

  logout() {
    this.destroyUserCredentials();
  }
}
