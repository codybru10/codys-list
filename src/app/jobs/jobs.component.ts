import { Component } from '@angular/core';
import { Job } from './job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html'
})
export class JobsComponent {

  masterJobs: Job[] = [
    new Job('Jo Shmo', 'Web Dev', 'Tech', 'Portland, OR'),
    new Job('JP_Code2013', 'Personal Cook', 'Cooking', 'My house bia')
  ]

  toggle = false;
  selectedJob = null;

  editJob(clickedJob) {
    this.selectedJob = clickedJob;
  }

  doneEditing() {
    this.selectedJob = null;
  }

  toggleForm() {
    this.toggle = !this.toggle;
  }

  addJob(newJob) {
    this.masterJobs.push(newJob);
  }

  deleteJob(clickedJob) {
    var i = this.masterJobs.indexOf(clickedJob);
    this.masterJobs.splice(i, 1);
  }
}
