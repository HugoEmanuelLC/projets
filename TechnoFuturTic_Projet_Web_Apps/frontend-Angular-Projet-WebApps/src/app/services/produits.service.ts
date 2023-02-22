import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  produitsSubject = new Subject<any[]>();

  private produits = 
    
      {
        nouveau_nom: "Thon picant",
        nouveau_prix: 7,
        Categorie: "Sandwiches"
      }
    ;

    listProduits:any[]
    editMenu:any[];

    emitProduitSubject(){
      this.produitsSubject.next(this.listProduits.slice())
    }

  constructor(private httpClient: HttpClient) { }

  saveProduitToServer(obj) {
    this.httpClient
    .post('http://localhost:3000/api/InsertionNewProduit', obj)
    .subscribe(
        () => {
          console.log( 'Enregistrement terminé !' + obj );
        },
        (error) => {
          console.log( 'Erreur ! : ' + error );
        }
      );
  }

  getSingleProduitFromServer(obj) {
    this.httpClient
    .get<any[]>('http://localhost:3000/api/OneProduit/' + obj)
    .subscribe(
      (response) => {
        this.listProduits = response;
        this.emitProduitSubject();
        console.log( 'requete terminé !' +obj);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
        
      }
    );
  }


    //modification un des Produit
    putOneProduitFromServer(objectName) { 
      this.httpClient
        .put('http://localhost:3000/api/UpdateProduit',objectName)
        .subscribe(
          () => {
            console.log( 'Requte terminé ! ' + this.editMenu);
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

      //delete Produit
  deletProduitFormServer(choice) {
    this.httpClient
    .delete('http://localhost:3000/api/DeleteProduit/'+ choice)
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
