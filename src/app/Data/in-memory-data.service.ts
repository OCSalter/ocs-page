import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ResumeEntry } from '../resume-entries/resume-entry';
import { MOCK_RESUME_ENTRIES } from '../mockResume';
import { Paragraph } from '../Paragraph';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const resumeEntries: ResumeEntry[] = MOCK_RESUME_ENTRIES;
    const paragraphs: Paragraph[] = [
      {id: "landing", header: "hiiiiiii ! >_< how are you ?", body: "Welcome to my website ! Hope you like it here :3"},
      {id: "aboutMe", header: "About Me", body:"Hey, my name is Owen Salter. I'm a passionate and driven software engineer."},
    ];
    return {resumeEntries, paragraphs};
  }
}
