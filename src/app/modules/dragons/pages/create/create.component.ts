import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DragonService } from 'src/app/core/services/dragon.service';
import { EventService } from 'src/app/core/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public isLoading: boolean = false;

  constructor(
    private dragonService: DragonService,
    private router: Router,
    private eventService: EventService,
  ) { }

  public back(): void {
    this.router.navigate([{ outlets: { action: null } }]);
  }

  public create(form: any): Promise<any> {
    this.isLoading = true;
    return this.dragonService.create(form.value)
      .then(() => {
        this.eventService.BroadcastEvent('LIST_DRAGONS');
        this.router.navigate([{ outlets: { action: 'create-success' } }]);
      })
      .finally(() => (this.isLoading = false));
  }

}
