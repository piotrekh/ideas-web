import { Component, OnInit } from '@angular/core';
import { CreateIdea } from '../shared/models/create-idea.model';
import { DropdownItem } from '../controls/dropdown/dropdownitem.model';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  public idea: CreateIdea;

  public categories: DropdownItem[] = [];

  public subcategories: string[] = [];

  constructor(private apiService: ApiService) { 
    this.idea = new  CreateIdea();
    this.idea.subcategories = [];   
  }

  ngOnInit() {
    //retrieve categories from api
    this.apiService.getCategories().map((x) => x.map(y => 
    {
      let item = new DropdownItem();
      item.key = y.id;
      item.value = y.name;
      return item;
    }))
    .subscribe(result => this.categories = result);
  }

  public autocompleteSubcategories = (text: string): Observable<string[]> => {
    return this.apiService.getSubcategories(this.idea.categoryId)
    .map(x => x.map(y => y.name));
};

  onSubmitIdea() {
    
  }  
}