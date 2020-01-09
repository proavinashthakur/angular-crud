import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { SelectCityComponent } from './components/select-city/select-city.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'list-product',
        component: ListProductComponent,
      },
      {
        path: 'select-city',
        component: SelectCityComponent
      },
      {
        path: '',
        component: ListProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
