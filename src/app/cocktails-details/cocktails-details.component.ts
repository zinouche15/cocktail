import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {
name: string;
  constructor() {
    this.name='Bienvenue sur mon site de recette de cocktails';
   }

  ngOnInit() {
  }

}
