// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
// import {DataService} from "../services/data";
// import {NgForm} from "@angular/forms";
//
// @Injectable()
// export class Auth {
//   constructor(public http: Http, private  dS: DataService) {}
//
//   private url: string = this.dS.endpoint;
//
//   login(form: NgForm, url: string)
//   {
//     return this.http
//       .post(this.url + url, {
//         username: form.value.username,
//         password: form.value.password
//       })
//       .map((response: Response) => {
//         return response.json();
//       })
//      // .do((data) => {
//        // console.log(data);
//       });
//
//   }
// }
