import { Component, OnDestroy, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy{

  title = " Editer, supprimer ou ajouter un utilisateur ";

  listUsers:any[];

  constructor( private userService: UsersService ) { }

  ngOnInit(): void {
    this.userService.userSubject.subscribe((dataFromService) => this.listUsers = dataFromService)
    this.userService.getAllUsersFromServer();
    console.log(this.userService);
  }

  ngOnDestroy() {
  }

}
