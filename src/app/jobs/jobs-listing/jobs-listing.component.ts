import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../job';


@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html'
})
export class JobsListingComponent {
  @Input() childJobs: Job[];
  @Output() editSender = new EventEmitter();

  editSaleBtn(currentJob) {
    this.editSender.emit(currentJob);
  }
}
