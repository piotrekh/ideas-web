import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { ApiService } from '../shared/services/api.service';
import { Idea } from '../shared/models/idea.model';

@Component({
  selector: 'app-newest-ideas',
  templateUrl: './newest-ideas.component.html',
  styleUrls: ['./newest-ideas.component.css']
})
export class NewestIdeasComponent implements OnInit {

  public ideas: Idea[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNewestIdeas().subscribe(result => this.ideas = result);
  }
}
