import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
export class SignUpComponentComponent implements OnInit {

  title = 'SignUp'
  // baseURL = 'http://localhost:4200/'
  // public signUpForm!: FormGroup
  constructor(private http: HttpClient, private router: Router, private apiService: HeroService) { }
  name: string = "";
  email: string = "";
  mobile: string = "";
  password: string = "";
  err: string = "";

  ngOnInit(): void {
    // this.signUpForm = this.formBuilder.group({
    //   name: [''],
    //   email: [''],
    //   mobile: [''],
    //   password: [''],

    // })
  }
  public navigatLogin() {
    this.apiService.redirect('/login');
  }

  register() {
    this.apiService.doPost(
      'signup',
      {
        'name': this.name,
        'email': this.email,
        'password': this.password,
        'mobile': this.mobile,
      }
    ).subscribe(res => {
      console.log("Data saved successfully", res);
      console.log(` Name: ${this.name} \n Email: ${this.email} \n Moble: ${this.mobile} \n Password: ${this.password}`)
    }, err => {
      console.log(err)
    }
    )
    // this.http.get('https://jsonplaceholder.typicode.com/users')
    // .subscribe(Data => console.log(Data));
    // console.log(` Name: ${this.name} \n Email: ${this.email} \n Moble: ${this.mobile} \n Password: ${this.password}`)
  }










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