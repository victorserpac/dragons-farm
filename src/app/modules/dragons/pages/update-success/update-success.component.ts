import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-success',
  templateUrl: './update-success.component.html',
  styleUrls: ['./update-success.component.scss']
})
export class UpdateSuccessComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('timeline');
  }

}
