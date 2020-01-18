import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id: string;
  public title: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.item_name;
    this.title = `Product - ${this.route.snapshot.params.item_name}`;

  }

}
