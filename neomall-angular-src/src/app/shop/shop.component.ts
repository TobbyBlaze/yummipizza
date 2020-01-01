import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
@ViewChild('shopTabs', {static: false}) shopTabs: TabsetComponent;

title: string = "Shop";
tabnumber: number = 0;

constructor() { }

  ngOnInit() {
  }

  selectTab(tabId: number, event: any): void {
    event.preventDefault();
    this.shopTabs.tabs[tabId].active = true;
    this.tabnumber = tabId;
  }

}
