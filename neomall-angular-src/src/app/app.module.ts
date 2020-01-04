import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule, NgxUiLoaderHttpConfig,  NgxUiLoaderConfig, SPINNER } from 'ngx-ui-loader';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

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
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OwlModule,
    NgxUiLoaderModule.forRoot(ngxUiConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot(ngxUiHttpConfig),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
