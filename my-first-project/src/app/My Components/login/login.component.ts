import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login'
  constructor(private http: HttpClient, private router: Router, private apiService: HeroService) { }
  email:string = "";
  password:string = "";
  
  ngOnInit(): void {
  }
  public navigatLogin() {
    this.apiService.redirect('/signup');
  }

  Login() {
    this.apiService.doPost(
      'login',
      {
        'email': this.email,
        'password': this.password,
      }
      ).subscribe(res => {
        console.log("Data saved successfully", res);
        console.log(`Email ${this.email} \n Password ${this.password}`)
    }, err => {
      console.log(err)
    }
    )
  }
}
