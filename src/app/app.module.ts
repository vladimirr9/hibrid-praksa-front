import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCardComponent,
    ListAuthorsPipe,
    BookDetailedComponent,
    NavbarComponent,
    LoginComponent,
    BookAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
