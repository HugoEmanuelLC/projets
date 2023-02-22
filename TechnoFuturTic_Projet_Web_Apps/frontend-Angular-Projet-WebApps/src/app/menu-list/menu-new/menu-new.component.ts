import { Component, OnInit } from '@angular/core';

import { MenusService } from '../../services/menus.service';
import { TvaService } from 'src/app/services/tva.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-new',
  templateUrl: './menu-new.component.html',
  styleUrls: ['./menu-new.component.scss']
})
export class MenuNewComponent implements OnInit {

  title = "nouveau menu";

  listTvas:any[];

  profileForm = new  FormGroup({
    Nnom: new FormControl(''),
    Ntva: new FormControl('')
  });

  constructor(
    private menuService: MenusService,
    private tvaService: TvaService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.tvaService.tvaSubject.subscribe((dataFromService) => this.listTvas = dataFromService)
    this.tvaService.getAllTvasFromServer()
    console.log("test " , this.tvaService);
  }

  onSave(): void {
    // this.menuService.saveMenuToServer()
    // console.log(this.menuService);
  }

  onSubmit(){
    let nomM = this.profileForm.controls.Nnom.value;
    let nrTva = this.profileForm.controls.Ntva.value;

    this.menuService.saveMenuToServer({nomM, nrTva})

    console.log('ici ici ' + this.menuService);
  }

}
