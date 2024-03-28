import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeEntry } from '../../resume-entries/resume-entry';
import { HttpService } from '../http.service';
import { Either } from '../../Functional/Monad';

@Injectable({
  providedIn: 'root'
})
export class ResumeEntryService {
  private RESUME_URL = 'api/resumeEntries';

  constructor( private httpService: HttpService) { }

  getEntryList(): Observable<Either<ResumeEntry[]>> {
    return this.httpService.getEntryList<ResumeEntry>(this.RESUME_URL);
  }

}
