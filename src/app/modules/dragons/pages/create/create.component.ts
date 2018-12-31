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
    console.log(this.dragonService);
    
  }

  back() {    
    this.router.navigate([{ outlets: { action: null } }]);
  }

  create(form: NgForm): void {
    console.log(this.dragonService);
    
    // this.dragonService.create(form.value)
      // .then(() => {
      //   console.log('criado');
        
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
  }

}
