import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private _name: string = "Azerty";
  private _shortText: string = "";

  constructor(private _http: HttpClient, private _catService: CategoriesService) {}

  ngOnInit() {
  }

  submit() {
    // this._name = form.value["name"];
    // this._shortText = form.value["shortText"];
    console.log(this._name);

    this._catService.category = { 
      name: this._name,
      shortText: this._shortText
    }
    this._catService.addCategory().subscribe(
      () => console.log("OK"),
      error => console.log("Une erreur est survenue")
    );
  }

  get name(): string { return this._name }
  set name(n : string) { this._name = n }

  get shortText(): string { return this._shortText }
  set shortText(n : string) { this._shortText = n }

}
