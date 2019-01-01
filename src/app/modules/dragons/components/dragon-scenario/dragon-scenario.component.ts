import { Component, Input, OnInit } from '@angular/core';
import { DragonUtil } from 'src/app/util';

@Component({
  selector: 'dragon-scenario',
  templateUrl: './dragon-scenario.component.html',
  styleUrls: ['./dragon-scenario.component.scss']
})
export class DragonScenarioComponent implements OnInit{
  public level: string;
  @Input() createdAt: string;

  ngOnInit() {
    this.level = DragonUtil.getLevel(this.createdAt);
  }
}
