import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
  cocktail: Cocktail[];

 constructor(private data: DataService) { }
 ngOnInit() {
   this.data.currentCocktail.subscribe(cocktail => this.cocktail = cocktail);
 }



}
