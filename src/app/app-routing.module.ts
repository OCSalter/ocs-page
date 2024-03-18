import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeEntriesComponent } from './resume-entries/resume-entries.component';

const routes: Routes = [
  { path: 'AboutMe', component: AboutMeComponent },
  { path: 'Resume', component: ResumeEntriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
