import { Component, OnInit } from '@angular/core';
import { ColourPalette, ColourPaletteService, HexImage } from '../colour-palette.service';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrl: './colour-picker.component.css'
})
export class ColourPickerComponent implements OnInit {

  public displayHexImages: HexImage[] = [];
  constructor(private colourPaletteService: ColourPaletteService) {}

  ngOnInit(): void {
    this.displayHexImages = this.colourPaletteService.getHexImage();
  }

  selectColour(id: string) {
    this.colourPaletteService.setColour(id);
  }
}

interface colourData{
  colourId: string,
  colourHex: string,
}