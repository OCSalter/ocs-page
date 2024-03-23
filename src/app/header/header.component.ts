import { Component } from '@angular/core';
import { CardArgs } from '../card/card.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public imageScale: number = 64 * 1.4;

  public headerLinkList: HeaderRouteLink[] = [
    {route: '/AboutMe', cardArgs: this.getHeaderCardArgs("About Me")},
    {route: '/Resume', cardArgs: this.getHeaderCardArgs("Resume")},
    {route: '/Works', cardArgs: this.getHeaderCardArgs("My Works")},
  ];

  private getHeaderCardArgs(title: string){
    return {
      width: 17,
      aspectRatio: (3/1.5),
      titleSize: 2,
      titleText: title,
    };
  }
  
}

interface HeaderRouteLink{
  route: string;
  cardArgs: CardArgs;
}
