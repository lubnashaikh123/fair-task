import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './shared/components/fair-dashboard/fair-card/fair-card.component';
import { FairInfoComponent } from './shared/components/fair-dashboard/fair-info/fair-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboardComponent,
    FairCardComponent,
    FairInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
