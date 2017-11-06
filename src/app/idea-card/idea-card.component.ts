import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss']
})
export class IdeaCardComponent implements OnInit {

  @Input() title: string;
  @Input() createdDate: string;
  @Input() id: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleClick() {
    this.router.navigate(['idea', this.id]);
  }
}
