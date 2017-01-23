import { Component, Output, EventEmitter } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html'

})
export class NewJobComponent {
  @Output() sendNewJob = new EventEmitter();

  submitForm(title: string, user: string, field: string, location: string) {
    var newJob: Job = new Job(title, user, field, location);
    this.sendNewJob.emit(newJob);
  }

}
