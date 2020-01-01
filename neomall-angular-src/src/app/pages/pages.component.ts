import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @ViewChild('pagesTabs', {static: false}) pagesTabs: TabsetComponent;

  title: string = "Profile";
  tabnumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  selectTab(tabId: number, event: any): void {
    event.preventDefault();
    this.pagesTabs.tabs[tabId].active = true;
    this.tabnumber = tabId;
  }

}
