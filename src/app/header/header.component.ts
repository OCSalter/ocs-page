import { Component } from '@angular/core';
import { CardArgs } from '../card/card.component';
import { ImageArgs } from '../Graphics/ImageArgs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public logoImageArgs: ImageArgs = {
    src: "assets/flwr-high.png",
    dim: {x: 64, y: 64},
  } 

  public headerLinkList: HeaderRouteLink[] = [
    {route: '/AboutMe', cardArgs: this.getHeaderCardArgs("About Me")},
    {route: '/Resume', cardArgs: this.getHeaderCardArgs("Resume")},
    {route: '/Works', cardArgs: this.getHeaderCardArgs("My Works")},
  ];

  private getHeaderCardArgs(title: string): CardArgs{
    return {
      width: 17,
      aspectRatio: (3/1.5),
      titleSize: 2,
      titleText: title,
      imageArgs: this.logoImageArgs
    };
  }
  
}

interface HeaderRouteLink{
  route: string;
  cardArgs: CardArgs;
}
