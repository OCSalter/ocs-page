import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

import { Queue } from '../structures';
import { HttpClient } from '@angular/common/http';

import { TextTyper } from '../IO/TextTyper';
import { InnerHTMLWriter } from '../IO/InnerHTMLWriter';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  private LANDING_TEXT_URL = "api/landingText";
  
  private effects: Queue<TextTyper> = new Queue();
  private previousEffect?: TextTyper;
  
  private htmlIDMap = new Map<string, string>([
      ["header","Landing_Header"],
      ["body","Landing_Body"],
      ["sub","Landing_Sub"],
  ]);

  constructor( private http: HttpClient, ) { }

  ngOnInit(): void {
    this.generateEffects();
  }

  private generateEffects(): void {
    const text = this.http.get<any>(this.LANDING_TEXT_URL);
    text.subscribe( _ => {
      this.generateTypingEffects(_[0]);
    });
  }

  public playEffect(): void {
    const _effect = this.effects.pop(); 
    if(_effect){
      this.previousEffect?.nextStarted();
      const id = this.htmlIDMap.get(_effect.getID());
      if(id){
        _effect.start(new InnerHTMLWriter(document.getElementById(id)));
      }
    }
   this.previousEffect = _effect;
  }
  
  private generateTypingEffects(data: any): void {
    this.effects.add(new TextTyper(data.header, 91, "header"));
    this.effects.add(new TextTyper(data.body, 82, "body"));
  }
}
