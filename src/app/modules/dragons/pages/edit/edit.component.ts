import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DragonService, EventService } from 'src/app/core/services';
import { Dragon } from 'src/app/core/models';
import { DragonUtil } from 'src/app/util';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  private subscription;
  public dragon: Dragon;
  public isLoading: boolean;
  public isUpdating: boolean = false;
  public level: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(({ slug }) => {
      this.getDragon(slug);
    });
  }

  private getDragon(slug: string) {
    this.isLoading = true;
    this.dragonService.get(slug)
      .then((dragon: Dragon) => {
        this.dragon = dragon;
        this.level = DragonUtil.getLevel(this.dragon.created_at);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      })
  }

  public back() {
    this.router.navigateByUrl('timeline');
  }

  public update() {
    this.isUpdating = true;
    this.dragonService.update(this.dragon)
      .then(() => {
        this.eventService.BroadcastEvent('LIST_DRAGONS');
        this.router.navigate([{ outlets: { action: 'update-success' } }]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.isUpdating = true));
  }

  public delete(slug: string): void {
    this.router.navigate([{ outlets: { action: ['delete', slug] } }])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
