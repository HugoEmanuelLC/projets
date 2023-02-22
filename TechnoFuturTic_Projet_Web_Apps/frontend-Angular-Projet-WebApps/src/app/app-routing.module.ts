import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MenuEditComponent } from './menu-list/menu-edit/menu-edit.component';

import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuNewComponent } from './menu-list/menu-new/menu-new.component';
import { MenuSingleComponent } from './menu-list/menu-single/menu-single.component';
import { EditProduitComponent } from './produits/edit-produit/edit-produit.component';
import { NewProduitComponent } from './produits/new-produit/new-produit.component';
import { TvaEditComponent } from './tva-list/tva-edit/tva-edit.component';
import { TvaListComponent } from './tva-list/tva-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menus', component: MenuListComponent},
  { path: 'menus/:menu', component: MenuListComponent},
  { path: 'addMenu', component: MenuNewComponent},
  { path: 'menus/singleMenu/:menu', component: MenuSingleComponent},
  { path: 'menus/editMenu/:menu', component: MenuEditComponent},
  { path: 'addProduit', component: NewProduitComponent},
  { path: 'editProduit/:menu', component: EditProduitComponent},
  { path: 'users', component: UserListComponent},
  { path: 'tva', component: TvaListComponent},
  { path: 'tva/editTva/:menu', component: TvaEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
