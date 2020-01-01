import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileTabs', {static: false}) profileTabs: TabsetComponent;

  title: string = "Profile - John Doe";
  tabnumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  selectTab(tabId: number, event: any): void {
    event.preventDefault();
    this.profileTabs.tabs[tabId].active = true;
    this.tabnumber = tabId;
  }

}
