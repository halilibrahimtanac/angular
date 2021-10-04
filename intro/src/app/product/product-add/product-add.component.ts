import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddComponent implements OnInit {

  constructor(private categoryService:CategoryService, private productService:ProductService ) { }
  model : Product = new Product()
  categories : Category[] = []

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data=>{
      this.categories = data
    })
  }
  addProduct(form:NgForm){
    this.productService.add(this.model).subscribe(data=>{})
  }

}
