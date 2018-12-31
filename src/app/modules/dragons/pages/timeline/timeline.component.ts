import { Component, OnInit } from '@angular/core';
import { DragonService } from 'src/app/core/services/dragon.service';
import { ApiDragonsList, Dragon } from 'src/app/core/models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public dragons: Array<Dragon> = [];

  constructor(
    private dragonService: DragonService,
  ) { }

  ngOnInit() {
    this.listDragons();
  }

  listDragons(page: number = undefined): void {
    this.dragonService.list(page)
      .then((response: ApiDragonsList) => {
        this.dragons = response.items;
      });
  }

  newDragon() {
    console.log('new dragon');
  }

  view(slug: string) {
    console.log(slug);
  }

  edit(slug: string) {
    console.log(slug);
  }

}
