import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SalesComponent } from './sales/sales.component';
import { JobsComponent } from './jobs/jobs.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
