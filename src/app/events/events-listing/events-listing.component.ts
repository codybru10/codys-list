import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-events-listing',
  templateUrl: './events-listing.component.html'
})
export class EventsListingComponent {
  @Input() childEvents: Event[];
  @Output() eventSender = new EventEmitter();

  editEventBtn(clickedEvent){
    this.eventSender.emit(clickedEvent);
  }
}
