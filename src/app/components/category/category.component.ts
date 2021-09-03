import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/idatas';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private _id: number;
  private _cat?: Category;

  constructor(private _route: ActivatedRoute, private _catservice: CategoriesService) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this._id = params["id"];
      this._catservice.getCategory(this._id).subscribe( data => {
        this._cat = data;
        console.log(this._cat);
      });
    });
  }

  get id(): number { return this._id }
  set id(id: number) { this._id = id }

  get cat(): Category { return this._cat }
  set cat(cat: Category) { this._cat = cat }

}
