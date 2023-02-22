import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditProduitComponent } from './produits/edit-produit/edit-produit.component';
import { NewProduitComponent } from './produits/new-produit/new-produit.component';
import { LoginComponent } from './auth/login/login.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuSingleComponent } from './menu-list/menu-single/menu-single.component';
import { MenuNewComponent } from './menu-list/menu-new/menu-new.component';
import { MenuEditComponent } from './menu-list/menu-edit/menu-edit.component';
import { TvaListComponent } from './tva-list/tva-list.component';
import { MenusService } from './services/menus.service';
import { ProduitsService } from './services/produits.service';
import { TvaService } from './services/tva.service';
import { TvaEditComponent } from './tva-list/tva-edit/tva-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SignupComponent,
    UserListComponent,
    EditProduitComponent,
    NewProduitComponent,
    LoginComponent,
    MenuListComponent,
    MenuSingleComponent,
    MenuNewComponent,
    MenuEditComponent,
    TvaListComponent,
    TvaEditComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MenusService,ProduitsService,TvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
