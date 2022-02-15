import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://live.staticflickr.com/65535/49912774902_0a2a679fbd_b.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://live.staticflickr.com/65535/49912774902_0a2a679fbd_b.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://live.staticflickr.com/65535/49912774902_0a2a679fbd_b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
