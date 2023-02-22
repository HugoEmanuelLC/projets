import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userSubject = new Subject<any[]>();

  listUsers:any[];

  emitUserSubject(){
    this.userSubject.next(this.listUsers.slice());
  }

  constructor( private httpClient: HttpClient ) { }

  getAllUsersFromServer() {
    this.httpClient.get<any[]>('http://localhost:3000/api/auth/') //backend à faire
    .subscribe(
      (response) => {
        this.listUsers = response;
        this.emitUserSubject();
        console.log('requete terminé !');
      },
      (error) => {
        console.log('Erreur ! :' + error);

      }
    );
  }

}
