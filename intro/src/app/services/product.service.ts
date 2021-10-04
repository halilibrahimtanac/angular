import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/product"

  getProduct(categoryName:any):Observable<Product[]>{
    let filteredPath = this.path
    if (categoryName){
      filteredPath = filteredPath + "?category=" + categoryName
    }
    return this.http.get<Product[]>(filteredPath)
  }

  add(product: Product):Observable<Product>{
    const httpoption={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpoption)
  }
}
