import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public loading: boolean = false;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.router.navigate([""]);
    }
  }

  public login() {
    this.loading = true;

    this.authService.login(this.email, this.password).subscribe(({}) => {
      this.loading = false;
      this.router.navigate([""]);
    },
    error => this.loading = false);
  }
}
