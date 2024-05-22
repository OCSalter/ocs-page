import { Component, OnInit } from '@angular/core';
import { ColourPalette, ColourPaletteService } from '../colour-palette.service';

@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrl: './colour-picker.component.css'
})
export class ColourPickerComponent implements OnInit {

  public displayPalette: colourData[] = [];
  constructor(private colourPaletteService: ColourPaletteService) {}

  ngOnInit(): void {
    this.displayPalette = Array.from(this.colourPaletteService.getColours(), ([k, v]) => ({colourId: k, colourHex: v}));
  }

  selectColour(id: string) {
    this.colourPaletteService.setColour(id);
  }
}

interface colourData{
  colourId: string,
  colourHex: string,
}