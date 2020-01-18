import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent implements OnInit {

  public title: string = 'All categories';

  constructor() { }

  ngOnInit() {
  }

}
