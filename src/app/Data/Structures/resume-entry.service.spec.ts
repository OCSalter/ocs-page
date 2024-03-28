import { TestBed } from '@angular/core/testing';

import { ResumeEntryService } from './resume-entry.service';

describe('ResumeEntryService', () => {
  let service: ResumeEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
