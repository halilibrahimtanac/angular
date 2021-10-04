import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private http: HttpClient) { }
  message = "product works!"
  filterText = ""
  products : Product[] = []

  removeProduct(productId: any){
    let newPath = "http://localhost:3000/product/" + productId 
    this.http.delete(newPath).subscribe(()=> this.message="silindi")
    window.location.reload()
  }
  

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProduct(params["categoryName"]).subscribe(data=>{
       this.products = data
     })
    })

     
    
  }

}
