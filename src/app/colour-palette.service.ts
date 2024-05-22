import { Injectable } from '@angular/core';
import { cambridgeBlue, cambridgeBlueHex, coyote, coyoteHex, delftBlue, delftBlueHex, hunterGreen, hunterGreenHex, pink, pinkHex, themeId } from './Colours';
import { Option, Some } from './Functional/Monad';
import { ImageArgs } from './Graphics/ImageArgs';

@Injectable({
  providedIn: 'root'
})
export class ColourPaletteService {

  private colourPalette: ColourPalette = new Map([
    [pink, pinkHex],
    [coyote, coyoteHex],
    [delftBlue, delftBlueHex],
    [cambridgeBlue, cambridgeBlueHex],
    [hunterGreen, hunterGreenHex]    
  ])

  private themeImage = new Map([
    [pink, "assets/flwr-mid.png"],
    [coyote, "assets/cyty.png"],
    [delftBlue, "assets/hausinsea.png"],
    [cambridgeBlue, "assets/i.png"],
    [hunterGreen,"assets/chmny.png"],
  ])

  private reference?: ImageArgs;

  private managedImages: ImageArgs[] = [];

  private selected: string = pink;

  constructor() { }

  getGlobalHex(): Option<string> {
    return new Option<string>(this.colourPalette.get(this.selected));
  }

  getThemeImage(): Option<string>{
    return new Option<string>(this.themeImage.get(this.selected));
  }

  getColours(): ColourPalette {
    return this.colourPalette;
  }

  setColour(id: string): void {
    Some<string>(this.colourPalette.get(id)).map( 
      (hex: string) => Some<Document>(document).map(
          (doc: Document) => doc.documentElement.style.setProperty(themeId, hex)));

    const url: Option<string> =  Some<string>(this.themeImage.get(id));
    url.map((u: string) => this.managedImages.forEach(_ => _.src = u));
  }

  signUp(param: ImageArgs){
    this.managedImages.push(param);
  }
}

export type ColourPalette = Map<string, string>;
