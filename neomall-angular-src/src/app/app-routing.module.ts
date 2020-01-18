import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { AllcategoriesComponent } from './allcategories/allcategories.component';
import { CategoryComponent } from './category/category.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'cart', 
    component: CartComponent
  },
  {
    path: 'shop',
    component: ShopComponent 
  },
  { 
    path: 'np', 
    component: PagesComponent
  },
  {
     path: 'profile', 
     component: ProfileComponent 
  },
  { 
    path: 'account/:directive', 
    component: LoginComponent
  },
  { 
    path: 'item/:item_name', 
    component: ProductComponent
  },
  { 
    path: 'shop/all-categories', 
    component: AllcategoriesComponent
  },
  { 
    path: 'shops/:store', 
    component: ShopComponent
  },
  { 
    path: 'shops', 
    component: ShopsComponent
  },
  { 
    path: 'browse/:category', 
    component: CategoryComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }