import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { Paragraph } from '../../Paragraph';
import { Either } from '../../Functional/Monad';

@Injectable({
  providedIn: 'root'
})
export class WorkEntryService {
  private WORK_ENTRY_URL = 'api/workEntries';

  constructor( private httpService: HttpService ) { }
  

  getEntryList(): Observable<Either<Paragraph[]>> {
    return this.httpService.getEntryList<Paragraph>(this.WORK_ENTRY_URL);
  }
}
