import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  pathCategory = "http://localhost:3000/category"

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.pathCategory)
  }
}
