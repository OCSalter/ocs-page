import { Component, Output, EventEmitter, input, Input } from '@angular/core';
import { ImageArgs } from '../Graphics/ImageArgs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) args!: CardArgs;

  @Output() clickedEvent = new EventEmitter<void>();

  public backgroundType: number = 1;

  onClick(): void { this.clickedEvent.emit() }
}

export interface CardArgs{
  width: number;
  aspectRatio: number;
  titleSize?: number;
  subtitleSize?: number;
  titleText?: string;
  subtitleText?: string;
  imageArgs?: ImageArgs;
} 