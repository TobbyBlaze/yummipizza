import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  public title: string = 'Shopping - All stores';

  constructor() { }

  ngOnInit() {
  }

}
