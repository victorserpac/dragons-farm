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

  ngOnInit() {
    this.level = DragonUtil.getLevel(this.dragon.created_at);
  }

  public view(): void {
    this.onView.emit(this.dragon.slug);
  }

  public edit(): void {
    this.onEdit.emit(this.dragon.slug);
  }
}
