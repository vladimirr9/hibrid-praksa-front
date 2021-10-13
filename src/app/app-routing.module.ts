import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailedComponent } from './books/book-detailed/book-detailed.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuardService } from './users/authguard/auth-guard.service';
import { BookAddFormComponent } from './books/book-add-form/book-add-form.component';

const routes: Routes = [
  { path: 'books/add', component: BookAddFormComponent },
  { path: 'books/:id/edit', component: BookAddFormComponent },
  { path: 'books/:id', component: BookDetailedComponent },
  { path: 'books', component: BookListComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
