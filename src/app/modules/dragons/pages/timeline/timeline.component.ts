import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DragonService } from 'src/app/core/services/dragon.service';
import { ApiDragonsList, Dragon } from 'src/app/core/models';
import { EventService } from 'src/app/core/services';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public dragons: Array<Dragon> = [];
  public isLoading: boolean = false;

  constructor(
    private dragonService: DragonService,
    private router: Router,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.listDragons();
    this.eventService.GetEvent('LIST_DRAGONS').subscribe(() => {
      this.listDragons();
    });
  }

  private listDragons(page: number = undefined): void {
    this.isLoading = true;
    this.dragonService.list(page)
      .then((response: ApiDragonsList) => (this.dragons = response.items))
      .finally(() => (this.isLoading = false))
  }

  public newDragon(): void {
    this.router.navigate([{ outlets: { action: 'create' } }])
  }

  public view(slug: string): void {
    this.router.navigate([{ outlets: { action: ['view', slug] } }])
  }

  public edit(slug: string): void {
    this.router.navigate([{ outlets: { action: ['edit', slug] } }])
  }

}
