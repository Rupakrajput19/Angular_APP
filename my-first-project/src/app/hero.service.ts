import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  apiBaseUrl: string = environment.apiUrl;
  apiRoutes: any = environment.apiRoutes;

  constructor(private router: Router, private http: HttpClient, private activateRoute: ActivatedRoute) {
  }

  redirect(router: string) {
    this.router.navigate(['/' + router]);
  }

  doPost(operation: string, data: any): Observable<any> {
    return this.http.post(
      this.apiBaseUrl + this.apiRoutes[operation],
      data
    ).pipe(map(
      (res: any) => res.json()
    ))
  }

  doGet(operation: string, data: any) {
    return this.http.get(
      this.apiBaseUrl + this.apiRoutes[operation] + '/' + data
    ).pipe(map(
      (res: any) => res.json()
    ))
  }
}
