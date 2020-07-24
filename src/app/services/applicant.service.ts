import { Injectable } from '@angular/core';
import { Applicant } from '.././models/applicant';
import { ALL_APPLICANTS } from '.././applicant-list-mockup';

@Injectable({
  providedIn: 'root'
})

export class ApplicantService {

  constructor() { }

  getApplicants(): Applicant[] {
    return ALL_APPLICANTS;
  }
}
