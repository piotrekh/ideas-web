import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public pageTitle: string = "Newest ideas";

  constructor() { }

  ngOnInit() {
    prepareSidebar();
  }

  onPageChange(page: string) {
    this.pageTitle = page;
  }
}
