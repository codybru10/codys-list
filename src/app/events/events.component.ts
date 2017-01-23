import { Component } from '@angular/core';
import { Event } from './event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent {
  newEventForm = false;
  selectedEvent = null;

  masterEvents: Event[] = [
    new Event('Ruby Meetup', '30th Jan 2017', 'CodeGuy', 'New Relic', 'Portland, OR'),
    new Event('CS50 Meetup', '29th Jan 2017', 'CodeToad', 'Metal Toad', 'Portland, OR')
  ];

  addEvent(newEvent){
    this.masterEvents.push(newEvent);
  }

  toggleForm(){
    this.newEventForm = !this.newEventForm;
  }

  editEvent(clickedEvent) {
    this.selectedEvent = clickedEvent;
  }

  doneEditing(){
    this.selectedEvent = null;
  }

}
