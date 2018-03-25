import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
cocktails: Cocktail[];

@Output() cocktail = new EventEmitter<any>();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.cocktails= [
      new Cocktail( '1','Mojito', 'D origine cubaine, le mojito est une boisson alcoolisée composée de rhum, de citron vert, de feuilles de menthe, de sucre de canne et d eau gazeuse. Parfois, quelques glaçons viennent rafraîchir le mélange.'),
      new Cocktail('2','Margarita', 'Cocktail à base de tequila, de liqueur d orange et de jus de citron vert.'),
      new Cocktail('3', 'Sour', 'Le Whiskey sour est un cocktail alcoolisé à base de whiskey ou de bourbon, de jus de citron, de sucre et de blanc d œuf')
    ];
    this.data.currentCocktail.subscribe(cocktail => this.cocktail = cocktail)
  }
  onSelect(cocktail: Cocktail){
    this.data.changeCoctail(cocktail);
  }
}
