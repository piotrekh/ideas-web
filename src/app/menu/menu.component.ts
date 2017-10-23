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
  }
}
