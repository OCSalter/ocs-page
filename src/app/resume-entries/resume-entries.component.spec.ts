import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEntriesComponent } from './resume-entries.component';

describe('ResumeEntriesComponent', () => {
  let component: ResumeEntriesComponent;
  let fixture: ComponentFixture<ResumeEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeEntriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
