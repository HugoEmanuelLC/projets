import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {

  title = "Modifier ce Menu";

  listMenu:any[];

  profileForm = new  FormGroup({
    newNom: new FormControl(''),
    newImg: new FormControl('')
  });

  constructor( 
    private menuService: MenusService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
     ) { }

    ngOnInit(): void {
      this.menuService.menusSubject.subscribe((dataFromService) => this.listMenu = dataFromService)
      const id = this.route.snapshot.paramMap.get('menu');
      this.menuService.getOneMenuFormsServer(id);
      console.log("test " + this.menuService + " " + id);

      // this.menuService.menusSubject.subscribe((dataImg) => this.listMenu = dataImg)
      // const img = this.route.snapshot.paramMap.get('menu');
      // this.menuService.getOneMenuFormsServer(img)
    }
    
 
  oldNom = this.route.snapshot.paramMap.get('menu');

    onSubmit(){
      let newName = this.profileForm.controls.newNom.value;
      // let newImg = this.profileForm.controls.newImg.value;
      let oldName = this.route.snapshot.paramMap.get('menu');

      this.menuService.putOneMenuFromServer({newName,  oldName})
      console.log('modifier ' +newName  +oldName);
    }


}
