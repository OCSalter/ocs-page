import { Component, OnInit } from '@angular/core';

import { Queue } from '../structures';
import { HttpClient } from '@angular/common/http';

import { TextTyper } from '../IO/TextTyper';
import { InnerHTMLWriter } from '../IO/InnerHTMLWriter';
import { Paragraph } from '../Paragraph';
import { CardArgs } from '../card/card.component';
import { ImageArgs } from '../Graphics/ImageArgs';
import { ColourPaletteService } from '../colour-palette.service';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  constructor( private http: HttpClient, private colorPaletteService: ColourPaletteService) {}

  private effectList: Queue<TextTyper> = new Queue();
  private previousEffect?: TextTyper;

  ngOnInit(): void {
    this.colorPaletteService.signUp(this.themeIcon);
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

  private themeIcon: ImageArgs = {
    src:"assets/flwr-mid.png",
    dim: {x: 500, y: 500},
    horizontalTransform:-12.5,
  } 
  
  public cardArgs: CardArgs = {
    width: 50,
    aspectRatio: (1/1.6),
    titleSize: 9,
    subtitleSize: 3,
    titleText: "click: me",
    subtitleText: "",
    imageArgs: this.themeIcon
  };

}

const LANDING_TEXT_URL = "api/paragraphs/landing";

const htmlIDMap = new Map<string, string>([
  ["header","Landing_Header"],
  ["body","Landing_Body"],
  ["sub","Landing_Sub"],
]);