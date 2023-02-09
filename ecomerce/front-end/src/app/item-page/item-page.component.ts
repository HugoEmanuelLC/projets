import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent {
  mon_id = 0;
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.mon_id = params["id"];
    })
  }
}
