import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Resume } from '../../interfaces/resume';
import resumeData from '../../../assets/resume.json';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private readonly resume: Resume = resumeData;

  getResume(): Observable<Resume> {
    return of(this.resume);
  }
}
