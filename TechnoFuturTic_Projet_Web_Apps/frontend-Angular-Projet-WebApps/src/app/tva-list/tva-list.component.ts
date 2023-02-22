import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TvaService } from '../services/tva.service';

@Component({
  selector: 'app-tva-list',
  templateUrl: './tva-list.component.html',
  styleUrls: ['./tva-list.component.scss']
})
export class TvaListComponent implements OnInit {

  title = "Liste de tva's";

  listTvas:any[];

  profileForm = new  FormGroup({
    newTva: new FormControl('')
  });

  constructor( 
    private tvaService: TvaService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.tvaService.tvaSubject.subscribe((dataFromService) => this.listTvas = dataFromService)
    this.tvaService.getAllTvasFromServer()
    console.log(this.tvaService);
    
  }


  onSubmit(){
    let tva = this.profileForm.controls.newTva.value;

    this.tvaService.saveTvaToServer({tva})

    console.log('ici ici ' + this.tvaService);
  }

}
