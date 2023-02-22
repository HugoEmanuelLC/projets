import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { TvaService } from 'src/app/services/tva.service';

@Component({
  selector: 'app-tva-edit',
  templateUrl: './tva-edit.component.html',
  styleUrls: ['./tva-edit.component.scss']
})
export class TvaEditComponent implements OnInit {

  title = "Modifier le type de tva";

  listTvas:any[];

  profileForm = new  FormGroup({
    Ntva: new FormControl('')
  });

  constructor(
    private tvaService: TvaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tvaService.tvaSubject.subscribe((dataFromService) => this.listTvas = dataFromService)
    this.tvaService.getAllTvasFromServer()
    console.log(this.tvaService);
  }

  
   tva = this.route.snapshot.paramMap.get('menu');

  onSubmit(){
    let nouvelle_tva = this.profileForm.controls.Ntva.value;
    let tva = this.route.snapshot.paramMap.get('menu');

    this.tvaService.putOneTvaFromServer({nouvelle_tva, tva})
    console.log(this.tvaService);
  }

}
