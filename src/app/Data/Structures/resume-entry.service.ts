import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume, ResumeEntry } from '../../resume-entries/resume-entry';
import { HttpService } from '../http.service';
import { Either } from '../../Functional/Monad';

@Injectable({
  providedIn: 'root'
})
export class ResumeEntryService {
  private RESUME_URL = 'http://localhost:4010/resumes';

  constructor( private httpService: HttpService ) { }

  getEntryList(): Observable<Either<Resume[]>> {
    return this.httpService.getEntryList<Resume>(this.RESUME_URL);
  }

}
