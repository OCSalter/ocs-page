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

  getImages(): Map<string, string> {
    return this.themeImage;
  }

  getHexImage(): HexImage[] {
    return Array.from(this.colourPalette.entries()).map(
      _ => this.genHexImage(_[0], _[1], this.themeImage.get(_[0])));
  }

  private genHexImage(i: string, h: string, s?: string): HexImage {
    return {id: i, hex: h, src: s};
  }

  setColour(id: string): void {
    Some<string>(this.colourPalette.get(id)).map( 
      (hex: string) => Some<Document>(document).map(
          (doc: Document) => doc.documentElement.style.setProperty(themeId, hex)));

    Some<string>(this.themeImage.get(id)).map(
      (u: string) => this.managedImages.forEach(_ => _.src = u)
    );
  }

  signUp(param: ImageArgs){
    this.managedImages.push(param);
  }
}

export type ColourPalette = Map<string, string>;

export interface HexImage{
  id: string;
  hex: string;
  src?: string;
}