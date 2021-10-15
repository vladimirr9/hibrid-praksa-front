import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BookCardComponent } from './books/book-card/book-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ListAuthorsPipe } from './pipes/list-authors.pipe';
import { BookDetailedComponent } from './books/book-detailed/book-detailed.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './users/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookAddFormComponent } from './books/book-add-form/book-add-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginService } from './users/login/login.service';
import { AuthInterceptorService } from './users/auth-interceptor.service';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthorDialogComponent } from './authors/author-dialog/author-dialog.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SearchAndSortComponent } from './books/book-list/search-and-sort/search-and-sort.component';
import { BookDeletionDialogComponent } from './books/book-deletion-dialog/book-deletion-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCardComponent,
    ListAuthorsPipe,
    BookDetailedComponent,
    NavbarComponent,
    LoginComponent,
    BookAddFormComponent,
    AuthorDialogComponent,
    RegistrationComponent,
    SearchAndSortComponent,
    BookDeletionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgxSpinnerModule
  ],
  providers: [LoginService , 
    {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptorService,
     multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
