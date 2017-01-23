import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',

})
export class EditJobComponent {
  @Input() childSelectedJob: Job[];
  @Output() doneSender = new EventEmitter();

  submitEdit(){
    this.doneSender.emit();
  }
}
