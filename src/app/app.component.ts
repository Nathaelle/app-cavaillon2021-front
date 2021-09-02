import { Component, OnInit } from '@angular/core';
import { Category } from './idatas';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'appcommerce';
  private _categories: Category[];

  constructor(private _catservice: CategoriesService) {}

  ngOnInit(): void {
    this._catservice.getCategories().subscribe(
      datas => this._categories = datas);
  }

  get categories(): Category[] { return this._categories; }
  set categories(cats: Category[]) { this._categories = cats; }
}
