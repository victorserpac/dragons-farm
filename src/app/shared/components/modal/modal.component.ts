import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  public close(): void {
    this.onClose.emit();
  }

}
