import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeEntriesComponent } from './resume-entries/resume-entries.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: LandingPageComponent },
  { path: 'AboutMe', component: AboutMeComponent },
  { path: 'Resume', component: ResumeEntriesComponent },
  { path: 'Works', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
