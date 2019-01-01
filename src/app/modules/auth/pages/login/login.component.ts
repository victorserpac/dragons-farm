import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services';
import { Response } from 'src/app/core/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hasError: boolean = false;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/timeline');
    }
  }

  public submit(login: NgForm): void {
    this.authService.login(login.value)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onloginError.bind(this))
  }

  private onLoginSuccess(response: Response): void {
    if (response.success) {
      this.router.navigateByUrl('timeline');
    }
  }

  private onloginError(response: Response): void {    
    if (!response.success) {
      this.hasError = true;
      this.errorMessage = response.message;
    }
  }

}
