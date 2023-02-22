import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class TvaService {

  tvaSubject = new Subject<any[]>();

  private tvas = 
    {

    }

  listTvas:any[];

  emitTvaSubject(){
    this.tvaSubject.next(this.listTvas.slice())
  }

  constructor( private httpClient: HttpClient ) { }

  getAllTvasFromServer() {
    this.httpClient.get<any[]>('http://localhost:3000/api/AllTva')
    .subscribe(
      (response) => {
        this.listTvas = response;
        this.emitTvaSubject();
        console.log('requete terminé !');
      },
      (error) => {
        console.log('Erreur ! :' + error);

      }
    );
  }

  saveTvaToServer(obj) {
    this.httpClient
    .post('http://localhost:3000/api/InsertionNewTva', obj)
    .subscribe(
        () => {
          console.log( 'Enregistrement terminé !' + obj);
        },
        (error) => {
          console.log( 'Erreur ! : ' + error );
        }
      );
  }

    //modification d une des categories
    putOneTvaFromServer(objectName) { 
      this.httpClient
        .put('http://localhost:3000/api/updateTva',objectName)
        .subscribe(
          () => {
            console.log( 'Requte terminé ! ' + objectName);
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

}
