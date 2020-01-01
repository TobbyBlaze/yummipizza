import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PagesActiveDirective } from './pages-active.directive';


@NgModule({
  declarations: [PagesComponent, PagesActiveDirective],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TabsModule.forRoot()
  ]
})
export class PagesModule { }
