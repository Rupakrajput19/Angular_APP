import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  baseURL = 'http://localhost:4200/'
  constructor(private http: HttpClient) { }
  name: any;
  email: any;
  mobile: any;
  password: any;
  ngOnInit(): void {
  }

  // register() {
  //   {
  //     'name': this.name,
  //     'email': this.email,
  //     'mobile': this.mobile,
  //     'password': this.name,
  //   }.subscribe(
  //     res => {
  //       console.log(res)
  //     }
  //   )
  // }
    








  //   getDetails(){
  //   return this.http.get('')
  // }

  // postData(data: any): Observable<any> {
  //   return this.http.post(`${this.baseURL}/post`, data)
  // }

  // submitData(value: any) {
  //   let body = {
  //     name: value.name,
  //     email: value.email,
  //     mobile: value.mobile,
  //     password: value.password
  //   }
  // }

  // this.userService.postData(body)
  //   .subscribe(response => {
  //     	console.log(response)
  // })

}