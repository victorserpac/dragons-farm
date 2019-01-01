import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DragonService, EventService } from 'src/app/core/services';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit, OnDestroy {
  private subscription: any;
  private slug: string;
  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dragonService: DragonService,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(({ slug }) => {
      this.slug = slug;
    });
  }

  public cancel(): void {
    this.router.navigate([{ outlets: { action: ['edit', this.slug] } }])
  }

  public back(): void {
    this.router.navigateByUrl('timeline');
  }

  public confirm(): void {
    this.isLoading = true;
    this.dragonService.delete(this.slug)
      .then(() => {
        this.eventService.BroadcastEvent('LIST_DRAGONS');
        this.router.navigate([{ outlets: { action: 'delete-success' } }]);
      })
      .finally(() => (this.isLoading = false));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
