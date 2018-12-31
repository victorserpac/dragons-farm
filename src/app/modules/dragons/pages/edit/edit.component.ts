import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DragonService, EventService } from 'src/app/core/services';
import { Dragon } from 'src/app/core/models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  private subscription;
  private dragon: Dragon;
  public isLoading: boolean;

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
      .then((dragon: Dragon) => (this.dragon = dragon))
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
    this.dragonService.update(this.dragon)
      .then(() => {
        this.eventService.BroadcastEvent('LIST_DRAGONS');
        this.router.navigate([{ outlets: { action: 'update-success' } }]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public delete(slug: string): void {
    this.router.navigate([{ outlets: { action: ['delete', slug] } }])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}