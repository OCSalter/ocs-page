import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


import { resumeEntry } from './resume-entry';

@Component({
  selector: 'app-resume-entries',
  templateUrl: './resume-entries.component.html',
  styleUrl: './resume-entries.component.css',
  standalone: true,
  imports:[NgFor,],
})
export class ResumeEntriesComponent {
  entries: resumeEntry[] = [
    {title: "Gamer", group: "gamers", points:["gamed real hard", "its true"],location: "my room", date:"all day, all year"},
    {title: "Gamer", group: "gamerz", points:["gamed really hard", "its true"],location: "everywhere", date:"all day, all year"},
  ];
}
