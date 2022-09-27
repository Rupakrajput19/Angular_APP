import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {

  urlAdrress: string = environment.urlAddress;

  constructor() { }
}
