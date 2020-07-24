import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../services/applicant.service';
import { Applicant } from '../models/applicant';
import { ApplicantDetailComponent } from '.././applicant-detail/applicant-detail.component';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  applicants: Applicant[];

  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.applicants = this.applicantService.getApplicants();
  }

}
