import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import {DataService } from './shared/data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
