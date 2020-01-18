import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public title: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = `Shop - ${this.route.snapshot.params.caetgory}`;
  }

}
