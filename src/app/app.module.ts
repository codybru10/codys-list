import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { SalesComponent } from './sales/sales.component';
import { JobsComponent } from './jobs/jobs.component';
import { EventsComponent } from './events/events.component';
import { SalesListingComponent } from './sales/sales-listing/sales-listing.component';
import { NewSaleComponent } from './sales/new-sale/new-sale.component';
import { EditSaleComponent } from './sales/edit-sale/edit-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SalesComponent,
    JobsComponent,
    EventsComponent,
    SalesListingComponent,
    NewSaleComponent,
    EditSaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
