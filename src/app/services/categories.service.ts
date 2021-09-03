import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from '../idatas';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _url = "http://localhost:8080/categories";

  private _category = <Category>{};

  constructor(private _http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(this._url);
  }

  getCategory(id: number): Observable<Category> {
    return this._http.get<Category>(this._url + "-" + id);
  }

  addCategory(): Observable<any | null> {
    return this._http.post("http://localhost:8080/add-category", this._category);
  }

  get category(): Category { return this._category }
  set category(cat: Category) { this._category = cat }
}
