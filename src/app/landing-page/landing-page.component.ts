import { Component, OnInit } from '@angular/core';

import { Queue } from '../structures';
import { TextTyper } from '../IO/TextTyper';
import { InnerHTMLWriter } from '../IO/InnerHTMLWriter';
import { CardArgs } from '../card/card.component';
import { ImageArgs } from '../Graphics/ImageArgs';
import { ColourPaletteService } from '../colour-palette.service';
import { UUID } from 'crypto';
import { ParagraphService } from '../Data/Structures/paragraph.service';
import { Some } from '../Functional/Monad';

const homeTextId: UUID = '7c2ba3f6-1f70-42ed-ad2b-0e9e5768ba74';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  constructor( private colorPaletteService: ColourPaletteService, private paragraphService: ParagraphService) {}

  private effectList: Queue<TextTyper> = new Queue();
  private previousEffect?: TextTyper;

  ngOnInit(): void {
    this.colorPaletteService.signUp(this.themeIcon);
    this.generateEffects();
  }

  public playEffect(): void {
    Some(this.effectList.pop())
    .map((effect: TextTyper) => {
      this.previousEffect?.nextStarted();
      Some(htmlIDMap.get(effect.getID()))
      .map( id => 
        effect.start(new InnerHTMLWriter(document.getElementById(id)))
      );
      this.previousEffect = effect;
    });
  }

  private generateEffects(): void {
    const text = this.paragraphService.getParagraphFromId(homeTextId);
    text.subscribe( _ => {
        _.map(p => this.generateTypingEffects(p[0]))
    })
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

const htmlIDMap = new Map<string, string>([
  ["header","Landing_Header"],
  ["body","Landing_Body"],
  ["sub","Landing_Sub"],
]);