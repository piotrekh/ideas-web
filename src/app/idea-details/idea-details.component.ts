import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../shared/services/api.service';
import { IdeaDetails } from '../shared/models/idea-details.model';

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.component.html',
  styleUrls: ['./idea-details.component.scss']
})
export class IdeaDetailsComponent implements OnInit {

  private id: string;

  public loading: boolean = true;
  public idea: IdeaDetails;

  constructor(private route: ActivatedRoute,
    private apiService: ApiService) { 
      this.route.params.subscribe(result => {
        this.id = result['id'];
        this.loadIdeaDetails();
      });
    }

  ngOnInit(){}

  loadIdeaDetails() {
    this.apiService.getIdeaDetails(this.id).subscribe(
      result => {
        this.loading = false;
        this.idea = result;
      },
      error => {
        this.loading = false;
      }
    );
  }  
}
