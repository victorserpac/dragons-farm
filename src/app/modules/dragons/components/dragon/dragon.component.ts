import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dragon } from '../../../../core/models';
import { DragonUtil } from 'src/app/util';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {
  public level: string;
  @Input() dragon: Dragon;
  @Output() onView = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.level = DragonUtil.getLevel(this.dragon.created_at);
  }

  view() {
    this.onView.emit(this.dragon.slug);
  }

  edit() {
    this.onEdit.emit(this.dragon.slug);
  }
}
