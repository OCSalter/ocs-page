import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ResumeEntry } from './resume-entries/resume-entry';
import { MOCK_RESUME_ENTRIES } from './mockResume';
@Injectable({
  providedIn: 'root'
})
export class ResumeEntryService {

  constructor() { }

  getEntries(): Observable<ResumeEntry[]> {
    return of(MOCK_RESUME_ENTRIES);
  }

}
