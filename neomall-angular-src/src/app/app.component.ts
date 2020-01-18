import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NavigationCancel, NavigationEnd, Event, NavigationError, NavigationStart, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ngxService:NgxUiLoaderService, public router: Router){
    this.router.events.subscribe((event: Event)=>{
      this.navigationInterceptor(event);
    });
  }

  ngOnInit(): void {
  }

  openModal(id: string): void {
    $(id).modal('show');
  }

  private navigationInterceptor(event: Event): void {

    if(event instanceof NavigationStart) {
      this.ngxService.start();
    }

    if(event instanceof NavigationEnd) {
      this.ngxService.stop();
    }

    if(event instanceof NavigationCancel) {
      this.ngxService.stop();
    }

    if(event instanceof NavigationError) {
      this.ngxService.stop();
    }
  }



}

