import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Resume } from './resume-entry';
import { ResumeEntryService } from '../Data/Structures/resume-entry.service';
import { Either } from '../Functional/Monad';

@Component({
  selector: 'app-resume-entries',
  templateUrl: './resume-entries.component.html',
  styleUrl: './resume-entries.component.css',
  standalone: true,
  imports:[NgFor,],
})

export class ResumeEntriesComponent implements OnInit {
  entries: Resume[] = [];

  constructor(private resumeEntryService: ResumeEntryService) {}

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void {
    this.resumeEntryService.getEntryList().subscribe((_: Either<Resume[]>) => 
      _.map(
        (entryList: Resume[]) => this.entries = entryList
      ));
  }
}
