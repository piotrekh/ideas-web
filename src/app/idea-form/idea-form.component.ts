import { Component, OnInit } from '@angular/core';
import { CreateIdea } from '../shared/models/create-idea.model';
import { DropdownItem } from '../controls/dropdown/dropdownitem.model';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.scss']
})
export class IdeaFormComponent implements OnInit {

  public idea: CreateIdea = new CreateIdea();

  public categories: DropdownItem[] = [
    { key: '1', value: "First item" },
    { key: '2', value: "Second item" },
    { key: '3', value: "Very, very long item" },
  ];  

  public subcategories: string[] = ["mobile", "web", "android"];

  public selectedSubcategories: string[] = [];

  public maxSubcategories: number = 5;

  constructor() { }

  ngOnInit() {
  }

  onSubmitIdea() {
    debugger;
  }
}
