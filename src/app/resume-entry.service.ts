import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResumeEntry } from './resume-entries/resume-entry';

@Injectable({
  providedIn: 'root'
})
export class ResumeEntryService {
  private RESUME_URL = 'api/resumeEntries';

  constructor( private http: HttpClient, ) { }

  getEntries(): Observable<ResumeEntry[]> {
    const resumes = this.http.get<ResumeEntry[]>(this.RESUME_URL);
    return resumes;
  }

}
