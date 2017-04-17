import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {NavController} from "ionic-angular";
//import {DataService} from "../services/data";
//import {NgForm} from "@angular/forms";

@Injectable()
export class Auth {
  static get parameters() {
    //public
    return [[Http]]
    // getsession: any;
  }
    constructor(public http: Http, private navCtrl: NavController)
    {

    }
    postLogin(data)
    {
      let headers = new Headers();
      headers.append('Content-type', 'application/x-www-form-urlencoded');
      let link = 'http://localhost:3306/webapp/login.php'
      return this.http.post(link, data)
        .map(res => res.json())
    }

  }




