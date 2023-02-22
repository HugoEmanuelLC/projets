import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProduitsService } from 'src/app/services/produits.service';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.scss']
})
export class NewProduitComponent implements OnInit {

  title = "Creer un nouveau Produit";

  listMenu:any[];

  profileForm = new  FormGroup({
    Nprod: new FormControl(''),
    Nprix: new FormControl(''),
    Nmenu: new FormControl('')
  });

  constructor(
    private produitsService: ProduitsService,
    private menuService: MenusService,
    ) { }

  ngOnInit(): void {
    this.menuService.menusSubject.subscribe((dataFromService) => this.listMenu = dataFromService)
    this.menuService.getAllMenusFromServer()
    console.log("test " , this.menuService);
  }

  onSave(): void {
    // this.produitsService.saveProduitToServer()
    // console.log(this.produitsService);
  }

  onSubmit(){
    let nouveau_nom = this.profileForm.controls.Nprod.value;
    let nouveau_prix = this.profileForm.controls.Nprix.value;
    let Categorie = this.profileForm.controls.Nmenu.value;

    this.produitsService.saveProduitToServer({nouveau_nom, nouveau_prix, Categorie})

    console.log('ici ici ' + this.menuService);
  }

}
