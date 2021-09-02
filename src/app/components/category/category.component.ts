import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private _id: number;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._id = this._route.snapshot.params["id"];
  }

  get id(): number { return this._id }
  set id(id: number) { this._id = id }

}
