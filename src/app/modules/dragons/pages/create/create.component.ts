import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DragonService } from 'src/app/core/services/dragon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private dragonService: DragonService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  back() {    
    this.router.navigate([{ outlets: { action: null } }]);
  }

  create(form: NgForm): void {
    this.dragonService.create(form.value)
      .then(() => {
        this.router.navigate([{ outlets: { action: 'created' } }]);
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
