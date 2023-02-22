

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MenusService } from '../services/menus.service';



@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  title = "Liste de Menus";

  listMenu: any[];

  profileForm = new  FormGroup({
    menu: new FormControl(''),
  });

  constructor(
    private menuService: MenusService,
    private route: ActivatedRoute) { }

  

  ngOnInit(){
    this.menuService.menusSubject.subscribe((dataFromService) => this.listMenu = dataFromService)
    this.menuService.getAllMenusFromServer();
    console.log("test " , this.menuService);
  }
  

  

  

}
