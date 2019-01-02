import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onCreate: EventEmitter<any> = new EventEmitter();

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  public create(): void {
    this.onCreate.emit();
  }
}
