import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-menu-single',
  templateUrl: './menu-single.component.html',
  styleUrls: ['./menu-single.component.scss']
})
export class MenuSingleComponent implements OnInit {

  title = "Liste des produit";

  listProd:any[];
  listMenu:any[];

   

  

  constructor( 
    private menuService: MenusService,
    private route: ActivatedRoute ) { }


    id = this.route.snapshot.paramMap.get('menu');


  ngOnInit(): void {

    // this.menuService.menusSubject.subscribe((dataFromMenuList) => this.listMenu = dataFromMenuList);
    // const imgDB = this.route.snapshot.paramMap.get('menu');
    // this.menuService.getIMGmenuFromServer(imgDB)
    // console.log('test ' +imgDB);
    
    
    
    this.menuService.menusSubject.subscribe((dataFromMenuList) => this.listProd = dataFromMenuList);
    const id = this.route.snapshot.paramMap.get('menu');
    this.menuService.getSingleMenuFromServer(id) // TODO Add Categorie selected
    
    console.log("Test => ", id);
  }

  onDelete(){
    const id = this.route.snapshot.paramMap.get('menu');
    this.menuService.deletMenuFormServer(id)
    console.log('delete' +id);
    
  }

}
