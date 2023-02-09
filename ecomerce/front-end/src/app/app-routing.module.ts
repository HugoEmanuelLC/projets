import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { PageDefaultComponent } from './page-default/page-default.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'page-deafault', component: PageDefaultComponent },
  { path: 'articles', component: ArticlesPageComponent },
  { path: 'item/:id', component: ItemPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
