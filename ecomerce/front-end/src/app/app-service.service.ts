import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor( private http: HttpClient ) { }

  rootUrl = '/api';

  getUsers(){
    return this.http.get(this.rootUrl + '/users');
  }
}
