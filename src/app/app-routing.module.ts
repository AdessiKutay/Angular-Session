import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksResolver } from './resolvers/books.resolver';

const routes: Routes = [
  {
    path: 'books', component: AppComponent, resolve: [BooksResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
