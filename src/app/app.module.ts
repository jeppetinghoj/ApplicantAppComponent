import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplicantDetailComponent } from './applicant-detail/applicant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantsComponent,
    ApplicantDetailComponent
  ],
  imports: [
    BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
