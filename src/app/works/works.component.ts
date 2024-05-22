import { Component, OnInit } from '@angular/core';
import { Paragraph } from '../Paragraph';
import { WorkEntryService } from '../Data/Structures/work-entry.service';
import { Either } from '../Functional/Monad';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit {
  public selectedId: string = "";
  public selectedText?: string;

  public titleList: Paragraph[] = [];

  constructor(private workEntryService: WorkEntryService) {}

  ngOnInit() {
    this.workEntryService.getEntryList().subscribe( (result: Either<Paragraph[]>) => result.map( _ => this.titleList = _ ));
    var i: number = 0;
    this.titleList.forEach(entry => entry.header = "." + (i++) + " " + entry.header);
  }
  
  clickEntry(id: string): void {
    this.selectedText = this.titleList.find(_ => _.id == id)?.body;
  }
}
