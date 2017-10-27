import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { ApiService } from '../shared/services/api.service';
import { Idea } from '../shared/models/idea.model';

@Component({
  selector: 'app-newest-ideas',
  templateUrl: './newest-ideas.component.html',
  styleUrls: ['./newest-ideas.component.scss']
})
export class NewestIdeasComponent implements OnInit {

  public loading: boolean = true;
  public ideas: Idea[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNewestIdeas().delay(3000).subscribe(
      result => {
        this.loading = false;  
        this.ideas = result;        
      }, 
      error => {
        this.loading = false;
      });
  }
}
