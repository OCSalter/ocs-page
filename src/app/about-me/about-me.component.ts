import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Paragraph } from '../Paragraph';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  private URL = "api/paragraphs/aboutMe";

  public aboutMe?: Paragraph;

  constructor(  private http: HttpClient, ) {}

  ngOnInit(){
    // this.http.get<Paragraph>(this.URL).subscribe(result => this.aboutMe = result);
  }

}
