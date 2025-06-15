import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { UUID } from 'crypto';
import { Paragraph } from '../../Paragraph';
import { Either } from '../../Functional/Monad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {
private prefix: string = 'http://localhost:4010/paragraphs'

  constructor( private httpService: HttpService, ) { }

  public getAll() : Observable<Either<Paragraph[]>> {
    return this.httpService.getEntryList<Paragraph>(this.prefix)
  }
  
  public getParagraphFromId(id: UUID): Observable<Either<Paragraph[]>> {
    return this.httpService.getEntryList<Paragraph>(this.prefix + '/fromId/' + id.toString())
  }
}
