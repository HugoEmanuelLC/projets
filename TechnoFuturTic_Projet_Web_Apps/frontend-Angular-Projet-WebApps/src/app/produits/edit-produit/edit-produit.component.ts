import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MenusService } from 'src/app/services/menus.service';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {

  title = "Modification du Produit";
  
  listProd:any[];
  listMenu:any[];

  profileForm = new  FormGroup({
    nNom: new FormControl(''),
    nPrix: new FormControl(''),
    Cat: new FormControl('')
  });

  constructor(
    private menuService: MenusService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private produitsService: ProduitsService
     ) { }

  ngOnInit(): void {

    this.menuService.menusSubject.subscribe((dataFromService) => this.listMenu = dataFromService)
    this.menuService.getAllMenusFromServer()
    console.log("test " , this.menuService);

    this.produitsService.produitsSubject.subscribe((dataFromService) => this.listProd = dataFromService)
    const id = this.route.snapshot.paramMap.get('menu');
    this.produitsService.getSingleProduitFromServer(id);
    console.log("test " + this.listProd + " " + id);
  }

  oldNom = this.route.snapshot.paramMap.get('menu');

  onSubmit(){
    let nouveau_nom = this.profileForm.controls.nNom.value;
    let nouveau_prix = this.profileForm.controls.nPrix.value;
    let Categorie = this.profileForm.controls.Cat.value;
    let id = this.route.snapshot.paramMap.get('menu');

    this.produitsService.putOneProduitFromServer({nouveau_nom, nouveau_prix, Categorie ,id})
    console.log(this.menuService);
  }

  onDelete(){
    const id = this.route.snapshot.paramMap.get('menu');
    this.produitsService.deletProduitFormServer(id)
    console.log('delete' +id);
    
  }

  

}
