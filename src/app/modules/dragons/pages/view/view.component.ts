import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DragonService } from 'src/app/core/services';
import { Dragon } from 'src/app/core/models';
import { DragonUtil } from 'src/app/util';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  public level: string;
  public isLoading: boolean = false;
  private subscription;
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

  private getDragon(slug: string) {
    this.isLoading = true;
    this.dragonService.get(slug)
      .then((dragon: Dragon) => {
        this.dragon = dragon
        this.level = DragonUtil.getLevel(this.dragon.created_at);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  public back() {
    this.router.navigateByUrl('timeline');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
