import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  menusSubject = new Subject<any[]>();

  private menu = 
    
      {
        nom: "test test test",
        tva: 6
      };

    listMenu:any[];
    listProd:any[];
    editMenu:any[];

    emitMenuSubject(){
      this.menusSubject.next(this.listMenu.slice())
    }
    emitSingleMenuSubject(){
      this.menusSubject.next(this.listProd.slice())
    }
    emitEditMenuSubject(){
      this.menusSubject.next(this.editMenu.slice())
    }

  constructor(private httpClient: HttpClient) { }

  //creation d une nouvelle categorie
  saveMenuToServer(obj) {
    this.httpClient
    .post('http://localhost:3000/api/InsertionNewCategorie', obj)
    .subscribe(
        () => {
          console.log( 'Enregistrement terminé !' + obj);
        },
        (error) => {
          console.log( 'Erreur ! : ' + error );
        }
      );
  }

  //afficher toutes les categories
  getAllMenusFromServer() {
    this.httpClient
      .get<any[]>('http://localhost:3000/api/AllCategories')
      .subscribe(
        (response) => {
          this.listMenu = response;
          this.emitMenuSubject();
          console.log( 'requete terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  //afficher les produits d'une categorie
  getSingleMenuFromServer(choice: String) { //choice: String
    this.httpClient
      .get<any[]>('http://localhost:3000/api/OneCategorieAndProd/' + choice)
      .subscribe(
        (response) => {
          this.listProd = response;
          this.emitSingleMenuSubject();
          console.log( 'Requte terminé !' + response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  //modification d une des categories
  putOneMenuFromServer(objectName) { 
    this.httpClient
      .put('http://localhost:3000/api/UpdateCategorie',objectName)
      .subscribe(
        () => {
          console.log( 'Requte terminé ! ' + this.editMenu);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  //afficher une categorie
  getOneMenuFormsServer(choice: String) {
    this.httpClient
    .get('http://localhost:3000/api/OneCategorie/' + choice)
    .subscribe(
      () => {
        console.log( 'Requte terminé ! ==> ' + choice);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }




  getIMGmenuFromServer(obj) {
    this.httpClient
    .get('http://localhost:3000/api/imgCategorie/' + obj)
    .subscribe(
      () => {
        console.log( 'Requte terminé ! ==> ' + obj);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    )
  }




  //delete menu
  deletMenuFormServer(choice) {
    this.httpClient
    .delete('http://localhost:3000/api/DeleteCategorie/'+ choice)
    .subscribe(
      () => {
        console.log( 'Requte terminé ! ==> ' + choice);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}

