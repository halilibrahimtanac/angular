import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductRemoveComponent } from './product/product-remove/product-remove.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product/category/:categoryName',component:ProductComponent},
  {path:'productAdd',component:ProductAddComponent},
  {path:':productId',component:ProductRemoveComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
