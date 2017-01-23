import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html'
})

export class NewEventComponent {
  @Output() sendNewEvent = new EventEmitter();

  submitForm(title: string, user: string, date: string, venue: string, location: string){
    var newEvent: Event = new Event(title, date, user, venue, location);
    this.sendNewEvent.emit(newEvent);
  }

}
