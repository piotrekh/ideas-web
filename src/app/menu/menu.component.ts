import { Observable } from 'rxjs'
import { Component, OnInit, Output, EventEmitter } from '@angular/core'


import { Category } from '../shared/models/category.model'
import { ApiService } from '../shared/services/api.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() pageChange: EventEmitter<string> = new EventEmitter<string>();

  public categories: Observable<Category[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.categories = this.apiService.getCategories();
  }

  notifyOfPageChange(page: string) {
    this.pageChange.emit(page);
  }
}
