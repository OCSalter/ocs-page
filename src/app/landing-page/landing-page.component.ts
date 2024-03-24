import { Component, OnInit } from '@angular/core';

import { Queue } from '../structures';
import { HttpClient } from '@angular/common/http';

import { TextTyper } from '../IO/TextTyper';
import { InnerHTMLWriter } from '../IO/InnerHTMLWriter';
import { Paragraph } from '../Paragraph';
import { CardArgs } from '../card/card.component';
import { ImageArgs } from '../Graphics/image/image.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  public cardArgs: CardArgs = CARD_ARGS;
  
  private effectList: Queue<TextTyper> = new Queue();
  private previousEffect?: TextTyper;

  constructor( private http: HttpClient, ) { }

  ngOnInit(): void {
    this.generateEffects();
  }

  public playEffect(): void {
    const effect = this.effectList.pop(); 
    if(effect){
      this.previousEffect?.nextStarted();
      const id = htmlIDMap.get(effect.getID());
      if(id){
        effect.start(new InnerHTMLWriter(document.getElementById(id)));
      }
    }
   this.previousEffect = effect;
  }

  private generateEffects(): void {
    const text = this.http.get<Paragraph>(LANDING_TEXT_URL);
    text.subscribe( _ => {
      this.generateTypingEffects(_);
    });
  }
  
  private generateTypingEffects(data: any): void {
    this.effectList.add(new TextTyper(data.header, 91, "header"));
    this.effectList.add(new TextTyper(data.body, 82, "body"));
  }

}

const LANDING_TEXT_URL = "api/paragraphs/landing";

const IMAGEARGS: ImageArgs = {
  src:"assets/flwr-high.png",
  dim: {x: 500, y: 500},
  scale: 1,
  filters: {brightness: 0, invert: 1},
} 

const CARD_ARGS: CardArgs = {
  width: 50,
  aspectRatio: (1/1.6),
  titleSize: 9,
  subtitleSize: 3,
  titleText: "click: me",
  subtitleText: "",
  imageArgs: IMAGEARGS
};

const htmlIDMap = new Map<string, string>([
  ["header","Landing_Header"],
  ["body","Landing_Body"],
  ["sub","Landing_Sub"],
]);