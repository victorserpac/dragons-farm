import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DragonService } from 'src/app/core/services';
import { Dragon } from 'src/app/core/models';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  private subscription: any;
  public dragon: Dragon;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dragonService: DragonService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(({ slug }) => {
      this.getDragon(slug);
    });
  }

  public getDragon(slug: string): Promise<any> {
    this.isLoading = true;
    return this.dragonService.get(slug)
      .then((dragon: Dragon) => (this.dragon = dragon))
      .finally(() => (this.isLoading = false));
  }

  public back(): void {
    this.router.navigateByUrl('timeline');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
