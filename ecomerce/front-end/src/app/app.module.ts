import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDefaultComponent } from './page-default/page-default.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { VueTestComponent } from './vue-test/vue-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PageDefaultComponent,
    HomePageComponent,
    ItemPageComponent,
    ArticlesPageComponent,
    VueTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
