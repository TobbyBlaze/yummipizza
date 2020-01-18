import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  title: string;
  public fragment: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if(fragment !== 'help_center' && fragment !== 'frequently_asked_questions'){
        this.router.navigateByUrl('**');
        return false;
      }
      this.title = fragment.replace('_', ' ');
      this.fragment = fragment;
    })
  }

}
