import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, stagger, keyframes, query } from '@angular/animations';
import { Observable } from 'rxjs';

import { ApiService } from '../shared/services/api.service';
import { Idea } from '../shared/models/idea.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('200ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class CategoryComponent implements OnInit {
  
  private categoryId: string;

  public loading: boolean = true;
  public ideas: Idea[] = [];

  constructor(private route: ActivatedRoute,
    private apiService: ApiService) {
    //get the category id from route params
    route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.loadIdeas();
    })
  }

  ngOnInit() {
    
  }

  private loadIdeas() {
    this.ideas = [];
    this.loading = true;

    this.apiService.getIdeasFromCategory(this.categoryId).subscribe(result => {
      this.loading = false;
      this.ideas = result;
    },
    error => {
      this.loading = false;
    });
  }

}
