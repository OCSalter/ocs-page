import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ResumeEntry } from './resume-entries/resume-entry';
import { Observable } from 'rxjs';
import { MOCK_RESUME_ENTRIES } from './mockResume';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const resumeEntries: ResumeEntry[] = MOCK_RESUME_ENTRIES;
    const landingText = [{tag: "landing", header: "hiiiiiii ! >_< how are you ?", body: "Welcome to my website ! Hope you like it here :3"}];
    return {resumeEntries, landingText};
  }
}
