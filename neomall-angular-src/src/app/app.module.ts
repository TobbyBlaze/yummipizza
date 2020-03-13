import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule, NgxUiLoaderHttpConfig,  NgxUiLoaderConfig, SPINNER } from 'ngx-ui-loader';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

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

const ngxUiConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.threeStrings,
  bgsType: SPINNER.threeStrings,
  fgsSize: 35,
  bgsSize: 45
}

const ngxUiHttpConfig: NgxUiLoaderHttpConfig = {
  showForeground:false
}

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    PagenotfoundComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    PagesComponent,
    ProfileComponent,
    ProductComponent,
    AllcategoriesComponent,
    CategoryComponent,
    ShopsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot(ngxUiHttpConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
