import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { BsDropdownConfig } from "ngx-bootstrap/dropdown";
import { TabsetComponent } from "ngx-bootstrap/tabs";

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [{provide: BsDropdownConfig, useValue: {isAnimated: true, autoClose: true}}]
})
export class ProductComponent implements OnInit {
  @ViewChild('productTabs', {static: false}) productTabs: TabsetComponent;


  public modalRef: BsModalRef;
  public id: string;
  public title: string;
  public tabnumber: number = 0;

  constructor(private route: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.title = `Product - ${this.route.snapshot.params.id}`;
    $('.owl-carousel').owlCarousel()

  }

  selectTab(tabId: number, event: any): void {
    event.preventDefault();
    this.productTabs.tabs[tabId].active = true;
    this.tabnumber = tabId;
  }

  openModal(id: string, event: any): void {
    event.preventDefault();
    $(id).modal('show');
  }

  addToCart(event: any): void{
    event.preventDefault();
  }

  addToWishlist(event: any): void{
    event.preventDefault();
  }

}
