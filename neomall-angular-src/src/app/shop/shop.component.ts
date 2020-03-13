import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

public title: string;
public shop: boolean = false;
public store: string;

constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if(this.router.url.indexOf('shops') == -1){
      this.title = "Shop";
    } else {
      this.title = this.route.snapshot.params.store;
      this.store = this.route.snapshot.params.store;
      this.shop = true;
    }
  }

  openModal(id: string): void {
    $(id).modal('show');
  }

}
