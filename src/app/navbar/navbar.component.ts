import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() pageTitle: string;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
