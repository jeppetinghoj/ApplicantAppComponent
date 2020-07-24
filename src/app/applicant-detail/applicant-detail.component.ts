import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css']
})
export class ApplicantDetailComponent {
  @Input('applicant') data: Applicant;
  formattedDate : string;
  filledStars = new Array();
  emptyStars = new Array();

  MAX_STARS = 5;

  ngOnInit(): void {
    this.formattedDate = this.leadingZero(this.data.applicationDate.getDate()) + '.' + this.leadingZero(this.data.applicationDate.getMonth()+1) + '.' + this.data.applicationDate.getFullYear() + ' @ ' + this.leadingZero(this.data.applicationDate.getHours()) + ':' + this.leadingZero(this.data.applicationDate.getMinutes());
    console.log(this.data.applicationDate.getMonth());
    this.filledStars = Array(this.data.rating);
    this.emptyStars = Array(this.numberOfEmptyStars);
  }
  
  get numberOfEmptyStars(): number {
    return this.MAX_STARS - this.data.rating;
  }

  leadingZero(input : number) : string {
    return ('0' + input).slice(-2);
  }

}

