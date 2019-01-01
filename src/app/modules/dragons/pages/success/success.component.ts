import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  public isCreate: boolean;
  public isDelete: boolean;
  public isUpdate: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(({ isCreate, isDelete, isUpdate }) => {
      this.isCreate = isCreate;
      this.isDelete = isDelete;
      this.isUpdate = isUpdate;
    });
  }

  public back(): void {
    this.router.navigateByUrl('timeline');
  }

}
