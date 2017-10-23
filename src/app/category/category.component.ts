import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryId: number;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.categoryId = params['id'];
    })
  }

  ngOnInit() {
  }

}
