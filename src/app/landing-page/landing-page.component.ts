import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  private MOCK_HEADER: string = "HIIIII how are you?";
  private MOCK_BODY: string = "Welcome to my website!";

  header: string[] = [];
  body: string[] = [];

  displayHeader: string = "";
  displayBody: string = "";

  ngOnInit(): void {
    this.header = this.MOCK_HEADER.split(" ").reverse();
    this.body = this.MOCK_BODY.split(" ").reverse();
  }

  public addPageText(): void{
    if(this.header.length){
      this.displayHeader += this.header[this.header.length-1] + " ";
      this.header.pop();
    }
    else if(this.body.length){
      this.displayBody += this.body[this.body.length-1] + " ";
      this.body.pop();
    }
  }
}
  