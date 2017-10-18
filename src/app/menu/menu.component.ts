import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'


import { Category } from '../shared/models/category.model'
import { ApiService } from '../shared/services/api.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public categories: Observable<Category[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.categories = this.apiService.getCategories();
    // this.categories.push({
    //   id: "1",
    //   name: "Projects"
    // });
    // this.categories.push({
    //   id: "2",
    //   name: "Social events"
    // });
    // this.categories.push({
    //   id: "3",
    //   name: "Office equipment"
    // });
    // this.categories.push({
    //   id: "4",
    //   name: "Workplace"
    // });
  }
}
