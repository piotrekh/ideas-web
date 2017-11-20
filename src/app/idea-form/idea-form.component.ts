import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateIdea } from '../shared/models/create-idea.model';
import { DropdownItem } from '../controls/dropdown/dropdownitem.model';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { IdeaDetails } from '../shared/models/idea-details.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  public idea: CreateIdea = new CreateIdea();

  public categories: DropdownItem[] = [];

  public subcategories: string[] = [];

  public isSending: boolean = false;

  constructor(private apiService: ApiService,
    private router: Router) {
    this.idea = new CreateIdea();
  }

  ngOnInit() {
    //retrieve categories from api
    this.apiService.getCategories().map((x) => x.map(y => {
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

  onSubmitIdea(form: NgForm) {
    this.isSending = true;

    this.apiService.createIdea(this.idea)
      .subscribe(
      result => {

        this.isSending = false;
        this.idea = new CreateIdea();
        form.reset();

        this.router.navigate(['idea', result.id]);
      },
      error => this.isSending = false);
  }
}