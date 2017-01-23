import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html'
})
export class EditEventComponent {
  @Input() childSelectedEvent: Event;
  @Output() doneEditingEvent = new EventEmitter();

  doneEditingBtn() {
    this.doneEditingEvent.emit();
  }
}
