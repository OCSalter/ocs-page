import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

import { Queue } from '../structures';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  private MOCK_HEADER: string = "HIIIIIIIIiii... how are you?";
  private MOCK_BODY: string = "Welcome to my website! Hope you like it here!!!";

  i: number = 0;

  ngOnInit(): void {

  }

  public playEffect(): void {
    if(this.i == 0) {
      this.typeText("lh1", this.MOCK_HEADER, 120);
      
    }
    else if(this.i == 1) {
      this.typeText("lh2", this.MOCK_BODY, 82);
    }
    this.i++;
  }

  private typeText(outputId: string, toType: string, period: number = 50): void {
    var outputText: string = "";
    const typingSubscription = this.generateTextStream(toType, period)
    .subscribe( _ => {
      if(_) { 
        outputText += _ ;
      }
      else { typingSubscription.unsubscribe(); }
      this.updateElementTextById(outputId, outputText);
    });
  }

  private generateTextStream(text: string, period: number): Observable<string | undefined> {
    const q: Queue<string> = new Queue<string>(text.split(""));
    return interval(period).pipe(
      map( _ => q.pop() )
    );
  }

  private updateElementTextById(id: string, text: string, carrot: boolean = false): void {
    const element = document.getElementById(id);
    if(element) {
      element.innerHTML = "<span aria-hidden='true' class = 'caret'>"+ text +"</span>";
    }
  }
}
