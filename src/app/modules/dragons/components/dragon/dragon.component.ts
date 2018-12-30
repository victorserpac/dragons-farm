import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dragon } from '../../../../core/models';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss']
})
export class DragonComponent implements OnInit {
  @Input() dragon: Dragon;
  @Output() onView = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  view() {
    this.onView.emit();
  }

  edit() {
    this.onEdit.emit();
  }

}
