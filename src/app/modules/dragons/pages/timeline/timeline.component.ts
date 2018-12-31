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

  listDragons(page: number = undefined): void {
    this.dragonService.list(page)
      .then((response: ApiDragonsList) => {
        this.dragons = response.items;
      });
  }

  newDragon() {
    this.router.navigate([{ outlets: { action: 'create' } }])
    console.log('new dragon');
  }

  view(slug: string) {
    console.log(slug);
  }

  edit(slug: string) {
    console.log(slug);
  }

}
